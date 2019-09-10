-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 10, 2019 at 09:14 AM
-- Server version: 8.0.15
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aquits`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `Id` int(10) UNSIGNED NOT NULL,
  `UserId` int(10) UNSIGNED NOT NULL,
  `ActivityName` varchar(255) NOT NULL,
  `Data` longtext CHARACTER SET utf8 COLLATE utf8_general_ci,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`Id`, `UserId`, `ActivityName`, `Data`) VALUES
(151, 164, 'create_account', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ally`
--

CREATE TABLE `ally` (
  `Id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `relationship` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ally`
--

INSERT INTO `ally` (`Id`, `name`, `email`, `relationship`) VALUES
(1, 'formmm', 'enjsmin@gmail.com', 'sexxxxxx'),
(2, 'ggggggggggggggggggggggggggggg', 'benjamin@gmail.com', 'Mentor'),
(3, 'zjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjn', 'benjamin@gmail.com', 'Mentor'),
(4, 'nuhu herry', 'viper@gmail.com', 'Friend'),
(5, 'vb            vggggggggggggggggggggg', 'benjamin@gmail.com', 'Friend'),
(6, 'benjamin', 'benjaminakpama@gmail.com', 'Parent'),
(7, 'benjamin', 'benjaminakpama@gmail.com', 'Parent'),
(8, 'lisa', 'lisa@gmail.com', 'Friend'),
(9, 'sddd', 'jerry99@gmail.com', 'Mentor');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Id` int(11) NOT NULL,
  `DayOfTheWeek` varchar(255) NOT NULL,
  `Time` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `SpotLeft` tinyint(2) NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Id`, `DayOfTheWeek`, `Time`, `Status`, `SpotLeft`, `Name`) VALUES
(1, 'Monday', '01:00', 'Pending', 1, 'nnnnnnnn');

-- --------------------------------------------------------

--
-- Table structure for table `coach`
--

