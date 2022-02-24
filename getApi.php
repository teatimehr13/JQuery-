<?php
include "./commonFun.php";

// init crul
$ch = curl_init();

// curl_setopt可以設定curl參數
// 設定url
curl_setopt($ch, CURLOPT_URL, "https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  //這行配17行
// 抓取URL并把它传递给浏览器
$result = curl_exec($ch);

// 关闭cURL资源，并且释放系统资源
curl_close($ch);

// echo $result; 
// dd($result);
dd(json_decode($result));

?>