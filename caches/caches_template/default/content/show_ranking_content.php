<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>

<meta name="keywords" content="<?php echo $SEO['keyword'];?>">

<meta name="description" content="<?php echo $SEO['description'];?>">

<link rel="stylesheet" href="/style/css/replay.css" type="text/css">
<script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> 
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

<!--当前位置-->

<div class="weizi">

<p>当前位置：<a href="/">Qu去留学首页</a> >  <a href="<?php echo $_SERVER['HTTP_REFERER'];?>"><?php echo $CATEGORYS[$catid]['catname'];?></a>></p>

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

 <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=fa3123280dbc63d3e967f9b12265bbf7&action=category&catid=41&num=25&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'41','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'25',));}?>

        <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>

        <li <?php if($catid==$r[catid]) { ?> class="active"<?php } ?>><a href="<?php echo $r['url'];?>#rangking"><i class="icon-caret-right"></i><?php echo $r['catname'];?></a></li>

        <?php $n++;}unset($n); ?>

        

        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>

</ul>

</div>



<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=602cb47b3e0dbf81cb43607d115d6a81&sql=SELECT+%2A+FROM+qu_page+where+catid%3D49\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_page where catid=49 LIMIT 20");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);?>

<?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>

<?php echo $val['content'];?>

<?php $n++;}unset($n); ?>

<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>



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

<script type="text/javascript" src="/style/js/jquery.SuperSlide.js"></script><!--消息滚动-->

<script type="text/javascript">

jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});

jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,delayTime:700});

</script>

</body>

</html>

