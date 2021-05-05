<?php

/*
 * To run the migrations from command line, go to instance
 * and run this command :
 * php -r "require 'Migrations/DbMigrations.php';runMigration();"
 */
include "./classes/DBClass.php";
function runMigration()
{
        $connection = DBClass::getInstance()->connect();
        print_r($connection->exec("
                                CREATE TABLE `course` (
                                  `id` int(11) NOT NULL,
                                  `name` varchar(120) NOT NULL,
                                  `description` text NOT NULL,
                                  `created` int(11) NOT NULL,
                                  `updated` int(11) NOT NULL
                                ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
                                ALTER TABLE `course`
                                  ADD PRIMARY KEY (`id`);
                                ALTER TABLE `course`
                                  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
                                COMMIT;
        "));
        
        echo "Migration has been run";
}

?>
