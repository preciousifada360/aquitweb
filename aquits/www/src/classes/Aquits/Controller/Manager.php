<?php

namespace Aquits\Controller;

class Manager extends \Aquits\Templates\General{

    public function getControl(string $type){
        switch($type){
            case 'registration':
                $control = $this->get('__controls-->registration');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Registration\Manager($container);
                    $this->set('__controls-->registration',$control);
                }

                return $control;
            break;

            case 'training':
                $control = $this->get('__controls-->training');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Training\Manager($container);
                    $this->set('__controls-->training',$control);
                }
                return $control;
            break;

            case 'forum':
                $control = $this->get('__controls-->forum');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control= new \Aquits\Controller\Forum\Manager($container);
                    $this->set('__controls-->forum',$control);
                }
                return $control;
            break;

            case 'resources':
                $control = $this->get('__controls-->resources');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Resources\Manager($container);
                    $this->set('__controls-->resources',$control);
                }
                return $control;
            break;

            case 'webinars':
                $control = $this->get('__controls-->webinars');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Webinars\Manager($container);
                    $this->set('__controls-->webinars',$control);
                }
                return $control;
            break;

            case 'mailer':
                $control = $this->get('__controls-->mailer');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Mailer\Manager($container);
                    $this->set('__controls-->mailer',$control);
                }
                return $control;
            break;

            case 'login':
                $control = $this->get('__controls-->login');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Login\Manager($container);
                    $this->set('__controls-->login',$control);
                }
                return $control;
            break;

            case 'account':
                $control = $this->get('__controls-->account');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Account\Manager($container);
                    $this->set('__controls-->account',$control);
                }
                return $control;
            break;

            case 'validator':
                $control = $this->get('__controls-->validator');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Validator\Manager($container);
                    $this->set('__controls-->validator',$control);
                }
                return $control;
            break;

            case 'user':
                $control = $this->get('__controls-->user');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\User\Manager($container);
                    $this->set('__controls-->user',$control);
                }
                return $control;
            break;

             case 'group':
                $control = $this->get('__controls-->group');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Group\Manager($container);
                    $this->set('__controls-->group',$control);
                }
                return $control;
            break;

            case 'grp':
                $control = $this->get('__controls-->grp');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Grp\Manager($container);
                    $this->set('__controls-->grp',$control);
                }
                return $control;
            break;

            case 'ally':
                $control = $this->get('__controls-->ally');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Ally\Manager($container);
                    $this->set('__controls-->ally',$control);
                }
                return $control;
            break;

            case 'metrics':
                $control = $this->get('__controls-->metrics');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Metrics\Manager($container);
                    $this->set('__controls-->metrics',$control);
                }
                return $control;
            break;

            case 'coach':
                $control = $this->get('__controls-->coach');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Coach\Manager($container);
                    $this->set('__controls-->coach',$control);
                }
                return $control;
            break;

            case 'verify':
            $control = $this->get('__controls-->verify');
            if(!is_object($control)){
                $container = $this->getContainer();
                $control = new \Aquits\Controller\Verify\Manager($container);
                $this->set('__controls-->verify',$control);
            }
            return $control;
        break;

        case 'sobriety':
            $control = $this->get('__controls-->sobriety');
            if(!is_object($control)){
                $container = $this->getContainer();
                $control = new \Aquits\Controller\Sobriety\Manager($container);
                $this->set('__controls-->sobriety',$control);
            }
            return $control;
        break;

        case 'messages':
            $control = $this->get('__controls-->messages');
            if(!is_object($control)){
                $container = $this->getContainer();
                $control = new \Aquits\Controller\Messages\Manager($container);
                $this->set('__controls-->messages',$control);
            }
            return $control;
        break;

        case 'userApi':
            $control = $this->get('__controls-->userApi');
            if(!is_object($control)){
                $container = $this->getContainer();
                $control = new \Aquits\Controller\userApi\Manager($container);
                $this->set('__controls-->userApi',$control);
            }
            return $control;
        break;
        }
    }
}