<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>
<meta name="keywords" content="<?php echo $SEO['keyword'];?>">
<meta name="description" content="<?php echo $SEO['description'];?>">
<link rel="stylesheet" href="/style/css/agency.css" type="text/css">
<link rel="stylesheet" href="/style/font-awesome/css/font-awesome.min.css" type="text/css">
</head>
<body>
<div id="wrapper"> 
  <!-- 头部 -->
  <?php include template("content","top"); ?>
  <!-- 头部结束 --> 
  <!--留学保保计划上部-->
  <div class="reporttitle">
    <h2>留学中介</h2>
  </div>
  <!--主要内容--->
  <div class="content w-1000"> 
    <!--当前位置-->
   <div class="weizi">
      <p>当前位置：<a href="/">Qu去留学首页</a> > <a>留学保保计划</a> > </p>
    </div>


    <!--留学保保计划左侧-->
    <div class="an-left"> 
      <!--留学保保计划-->
      <div class="an-6">
        <h1><?php echo $title;?></h1>
        <p><?php echo $content;?></p>
      </div>
      <div class="clear"></div>
    </div>
    <!--右侧-->
    <div class="an-right">
      <div class="an-7">
        <h1>"留学保保”计划</h1>
        <ul>
        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=951c9aaa2bd720da995b2ee27fef0c87&action=lists&catid=18&order=inputtime+DESC&num=20\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'18','order'=>'inputtime DESC','limit'=>'20',));}?> 
        
         <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
         <li <?php if($val['id']==$id) { ?>class="active"<?php } ?>><a href="<?php echo $val['url'];?>"><i class="icon-caret-right"></i><?php echo str_cut($val['title'],40);?></a></li>
        
         
         <?php $n++;}unset($n); ?>
        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?> 
        </ul>
      </div>
      <div class="zxzx"><a href="tencent://message/?uin=3097401794&Site=&Menu=yes"  target="_blank"><i class="icon-circle-arrow-right"></i>在线咨询</a></div>
      
      <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=65398124411e137fa7f4a5f68c8b9317&sql=SELECT+%2A+FROM+qu_page+where+catid%3D31\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_page where catid=31 LIMIT 20");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);?>
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
</body>
</html>
