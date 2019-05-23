<?php
    // $str_json = file_get_contents('php://input');
    // echo $str_json;

    $myData = array();

    foreach ($_POST as $name => $value) {
        array_push($myData, array($name => ($value != "") ? $value : null));
    }

    echo json_encode($myData);