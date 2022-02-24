<?php
include "./commonFun.php";
// header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: *"); 
// dd($_POST);
$input = $_POST;
echo json_encode($input);
?>