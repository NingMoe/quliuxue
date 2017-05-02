<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>
<meta name="keywords" content="<?php echo $SEO['keyword'];?>">
<meta name="description" content="<?php echo $SEO['description'];?>">
<link rel="stylesheet" href="/style/css/school.css" type="text/css">
<link rel="stylesheet" href="/style/font-awesome/css/font-awesome.min.css" type="text/css">
</head>
<body>
<div id="wrapper"> 
  <!-- 头部 -->
  <?php include template("content","top"); ?>
  <!-- 头部结束 --> 
  <!--院校搜索上部-->
  <div class="reporttitle">
    <h2>Qu去留学资讯</h2>
  </div>
  <!--主要内容--->
  <div class="content w-1000"> 
    <!--当前位置-->
    <div class="weizi">
     <?php include template("content","position"); ?>
    </div>
    <!--背景项目提升-->
    <div  class="b-box"> 
      <!--左侧-->
      <div class="b-left">
        <div class="news">
          <ul>
            <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=ae6bc46970553eecf7a0987498f1efa1&action=lists&catid=%24catid&num=20&order=inputtime+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 20;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'order'=>'inputtime DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($content_total, $page, $pagesize, $urlrule);$front_pages = front_pages($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'order'=>'inputtime DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
            
            
            
            
            
            <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
            <li><a href="<?php echo $r['url'];?>"><?php echo $r['title'];?></a><span><?php echo date('Y-m-d H:i:s',$r[inputtime]);?></span></li>
            <?php if($n%5==0) { ?>
          </ul>
          <ul>
            <?php } ?>
            
            <?php $n++;}unset($n); ?>
          </ul>
        </div>
        <!--分页-->
        <div class="pages"> <?php echo $pages;?></div>
        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?> </div>
      <!--右侧-->
      <div class="s-right">
          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=aef958a35efbfcf8f9e6144a818568d1&sql=SELECT+%2A+FROM+qu_page+where+catid%3D33\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_page where catid=33 LIMIT 20");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);?>
<?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
<?php echo $val['content'];?>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
      </div>
      <div class="clear"></div>
    </div>
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
</script>
</body>
</html>
