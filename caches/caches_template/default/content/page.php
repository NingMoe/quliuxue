<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php
 if($child){
     $child_arrary=explode(',',$arrchildid);
        $to_url=$CATEGORYS[$child_arrary[1]][url];
  echo "<script>window.location.href='".$to_url."'</script>";
    }
?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>
<meta name="keywords" content="<?php echo $SEO['keyword'];?>">
<meta name="description" content="<?php echo $SEO['description'];?>">
<link rel="stylesheet" href="/style/css/replay.css" type="text/css"><script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> 
<link rel="stylesheet" href="/style/font-awesome/css/font-awesome.min.css" type="text/css">
</head>
<body>
<div id="wrapper"> 
  <!-- 头部 --> 
  <?php include template("content","top"); ?> 
  <!-- 头部结束 --> 
  
  <!--主要内容--->
 <div class="content w-1000">
 <!--轮播-->
   
       <?php include template("content","lunbo16"); ?>   
    <!--滚动-->
   
       <?php include template("content","gundong"); ?>   
    
    
    <!--左侧-->
    <!--当前位置-->
      <p>当前位置：<a href="/">Qu去留学首页</a> > <a href="#"><?php echo $title;?></a> > </p> 
    <div class="weizi">
      
    </div>
    <!--左侧-->
    <div class="p-left">
      <div class="p-leftnr">
        <div class="nr-box">
          <h1><?php echo $title;?></h1>
          <p><?php echo $content;?></p>
        </div>
      </div>
    </div>
    <!--右侧-->
    
    <div class="p-right">
      <div class="an-7">
        <ul>
          <?php $n=1;if(is_array($arrchild_arr)) foreach($arrchild_arr AS $cid) { ?> <li<?php if($catid==$cid) { ?> class="active"<?php } ?>><a href="<?php echo $CATEGORYS[$cid]['url'];?>"><?php echo $CATEGORYS[$cid]['catname'];?></a>
          </li>
          <?php $n++;}unset($n); ?>
        </ul>
      </div>
      <div class="imgbox"><?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=56f34d1c958159e6d9918eb6d1ae1b89&sql=SELECT+%2A+FROM+qu_page+where+catid%3D52\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_page where catid=52 LIMIT 20");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);?>
<?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
<?php echo $val['content'];?>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?></div>
    </div>
    <div class="clear"></div>
  </div>
  <!--尾部版权-->
 
<?php include template("content","bot"); ?> 
<!--遮罩层--> 
<?php include template("content","login"); ?> 
<script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> 
<script type="text/javascript" src="/style/js/search.js"></script><!--搜索--> 
<script type="text/javascript" src="/style/js/cover.js"></script><!--遮罩层--> 
<script type="text/javascript" src="/style/js/jquery.SuperSlide.js"></script><!--轮播图--> 
<script type="text/javascript">
		jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});


function checkData() {
    for (var i = 0; i < document.form1.length; i++) {
        if (document.form1.elements[i].type == "text" && document.form1.elements[i].value == "") {
            alert("请完善所要填写的信息!");
          			 return false;
        }
    }
    }



</script>
</body>
</html>
