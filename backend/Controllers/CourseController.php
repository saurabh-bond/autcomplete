<?php

class CourseController extends Controller
{
        /**
         * @desc This function is used to fetch the course
         * @params $searchText
         */
        public static function fetchCourse()
        {
                $data = [];
                
                $search = "";
                if (isset($_GET['search']) && $_GET['search'] != "") {
                        $search = $_GET['search'];
                }
                $courseDetails = DBClass::getInstance()
                        ->selectQuery("SELECT * FROM course WHERE name like '%{$search}%'");
                $data = $courseDetails['data'];
                echo json_encode($data);
        }
        
        
}

?>
