<?php

//var_dump($_SERVER);

$path_info = @$_SERVER['PATH_INFO'];
$query_string = $_SERVER['QUERY_STRING'];

if (strlen($path_info) == 0){
	$path_info = '/index001';
}
if ($path_info == '/index'){
	$path_info = '/index001';
}

$path_info = substr($path_info, 1, strlen($path_info) -1);

//var_dump($path_info);

define('TEMPLATE_DIR', './');

function set_url($url){
	return './index.php/'.$url;
}

$file_content = file_get_contents(TEMPLATE_DIR.$path_info.'.html');

//$file_content = 'aaaaaget_url(1234sdss_ad) ddddddget_url(1234sdss_ad) get_url(1234sdss_ad) ';

$search = array('/get_url\((\S+)\)/i');
$replace = array('./${1}');
$file_content = preg_replace($search, $replace, $file_content);

//var_dump($file_content);
echo $file_content;