CREATE TABLE `coach` (
  `Id` int(11) NOT NULL,
  `Coach` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `coach`
--

INSERT INTO `coach` (`Id`, `Coach`) VALUES
(5, 'A coach is required');

-- --------------------------------------------------------

--
-- Table structure for table `community`
--

CREATE TABLE `community` (
  `Id` int(9) NOT NULL,
  `user_community_1d` int(9) DEFAULT NULL,
  `Title` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Contents` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Comment` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `community`
--

INSERT INTO `community` (`Id`, `user_community_1d`, `Title`, `Contents`, `Comment`) VALUES
(99, NULL, 'nabsnabn', 'bnbnbnas', NULL),
(102, NULL, 'hggggggggg', 'bnnnnnnnnnnnnnnn', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `getapi`
--

CREATE TABLE `getapi` (
  `Id` int(13) NOT NULL,
  `user_Id` int(13) NOT NULL,
  `UserApi` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `grp`
--

CREATE TABLE `grp` (
  `Id` int(13) NOT NULL,
  `grp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `grp`
--

INSERT INTO `grp` (`Id`, `grp`) VALUES
(1, '{grp}'),
(2, 'Request Group'),
(3, 'Request Group'),
(4, 'Request Group'),
(5, 'Request Group'),
(6, 'Request Group'),
(7, 'Request Group'),
(8, 'Request Group'),
(9, 'Request Group');

-- --------------------------------------------------------

--
-- Table structure for table `lesson`
--

CREATE TABLE `lesson` (
  `Id` int(11) NOT NULL,
  `Title` varchar(225) NOT NULL,
  `WeekNo` tinyint(2) NOT NULL,
  `Content` longtext NOT NULL,
  `VideoUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lesson`
--

INSERT INTO `lesson` (`Id`, `Title`, `WeekNo`, `Content`, `VideoUrl`) VALUES
(14, 'Where are you and where you want to be', 1, 'Everyone has a perfect picture of that beautiful life that they want to live already drafted in their head. Some see themselves making a lot of money tomorrow; others see themselves achieving a huge milestone of some sort in their lives. Whatever goal you may have in life, there has to be a plan of action that has to be drafted and committed to before you would be able to attain your goals. Goals are not achieved by accidents. The distance between where you are now and where you want to be is called a plan.\r\nWhat goals have you set for your life lately?\r\nDo you have a plan of action?\r\nHave you committed to that plan?', '/home/fortune/Documents/aquits/www/public/assets/uploads/727EABqj3y5gGeNb5LHvYE6P3DDSeTAi6A35DhdT'),
(15, 'Breaking limits', 2, 'Now, where it is true to think that everyone has limits that they can\'t easily cross; it would be entirely false to believe that limits can\'t be broken. This is to say; no matter how much effort has gone into doing something without producing results, an attitude of persistent trial will eventually yield that golden success. A limit is the perceived extreme of an activity. It takes a little extra work, a little extra determination to overcome and completely bypass every limit and reach for better spheres of life. Bad habits, perceived as unbreakable are one of life\'s greatest limitations. This is how they are broken; hard work, commitment and determination.\r\nWhat limits have you encountered in life?\r\nHow have you dealt with each one?\r\nWhat level of progress have you made?', '/home/fortune/Documents/aquits/www/public/assets/uploads/BPlRYclHFxi02F1Jx6i3sxGR9Avzl5kyidRw6hp4'),
(16, 'Taking the right step', 3, 'The first step to advancement in man is to outline his problems and seek solutions. But solutions will not be effective until that man begins to apply them. If you have gotten to this point, then you deserve a standing ovation. You have identified your bad habit and you have learned how to deal with them effectively. Now the scope of this course focuses on a specific bad habit; the addiction to pornography. So if you fall into this habit, this course is for you. You have recognized your habit and the pathway to being free of this habit is by working extra hard to do everything that would take up all the time that you usually allot to pornography. Remember the mind\'s grit? The mind is capable of completely focusing on one assignment at a time. Whatever the mind focuses on in this way becomes a success. When you redirect your mind to focus on something else that will demand all of your time, the habit will slowly fade away. But you have to take that step. You have to decide to step out in the right direction.\r\nAre you addicted to pornography?\r\nHave you tried to stop?\r\nHave you tried using your \"pornography time\" for another activity?', '/home/fortune/Documents/aquits/www/public/assets/uploads/2K18WItKXG6Eg0ewI21q51PQw7y444Fda4Ya7O0s'),
(17, 'Commitment to change', 4, 'No matter how badly you want to change your attitude, if you are not completely committed to this change, nothing will change. If you would commit to doing everything that the change you desire demands from you, that change will be sustained. The most committed party in the change you wish to see in your life must be you. That is to say that no matter the amount of trainings you receive, the number of books you read, if you don\'t decide to turn your back on all things pornography, you may never be rid of it. True change demands continual commitment.\r\nHow committed have you been to changing from your habit of pornography?\r\nWhen the temptation to fall back to your habit arises, how do you handle it?\r\nList the activities you are involves in that keep you from engaging in pornography.\r\n', '/home/fortune/Documents/aquits/www/public/assets/uploads/Zg6nB5r7FAS9AK3pa7yz5gwC5VCy3g4338w20E5L'),
(18, 'Impending dangers of a poor health system', 5, 'One of the greatest consequences of a life given to pornography is an addiction to masturbation and sex. This habit ensures that an individual is never satisfied sexually and may open the door to STDs (sexually transmitted diseases). If an individual must live fully to express all the dreams of becoming great in life, his or her life must be taken seriously. That individual must commit to attitudes that should ensure that his body remains healthy and thriving, able to convey him or her to their desired goal. A poor health system will definitely impede an individual\'s ability to move out and run after his life\'s goals.\r\nAre you completely healthy?\r\nHave you noticed a decline in your health due to attitudes related to pornography?\r\nHow committed are you to staying healthy?', '/home/fortune/Documents/aquits/www/public/assets/uploads/8R8fa2kdQPhMlOof725uDjX0xX9uaanjb76y40x7'),
(19, 'Psychological imbalances', 6, 'Most health problems experienced by people today originate from the state and nature of their minds. The mind happens to be the major target of pornography. It develops unrealistic expectations and faulty understandings in the mind of the addict concerning other people, especially the opposite sex. If this habit is not curbed appropriately and in time, the mind begins to become completely colonized by sexual thoughts. That is, the addicted individual may not be able to develop normal relationships with the opposite sex without expectations of sexual relations. This leads to a sharp decline in the quality or relationships the addict can be involved in.\r\nWhat is the major category of thoughts that occupy your daily life?\r\nHow would you relate with others?\r\nDo you have sexual thoughts when relating with people?', '/home/fortune/Documents/aquits/www/public/assets/uploads/24T9hp2YVAjgiQbwaY34RQjl0nJI35i34pOv5B7t'),
(20, 'Your body as a vehicle to achieving your dreams', 7, 'When the body is healthy and the mind entertains healthy thoughts, the result is a healthy individual. As already stated earlier, an individual can only achieve his goals and dreams if he or she is healthy. An individual cannot arrive at his desired future if his body is too weak to take him there. This is the major reason for the failed and aborted dreams of men and women that lie in the graveyard today. A healthy and sound body is a great prerequisite in achieving a dream. Hence, commitment to a sound body and mental health must always comes first place.\r\nAre there any health issues that threaten your dreams?\r\nIf yes, what steps have you taken to address them?\r\nIs any one of them connected to pornographic addiction?', '/home/fortune/Documents/aquits/www/public/assets/uploads/KGGbt32c6Gzb21G999T92M408giU6i4R75Ne0W98'),
(21, 'A sound health is peace to the mind', 8, 'A mind enshrouded by peace and calm is a necessary prerequisite to attaining the goals set by an individual to achieve his dreams. One of the greatest constraints to this peace is a bad health system. When a man is healthy, he is peaceful and is capable of facing anything that comes his way, but with poor health comes reasons to be anxious. Suffice it t say that mean and women with sex-related health problems are the most anxious bunch and ultimately lacking in mental peace.\r\nHow peaceful are you in your mind?\r\nDoes pornography disturb your peace?\r\nHave you taken steps to ensure you are always at peace?\r\n', '/home/fortune/Documents/aquits/www/public/assets/uploads/SZC973x2e7IU0x7e8xX3vuruX77612Q4gd4wkemt'),
(22, 'You can be who you want to be', 9, 'The issues of destiny and purpose are delicate ones. Most people think that if they try so hard to become something and it doesn\'t work, they are not meant to be that thing in the first place. That is so far from the truth. You can be whatever you decide to be. You can attain whatever level you wish to attain. You reach whatever height you wish to reach. But most importantly, if you out your mind and your back solidly into it, you can easily be rid of whatever kind of bad habits that you want to be rid of. The very first step to attaining this freedom is to understand firmly in your mind, that the only limitation you can have is you.\r\nWhat kind of life do you envision for yourself?\r\nDo you still see pornography in your future?\r\nHow committed are you to that beautiful future you desire?', '/home/fortune/Documents/aquits/www/public/assets/uploads/d96e7jXnPZEcOc0C3DzImn8skDzLKbx26KdUMCXl'),
(23, 'A better life', 10, 'No matter how good and strong an individual is, he always admires and idolizes those that have strengths in areas where he is weak. Whenever we idolize another person, what we are basically saying is that the person is living a better life than ours. But know this; a better life is not a destination. It is not a particular kind of life. A better life simply is a life that is committed to working at developing oneself in areas where there are weaknesses. So, a better life really is a journey. No one\'s life is better than yours. You can be better than who you were yesterday. Don\'t compete with others; rather compete with your past self. Decide to live a better life today; a life free of pornography.\r\nDo you have anyone that you idolize?\r\nWhat is that person\'s character?\r\nList three things in your life that will enable you have a better life if you are rid of them.', '/home/fortune/Documents/aquits/www/public/assets/uploads/KVYNrl8w5dE616atNGo45mAwflkIM2DrJl1QOQ66'),
(24, 'Building quality relationships', 11, 'Experts have observed that 95% of people who are addicted to pornography and everything that follows after it tend to suffer from bouts of low self esteem. Almost no one that entertains pornography in the society can bear to proudly talk about the habit publicly because they consider it very embarrassing. But in the face of such narrow constraints, these people would rather hang on to this addiction despite the cost it exerts. A poor self esteem s completely dealt with when an individual commits to working on himself, perfecting and strengthening himself in all his weaknesses. Summarily, letting go of the embarrassing habit of pornography should produce a sure boost in an individual\'s self esteem.\r\nHow do you see yourself?\r\nDo you consider yourself a model citizen of your society? (Give reasons for your answer)\r\nWhat steps have you taken to build your self esteem?', '/home/fortune/Documents/aquits/www/public/assets/uploads/wVpx7k2WzkfJeiT2Fn5n2SR4bBsAB3e99yiNF412'),
(25, 'Commitment to change', 12, 'As already stated in earlier courses, one of the worst effects of an addiction to pornography is the effect it has on the quality of the individual\'s relationship with other people. It builds a poor kin of outlook in thee addict\'s mind. Where others are simply relating to the opposite sex without expectations, an addict always hopes for sex whenever he relates with the opposite sex. The expectations of an individual have a way of making or destroying his relationships with others. Where good expectations help to build better relationships, horrible ones like the one mentioned above outs a strain on the individual\'s relating with themselves. It goes without saying that letting go of the habit of pornography should promote healthier and quality relationships.\r\nHave you lost any friend because of this addiction?\r\nWhat are your expectations from those who you relate with?\r\nHow do you feel when your expectations in relationships are not met', '/home/fortune/Documents/aquits/www/public/assets/uploads/Uxs45HbuO8Z7dho98bZQq58MR0vv4I1Qmt3H3Sb8');

-- --------------------------------------------------------

--
-- Table structure for table `lessoncontent`
--

CREATE TABLE `lessoncontent` (
  `Id` int(13) NOT NULL,
  `Content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lessoncontent`
--

INSERT INTO `lessoncontent` (`Id`, `Content`) VALUES
(39, '                                                  welcome                      ');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `Id` int(11) NOT NULL,
  `MessageBody` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`Id`, `MessageBody`) VALUES
(10, 'jkjajdksd'),
(11, 'hthjereruerep '),
(12, 'hthjereruerep '),
(13, 'jkhjhkjhk'),
(14, 'jkhjhkjhk'),
(15, 'jkhjhkjhk'),
(16, 'jkhjhkjhk'),
(17, 'jkhjhkjhk'),
(18, 'jkjkaksja hajhsjas'),
(19, 'jkhjhk jhkhkj'),
(20, 'ghhhghghg'),
(21, 'hjhdjsdhjhsd'),
(22, 'hjdhjsdhjs'),
(23, 'help hekjwl'),
(24, 'hhdjshdjsdhsdj'),
(25, 'hjdsjdsd sdhjsdsd'),
(26, 'hjhjhj'),
(27, 'gggggggggggggggggggggggggg');

-- --------------------------------------------------------

--
-- Table structure for table `metrics`
--

CREATE TABLE `metrics` (
  `Id` int(13) NOT NULL,
  `Score` int(255) NOT NULL,
  `Range0` varchar(255) NOT NULL,
  `Range1` varchar(255) NOT NULL,
  `Range2` varchar(255) NOT NULL,
  `Range3` varchar(255) NOT NULL,
  `Range4` varchar(255) NOT NULL,
  `Range5` varchar(255) NOT NULL,
  `Range6` varchar(255) NOT NULL,
  `Range7` varchar(255) NOT NULL,
  `Range8` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `metrics`
--

INSERT INTO `metrics` (`Id`, `Score`, `Range0`, `Range1`, `Range2`, `Range3`, `Range4`, `Range5`, `Range6`, `Range7`, `Range8`) VALUES
(43, 76, '58', '74', '77', '77', '76', '79', '79', '79', '84');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `Id` int(255) UNSIGNED NOT NULL,
  `UserId` int(255) UNSIGNED NOT NULL,
  `Amount` decimal(65,10) UNSIGNED NOT NULL,
  `PaymentType` varchar(10) NOT NULL,
  `CardNumber` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `CardCvv2` int(3) UNSIGNED DEFAULT NULL,
  `CardExpiryMonth` int(2) UNSIGNED DEFAULT NULL,
  `CardExpiryYear` int(4) UNSIGNED DEFAULT NULL,
  `IsPending` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `IsVerified` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `IsCancelled` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `PaidDate` timestamp NULL DEFAULT NULL,
  `InvoiceDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Data` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `resources`
--

CREATE TABLE `resources` (
  `Id` int(11) NOT NULL,
  `Title` varchar(225) NOT NULL,
  `Note` longtext NOT NULL,
  `Video` varchar(225) NOT NULL,
  `Pdf` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `secrettokens`
--

CREATE TABLE `secrettokens` (
  `Id` int(255) UNSIGNED NOT NULL,
  `UserId` int(255) UNSIGNED NOT NULL,
  `Token` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Data` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `sobriety`
--

CREATE TABLE `sobriety` (
  `Id` int(11) NOT NULL,
  `Month` varchar(255) NOT NULL,
  `Day` int(255) NOT NULL,
  `Year` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sobriety`
--

INSERT INTO `sobriety` (`Id`, `Month`, `Day`, `Year`) VALUES
(1, 'januarey', 23, 1998),
(5, '2', 1, 2016),
(6, '4', 4, 2017),
(7, '1', 2, 2018),
(8, '3', 4, 2016),
(9, '2', 4, 1999),
(10, '1', 3, 2017),
(11, '6', 5, 1999),
(12, '2', 2, 2017),
(13, '5', 6, 2018),
(14, '1', 1, 2019);

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `Id` int(255) UNSIGNED NOT NULL,
  `Userid` int(255) UNSIGNED NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Token` varchar(255) NOT NULL,
  `isUsed` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `DateUsed` timestamp NULL DEFAULT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`Id`, `Userid`, `Type`, `Token`, `isUsed`, `DateUsed`) VALUES
(1, 70, 'user_email_verification', '9z9x4LB8LhyH1WF54IoEs6yh2GTpu0Oo8d1k0y7qfvwI2lGQ5W', 0, NULL),
(2, 116, 'user_email_verification', 'Yf91737Lj17Mx3i0z2K5E9XngH2eZ5wvn34b66RgQKP3ol43Q6', 0, NULL),
(3, 139, 'user_email_verification', 'H3UzZ5y31Z2Zs1940LLpNBrUWoj2wJj3hxYBU3QqNqptoat720', 0, NULL),
(4, 140, 'user_email_verification', 'ZmrkPk1om29cCo6gp2733EZ3iF65d3RIQUvpd6OK030BN5XrW4', 0, NULL),
(5, 148, 'user_email_verification', 'h955QP1SNswsg6dCXDBOk227qBU8nQ6Q1C8vru9568458wh2el', 0, NULL),
(6, 149, 'user_email_verification', 'AB6cITR42LSOQ81276wzGS8g0V8oq2n5HlXlvunj5je0r4c344', 0, NULL),
(7, 150, 'user_email_verification', 'LmsKmX88UoEOyTyae140N1z83h7OpRInZUVJS4yc71z7fY4svl', 0, NULL),
(8, 151, 'user_email_verification', 'ZF2NKgO93219nAkkc8rFyf01Z8tq987rn5T89vEFV8OQto6A8z', 0, NULL),
(9, 152, 'user_email_verification', 'ls3mzXBmm62pI4D8nr0boyAqd3SS5i40M7mNhIsrsv7U7y63ss', 0, NULL),
(10, 153, 'user_email_verification', 'gN9io0L1A83670XK4f8Hm59vbj6366GQa92z9DKnSL82fn86VZ', 0, NULL),
(11, 154, 'user_email_verification', 'jf4OGKGeEvSBc1J2qB41M3ep5rc8zkX1Xz8JjSLMUS6V1u52vP', 0, NULL),
(12, 155, 'user_email_verification', '1Aswy506k6ScFob3c6U6pgewu140e84JFsWNX94NIakJSFZuir', 0, NULL),
(13, 156, 'user_email_verification', 'To3QBk5tFBc0qLuKE1kQf5OW6RTqlP1eO6Gi74D5HE7Hko7dMU', 0, NULL),
(16, 158, 'user_email_verification', 'fqvvt3G0hIM653ugrZfR5fOgDJK17EwW3zu8JRQP61w9klCF26', 0, NULL),
(17, 164, 'user_email_verification', '7BRgtz4350tn6NFNsQ38BI9WTeS7dA979zv6foCpckImRn99J9', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `trainings`
--

CREATE TABLE `trainings` (
  `Id` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `WeekNo` tinyint(2) NOT NULL,
  `Iconurl` varchar(255) NOT NULL,
  `Description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trainings`
--

INSERT INTO `trainings` (`Id`, `Title`, `WeekNo`, `Iconurl`, `Description`) VALUES
(18, 'Where are you and where you want to be', 1, '/home/fortune/Documents/aquits/www/public/assets/uploads/fysNMJ77UyoXeZ3YuoT60rk9auiM47WtBM6ZbF10', 'Everyone has a perfect picture of that beautiful life that they want to live already drafted in their head. Some see themselves making a lot of money tomorrow; others see themselves achieving a huge milestone of some sort in their lives. Whatever goal you may have in life, there has to be a plan of action that has to be drafted and committed to before you would be able to attain your goals. Goals are not achieved by accidents. The distance between where you are now and where you want to be is called a plan.\r\nWhat goals have you set for your life lately?\r\nDo you have a plan of action?\r\nHave you committed to that plan?'),
(20, 'Breaking limits', 2, '/home/fortune/Documents/aquits/www/public/assets/uploads/prnQfzT6lGCU71DBSE2EBF5YP6ISDHhj0bbFUbR0', 'Now, where it is true to think that everyone has limits that they can\'t easily cross; it would be entirely false to believe that limits can\'t be broken. This is to say; no matter how much effort has gone into doing something without producing results, an attitude of persistent trial will eventually yield that golden success. A limit is the perceived extreme of an activity. It takes a little extra work, a little extra determination to overcome and completely bypass every limit and reach for better spheres of life. Bad habits, perceived as unbreakable are one of life\'s greatest limitations. This is how they are broken; hard work, commitment and determination.\r\nWhat limits have you encountered in life?\r\nHow have you dealt with each one?\r\nWhat level of progress have you made?'),
(21, 'Taking the right step', 3, '/home/fortune/Documents/aquits/www/public/assets/uploads/y40tFwRt9xmL48t3nAEm0tTtAtL67S5F0A0ZCerj', 'The first step to advancement in man is to outline his problems and seek solutions. But solutions will not be effective until that man begins to apply them. If you have gotten to this point, then you deserve a standing ovation. You have identified your bad habit and you have learned how to deal with them effectively. Now the scope of this course focuses on a specific bad habit; the addiction to pornography. So if you fall into this habit, this course is for you. You have recognized your habit and the pathway to being free of this habit is by working extra hard to do everything that would take up all the time that you usually allot to pornography. Remember the mind\'s grit? The mind is capable of completely focusing on one assignment at a time. Whatever the mind focuses on in this way becomes a success. When you redirect your mind to focus on something else that will demand all of your time, the habit will slowly fade away. But you have to take that step. You have to decide to step out in the right direction.\r\nAre you addicted to pornography?\r\nHave you tried to stop?\r\nHave you tried using your \"pornography time\" for another activity?'),
(22, 'Commitment to change', 4, '/home/fortune/Documents/aquits/www/public/assets/uploads/j53F6j79hoGB3O5I72BFg2cw1Sz1ul7VkC024Iq1', 'No matter how badly you want to change your attitude, if you are not completely committed to this change, nothing will change. If you would commit to doing everything that the change you desire demands from you, that change will be sustained. The most committed party in the change you wish to see in your life must be you. That is to say that no matter the amount of training you receive, the number of books you read, if you don\'t decide to turn your back on all things pornography, you may never be rid of it. True change demands continual commitment.\r\nHow committed have you been to changing from your habit of pornography?\r\nWhen the temptation to fall back to your habit arises, how do you handle it?\r\nList the activities you are involves in that keep you from engaging in pornography.'),
(23, 'Impending dangers of a poor health system', 5, '/home/fortune/Documents/aquits/www/public/assets/uploads/QWUhzEW395vWB8A3Gr5i91r2910hHROZJj9zZ1g4', 'One of the greatest consequences of a life given to pornography is an addiction to masturbation and sex. This habit ensures that an individual is never satisfied sexually and may open the door to STDs (sexually transmitted diseases). If an individual must live fully to express all the dreams of becoming great in life, his or her life must be taken seriously. That individual must commit to attitudes that should ensure that his body remains healthy and thriving, able to convey him or her to their desired goal. A poor health system will definitely impede an individual\'s ability to move out and run after his life\'s goals.\r\nAre you completely healthy?\r\nHave you noticed a decline in your health due to attitudes related to pornography?\r\nHow committed are you to staying healthy?'),
(24, 'Psychological imbalances', 6, '/home/fortune/Documents/aquits/www/public/assets/uploads/X0ivp7zA2cmDN75QEDh63K6V4f846n5S31a30Q6D', 'Most health problems experienced by people today originate from the state and nature of their minds. The mind happens to be the major target of pornography. It develops unrealistic expectations and faulty understandings in the mind of the addict concerning other people, especially the opposite sex. If this habit is not curbed appropriately and in time, the mind begins to become completely colonized by sexual thoughts. That is, the addicted individual may not be able to develop normal relationships with the opposite sex without expectations of sexual relations. This leads to a sharp decline in the quality or relationships the addict can be involved in.\r\nWhat is the major category of thoughts that occupy your daily life?\r\nHow would you relate with others?\r\nDo you have sexual thoughts when relating with people?'),
(25, 'Your body as a vehicle to achieving your dreams', 7, '/home/fortune/Documents/aquits/www/public/assets/uploads/mQ09etBMeP67R7Wv6KEnZzkhJm2oagnR6YeK65Zy', 'When the body is healthy and the mind entertains healthy thoughts, the result is a healthy individual. As already stated earlier, an individual can only achieve his goals and dreams if he or she is healthy. An individual cannot arrive at his desired future if his body is too weak to take him there. This is the major reason for the failed and aborted dreams of men and women that lie in the graveyard today. A healthy and sound body is a great prerequisite in achieving a dream. Hence, commitment to a sound body and mental health must always comes first place.\r\nAre there any health issues that threaten your dreams?\r\nIf yes, what steps have you taken to address them?\r\nIs any one of them connected to pornographic addiction?'),
(26, 'A sound health is peace to the mind', 8, '/home/fortune/Documents/aquits/www/public/assets/uploads/8FvwFUD6zn0M1E63El9b2EJH3ulnvuxRM094Rznk', 'A mind enshrouded by peace and calm is a necessary prerequisite to attaining the goals set by an individual to achieve his dreams. One of the greatest constraints to this peace is a bad health system. When a man is healthy, he is peaceful and is capable of facing anything that comes his way, but with poor health comes reasons to be anxious. Suffice it t say that mean and women with sex-related health problems are the most anxious bunch and ultimately lacking in mental peace.\r\nHow peaceful are you in your mind?\r\nDoes pornography disturb your peace?\r\nHave you taken steps to ensure you are always at peace?'),
(27, 'You can be who you want to be', 9, '/home/fortune/Documents/aquits/www/public/assets/uploads/ojjDy937zm7S0REfy1KA2d2SA664276iLT882DoI', 'The issues of destiny and purpose are delicate ones. Most people think that if they try so hard to become something and it doesn\'t work, they are not meant to be that thing in the first place. That is so far from the truth. You can be whatever you decide to be. You can attain whatever level you wish to attain. You reach whatever height you wish to reach. But most importantly, if you out your mind and your back solidly into it, you can easily be rid of whatever kind of bad habits that you want to be rid of. The very first step to attaining this freedom is to understand firmly in your mind, that the only limitation you can have is you.\r\nWhat kind of life do you envision for yourself?\r\nDo you still see pornography in your future?\r\nHow committed are you to that beautiful future you desire?'),
(28, 'A better life', 10, '/home/fortune/Documents/aquits/www/public/assets/uploads/8rkj16q53o22fpM63q030q3spq95p2jNS8662R68', 'No matter how good and strong an individual is, he always admires and idolizes those that have strengths in areas where he is weak. Whenever we idolize another person, what we are basically saying is that the person is living a better life than ours. But know this; a better life is not a destination. It is not a particular kind of life. A better life simply is a life that is committed to working at developing oneself in areas where there are weaknesses. So, a better life really is a journey. No one\'s life is better than yours. You can be better than who you were yesterday. Don\'t compete with others; rather compete with your past self. Decide to live a better life today; a life free of pornography.\r\nDo you have anyone that you idolize?\r\nWhat is that person\'s character?\r\nList three things in your life that will enable you have a better life if you are rid of them.'),
(29, 'Building quality relationships', 11, '/home/fortune/Documents/aquits/www/public/assets/uploads/1tq5gE6NCxKBbqKPX09B3JvxlbjdH5Dp2bKDAKAY', 'Experts have observed that 95% of people who are addicted to pornography and everything that follows after it tend to suffer from bouts of low self esteem. Almost no one that entertains pornography in the society can bear to proudly talk about the habit publicly because they consider it very embarrassing. But in the face of such narrow constraints, these people would rather hang on to this addiction despite the cost it exerts. A poor self esteem s completely dealt with when an individual commits to working on himself, perfecting and strengthening himself in all his weaknesses. Summarily, letting go of the embarrassing habit of pornography should produce a sure boost in an individual\'s self esteem.\r\nHow do you see yourself?\r\nDo you consider yourself a model citizen of your society? (Give reasons for your answer)\r\nWhat steps have you taken to build your self esteem?'),
(30, 'Commitment to change', 12, '/home/fortune/Documents/aquits/www/public/assets/uploads/dKCdmCh7P3rkZC62FnWxcxK8pJjLsMEj363TVvq7', 'As already stated in earlier courses, one of the worst effects of an addiction to pornography is the effect it has on the quality of the individual\'s relationship with other people. It builds a poor kin of outlook in thee addict\'s mind. Where others are simply relating to the opposite sex without expectations, an addict always hopes for sex whenever he relates with the opposite sex. The expectations of an individual have a way of making or destroying his relationships with others. Where good expectations help to build better relationships, horrible ones like the one mentioned above outs a strain on the individual\'s relating with themselves. It goes without saying that letting go of the habit of pornography should promote healthier and quality relationships.\r\nHave you lost any friend because of this addiction?\r\nWhat are your expectations from those who you relate with?\r\nHow do you feel when your expectations in relationships are not met?');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(255) UNSIGNED NOT NULL,
  `Username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'user',
  `RegistrationAccountType` varchar(255) DEFAULT NULL,
  `DateOfBirth` timestamp NOT NULL,
  `Age` tinyint(2) UNSIGNED NOT NULL,
  `IsTrial` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `IsActive` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `IsBlocked` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `IsVerified` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `IsDeactivated` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `ExpiryDate` timestamp NULL DEFAULT NULL,
  `DateOfRegistration` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Username`, `Email`, `Password`, `Type`, `RegistrationAccountType`, `DateOfBirth`, `Age`, `IsTrial`, `IsActive`, `IsBlocked`, `IsVerified`, `IsDeactivated`, `ExpiryDate`) VALUES
(164, 'jerry nuhu', 'benjaminakpama@gmail.com', '4399fede8a38a4b26f6fe806884e29d0383157f8e440dd0de50e495ebbf38b037f75e7e052b1d807c353307f0d5aecfe283c75f40b756583dd09aca7a1b619e4', 'user', 'trial', '2019-08-08 23:00:00', 20, 1, 0, 0, 0, 0, '2019-08-16 08:35:41');

-- --------------------------------------------------------

--
-- Table structure for table `user_community`
--

CREATE TABLE `user_community` (
  `Id` int(7) NOT NULL,
  `isBlocked` tinyint(4) NOT NULL,
  `isSuspended` tinyint(4) NOT NULL,
  `TotalNoOfSuspend` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `verify`
--

CREATE TABLE `verify` (
  `Id` int(11) NOT NULL,
  `Gender` varchar(225) NOT NULL,
  `MaritalStatus` varchar(225) NOT NULL,
  `Country` varchar(225) NOT NULL,
  `Ethnicity` varchar(225) NOT NULL,
  `Religion` varchar(225) NOT NULL,
  `Timezone` varchar(225) NOT NULL,
  `Username` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `verify`
--

INSERT INTO `verify` (`Id`, `Gender`, `MaritalStatus`, `Country`, `Ethnicity`, `Religion`, `Timezone`, `Username`) VALUES
(55, '943331725', 'Widowed', 'NG', 'Black or African American', '1028104434', 'West Central Africa', 'elixir'),
(56, '855969416', 'Divorced', 'AI', 'American Indian or Alaskan Native', '1028104448', 'West Central Africa', 'kamsoko'),
(57, '943331725', 'Single', 'NG', 'Black or African American', '1028104427', 'West Central Africa', 'temi'),
(58, '855969416', 'Married', 'NG', 'Asian', '1028104429', 'West Central Africa', 'john'),
(59, '855969416', 'Married', 'NG', 'Hispanic or Latino or Spanish Origin', '1028104428', 'West Central Africa', 'sideguy'),
(60, '855969416', 'Single', 'NG', 'Hispanic or Latino or Spanish Origin', '1028104434', 'West Central Africa', 'kamaoakoa'),
(61, '855969416', 'Single', 'NG', 'Hispanic or Latino or Spanish Origin', '1028104434', 'West Central Africa', 'kakak'),
(62, '855969416', 'Single', 'NG', 'Hispanic or Latino or Spanish Origin', '1028104434', 'West Central Africa', 'jakjskas');

-- --------------------------------------------------------

--
-- Table structure for table `webinars`
--

CREATE TABLE `webinars` (
  `Id` int(11) NOT NULL,
  `Title` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `InputTime` varchar(225) NOT NULL,
  `Note` longtext NOT NULL,
  `Content` longtext NOT NULL,
  `Video` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `ActivityName` (`ActivityName`),
  ADD KEY `Date` (`Date`);

--
-- Indexes for table `ally`
--
ALTER TABLE `ally`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `DayOfTheWeek` (`DayOfTheWeek`),
  ADD KEY `Time` (`Time`),
  ADD KEY `Status` (`Status`),
  ADD KEY `Name` (`Name`);

--
-- Indexes for table `coach`
--
ALTER TABLE `coach`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `community`
--
ALTER TABLE `community`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `getapi`
--
ALTER TABLE `getapi`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `user_Id` (`user_Id`);

--
-- Indexes for table `grp`
--
ALTER TABLE `grp`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Title` (`Title`),
  ADD KEY `WeekNo` (`WeekNo`),
  ADD KEY `Title_2` (`Title`),
  ADD KEY `VideoUrl` (`VideoUrl`);

--
-- Indexes for table `lessoncontent`
--
ALTER TABLE `lessoncontent`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `metrics`
--
ALTER TABLE `metrics`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `PaymentType` (`PaymentType`),
  ADD KEY `CardExpiryMonth` (`CardExpiryMonth`),
  ADD KEY `CardExpiryYear` (`CardExpiryYear`),
  ADD KEY `IsPending` (`IsPending`),
  ADD KEY `IsVerified` (`IsVerified`),
  ADD KEY `IsCancelled` (`IsCancelled`),
  ADD KEY `PaidDate` (`PaidDate`),
  ADD KEY `InvoiceDate` (`InvoiceDate`),
  ADD KEY `Amount` (`Amount`);

--
-- Indexes for table `resources`
--
ALTER TABLE `resources`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `secrettokens`
--
ALTER TABLE `secrettokens`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `Token` (`Token`),
  ADD KEY `Type` (`Type`);

--
-- Indexes for table `sobriety`
--
ALTER TABLE `sobriety`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Userid` (`Userid`),
  ADD KEY `Type` (`Type`),
  ADD KEY `Token` (`Token`),
  ADD KEY `isUsed` (`isUsed`),
  ADD KEY `DateUsed` (`DateUsed`),
  ADD KEY `Date` (`Date`);

--
-- Indexes for table `trainings`
--
ALTER TABLE `trainings`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Title` (`Title`),
  ADD KEY `WeekNo` (`WeekNo`),
  ADD KEY `Iconurl` (`Iconurl`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `Username` (`Username`),
  ADD KEY `Password` (`Password`),
  ADD KEY `Type` (`Type`),
  ADD KEY `Age` (`Age`),
  ADD KEY `DateOfBirth` (`DateOfBirth`),
  ADD KEY `DateOfRegistration` (`DateOfRegistration`),
  ADD KEY `IsTrial` (`IsTrial`),
  ADD KEY `IsBlocked` (`IsBlocked`),
  ADD KEY `IsActive` (`IsActive`),
  ADD KEY `ExpiryDate` (`ExpiryDate`),
  ADD KEY `IsDeactivated` (`IsDeactivated`),
  ADD KEY `IsVerified` (`IsVerified`),
  ADD KEY `RegistrationAccountType` (`RegistrationAccountType`);

--
-- Indexes for table `verify`
--
ALTER TABLE `verify`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `webinars`
--
ALTER TABLE `webinars`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `Id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT for table `ally`
--
ALTER TABLE `ally`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `coach`
--
ALTER TABLE `coach`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `community`
--
ALTER TABLE `community`
  MODIFY `Id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `getapi`
--
ALTER TABLE `getapi`
  MODIFY `Id` int(13) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `grp`
--
ALTER TABLE `grp`
  MODIFY `Id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `lesson`
--
ALTER TABLE `lesson`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `lessoncontent`
--
ALTER TABLE `lessoncontent`
  MODIFY `Id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `metrics`
--
ALTER TABLE `metrics`
  MODIFY `Id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `Id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `resources`
--
ALTER TABLE `resources`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `secrettokens`
--
ALTER TABLE `secrettokens`
  MODIFY `Id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sobriety`
--
ALTER TABLE `sobriety`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `Id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `trainings`
--
ALTER TABLE `trainings`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT for table `verify`
--
ALTER TABLE `verify`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `webinars`
--
ALTER TABLE `webinars`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activities`
--
ALTER TABLE `activities`
  ADD CONSTRAINT `users_activities` FOREIGN KEY (`UserId`) REFERENCES `users` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `users_payments` FOREIGN KEY (`UserId`) REFERENCES `users` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
