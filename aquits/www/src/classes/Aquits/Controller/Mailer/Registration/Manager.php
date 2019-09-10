<?php
namespace Aquits\Controller\Mailer\Registration;

use \PHPMailer\PHPMailer\{PHPMailer,Exception};

class Manager extends \Aquits\Controller\Manager{
    public function sendNew(array $data){
        $name = $this->getData($data,'name');
        $userId = $this->getData($data,'userId');
        $email = $this->getData($data,'email');

        $db = $this->getDatabase();
        $stmt = $db->prepare('select 1 from tokens as token where token.Token = ? and token.Type = ? and token.Userid = ? and token.isUsed = 0 limit 1');

        if(!$stmt){
            return $this->reply('An error occured while sending verification email');
        }

        $type = 'user_email_verification';

        $process = \Closure::bind(function () use (&$type,&$userId,&$process,&$stmt){
            $token = \Aquits\General\Utils::random(50);
            $verificationUrl = '/tour/verify?withToken='.$token;
            $bind = $stmt->bind_param('ssi',$token,$type,$userId);

            if(!$bind){
                return $this->reply('An error occured while sending verification email.');
            }

            $execute = $stmt->execute();

            if(!$execute){
                return $this->reply('An error occured while sending verification email..');
            }

            $result = $stmt->get_result();
            if($result->num_rows > 0){
                $process();
            }else{
                return $this->reply('Succesfull',true,[
                    'token' => $token,
                    'verificationUrl' => $verificationUrl
                ]);
            }
        },$this);
        
        $out = $process();
        if(!$this->isOk($out)){
            return $out;
        }

        $verificationUrl = $this->getData($out,'verificationUrl');
        $token = $this->getData($out,'token');
        $host = $this->getContainer()->get('request')->getUri()->getHost();
        $port = $this->getContainer()->get('request')->getUri()->getPort() ?: '80';
        $scheme = $this->getContainer()->get('request')->getUri()->getScheme();
        
        $emailHtml= $this->getContainer()->get('view')->render('aquits/app.joinaquits.com/email/registration/index.html',[
            'data' => [
                'verificationUrl' => $verificationUrl,
                'name' => $name,
                'baseUri' => "{$scheme}://{$host}:{$port}"
            ]
        ]);

        /* Send verification email here */
        $mailer = new PHPMailer(true);

        try{
            $mailer->isHTML(true);
            $mailer->setFrom('support@theacquits.com','Support Team');
            $mailer->addAddress($email,$name);
            $mailer->addReplyTo('support@theacquits.com','Support Team');
            $mailer->Subject = 'Email Verification';

            $mailer->Body = $emailHtml;
            $mailer->alt = "Please copy the following url to a web browser to verify your account {$verificationUrl}";
            $mailer->isSMTP();
            $mailer->SMTPDebug = 0;
            $mailer->Host = 'mail.theacquits.com';
            $mailer->Port = 587;
            $mailer->Timeout = 10;
            $mailer->SMTPSecure = '';
            $mailer->SMTPOptions = [
                'ssl' => [
                    'verify_peer' => false,
                    'verify_depth' => 3,
                    'allow_self_signed' => true,
                    'peer_name' => 'mail.theacquits.com',
                    'verify_peer_name' => false,
                    'cafile' => '/etc/ssl/ca_cert.pem'
                ],
            ];
            $mailer->SMTPAuth = true;
            $mailer->Username = 'support@theacquits.com';
            $mailer->Password = 'SecuredAdmin@theacquits.com';

            if(!$mailer->send()){
                return $this->reply('An error occured while sending verification email...,');
            }
        }catch(Exception $e){
            return $this->reply('An error occured while sending verification email...',false,[
                'error' => $e->getMessage()
            ]);
        }

        $stmt = $db->prepare('insert into tokens (Userid,Type,Token) values (?,?,?)');

        if(!$stmt){
            return $this->reply('An error occured while sending verification email....');
        }

        $bind = $stmt->bind_param('iss',$userId,$type,$token);
        if(!$bind){
            return $this->reply('An error occured while sending verification email.....');
        }

        $execute = $stmt->execute();
        if(!$execute){
            return $this->reply('An error occured while sending verification email......');
        }

        if($stmt->insert_id){
            return $this->reply('Email Sent Succesfully',true);
        }

        return $this->reply('An error occured while sending verification email.......');
    }
}