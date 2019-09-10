<?php

namespace Aquits\Controller\Payments;

class Manager extends \Aquits\Controller\Manager{
    public function processGeneralAccessPayment(array $data){
        $db = $this->getDatabase();
        $userId = $this->getSession()->get('id');

        $type = $this->getData($data,'type');
        $amount = $this->getData($data,'amount');
        $email = $this->getSession()->get('email');

        if(!isset(array_flip([
            'annual',
            'monthly',
            'forever'
        ])[$type])){
            return $this->reply('Invalid payment type');
        }

        try {
            $client = new \GuzzleHttp\Client();
            $res = $client->request('post', 'https://api.paystack.co/transaction/initialize', [
                'connect_timeout' => 10,
                'headers' => [
                    'Authorization' => 'Bearer sk_test_112353fb046474287b2215c39762667f8f49b35b',
                    'Content-Type' => 'application/json'
                ],
                'json' => [
                    'email' => $userId . '@' . ((string)$this->getContainer()->get('request')->getUri()),
                    'amount' => (string)($amount * 100)
                ],
                'synchronous' => true,
                'verify' => $this->getDocumentRoot() . '/server/ca_bundle.ca'
            ]);
        } catch (\Exception $e) {
            $db->rollback();
            return $this->reply($e->getMessage());
        }

        $statusCode = $res->getStatusCode();
        $body = (string)$res->getBody();

        $body = json_decode($body, true);
        if (!is_array($body)) {
            return $this->reply('Invalid data received from gateway');
        }

        if (!$this->getData($body, 'status')) {
            return $this->reply($this->getData($body, 'message'));
        }

        $paymentData = $this->getData($body, 'data');

        $stmt = $db->prepare('insert into payments (UserId,Amount,PaymentType,Data) values (?,?,?,?)');

        if ($stmt === false) {
            $db->rollback();
            return $errorHandler('Ooops a server error occured while preparing payment data');
        }

        $paymentDataEncoded = json_encode($paymentData);
        $bind = call_user_func_array([
            $stmt,
            'bind_param'
        ], [
            'ids',
            $userId,
            $amount,
            $type,
            $paymentDataEncoded
        ]);

        if ($bind === false) {
            $db->rollback();
            $stmt->close();
            return $errorHandler('Ooops a server error occured while preparing payment data.');
        }

        $execute = $stmt->execute();

        if ($execute === false) {
            $db->rollback();
            $stmt->close();
            return $errorHandler('Ooops a server error occured while preparing payment data..');
        }

        $stmt->close();
    }

    public function processCoachingAccessPayment(){

    }

    public function processGroupAccessPayment(){

    }
}