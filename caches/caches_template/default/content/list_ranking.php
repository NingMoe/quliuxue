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

    <p>当前位置：<a href="/">Qu去留学首页</a> > <a href="<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>"><?php echo $catname;?></a> > <a name="ranking" id="rangking"></a></p>





  </div>

  <!--左侧-->

  <div class="p-left">

    <div class="p-leftnr">

      <h1><?php echo $catname;?></h1>

      

     <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=e415e1df852c07467adc71cb66a454c6&action=lists&catid=%24catid&order=id+DESC&page=%24page&num=4\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 4;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($content_total, $page, $pagesize, $urlrule);$front_pages = front_pages($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'order'=>'id DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?> 

     

       <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>

      <div class="p-box">

        <div class="imgbox"><a href="<?php echo $val['url'];?>"><img src="<?php echo $val['thumb'];?>" /></a></div>

        <div class="nrbox">

          <h2><a href="<?php echo $val['url'];?>"><?php echo $val['title'];?></a></h2>

          <p><?php echo str_cut($val[description],360);?></p>

        </div>

        <div class="clear"></div>

      </div>

      

      <?php $n++;}unset($n); ?>

      

      

      

    </div>

    <!--分页-->

    <div class="pages"><?php echo $pages;?>  </div>

  </div><?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>

  <!--右侧-->

  

  <div class="p-right">

    <div class="an-7">

      <ul>

         <!--<li><span style="line-height: 35px;

color: #003a6c;

border-bottom: 1px solid #ccc;

padding-bottom:4px;

font-size: 16px;"> 世界大学排名　　　　　　</span></li> --> 

        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=38543d1c5736ae06b22c963f8e1b7ca1&action=category&catid=41&num=25&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'41','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'25',));}?>

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

