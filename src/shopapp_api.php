<?php
//print_r($GLOBALS);exit;

//$url = "http://205.test.tseo.cn/yanyubao_server/index.php?";
// $url = "http://test.tseo.cn/yanyubao_server/index.php?";
//$url1 = "http://205.test.tseo.cn/weiduke";
$url = "http://yanyubao.tseo.cn/index.php?";

$url .= $_SERVER['QUERY_STRING'];

//echo $url;exit;
//$data = $_GLOBALS['HTTP_RAW_POST_DATA'];
$data = $_POST;
$data_str = "";
foreach ($data as $key => $value) {
	$data_str .= $key."=".$value."&";
}

//Log::write('请求职联网提供的接口数据,url:'.$url.',数据:'.$data_str);//写日志

//$data = $_POST;
//var_dump($data);exit;
$data_str = substr($data_str, 0, strlen($data_str) -1);

if ($_FILES){
	$data_post = array();
	if (strlen($data_str)){
		$data_post[] = $data_str;
	}
	
	if (!is_dir(dirname(__FILE__).'/upload/')){
		mkdir(dirname(__FILE__).'/upload/');
	}
	
	foreach ($_FILES as $key=>$item){
		$filename = $item['name'];
		$tmpname = $item['tmp_name'];
		if (move_uploaded_file($tmpname, dirname(__FILE__).'/upload/'.$filename)){
			$data['$key'] = '@'.dirname(__FILE__).'/upload/'.$filename;
		}
	}
	
	echo curlPost($url, $data);
}
else{
	//echo $url; print_r($data_str);
	echo curlPost($url, $data_str);
}







function curlPost($url, $data){
	$ch = curl_init();
	$header = array(
			"Accept-Charset: utf-8",
	);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$temp = curl_exec($ch);
	return $temp;
}

