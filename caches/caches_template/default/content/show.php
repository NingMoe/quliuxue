<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>
<meta name="keywords" content="<?php echo $SEO['keyword'];?>">
<meta name="description" content="<?php echo $SEO['description'];?>">
<link rel="stylesheet" href="/style/css/school.css" type="text/css"><script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> 
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
          <div class="top">
            <h1><?php echo $title;?></h1>
            <p><span>作者：去留学网</span><span>发布时间：<?php echo $inputtime;?></span></p>
            <div class="clear"></div>
          </div>
          <div class="nr">
            <?php echo $content;?>



          </div>
         
          <!-- JiaThis Button BEGIN -->
<div class="jiathis_style_24x24">
	<a class="jiathis_button_qzone"></a>
	<a class="jiathis_button_tsina"></a>
	<a class="jiathis_button_tqq"></a>
	<a class="jiathis_button_weixin"></a>
	<a class="jiathis_button_renren"></a>
	<a href="http://www.jiathis.com/share?uid=1868161" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
	<a class="jiathis_counter_style"></a>
</div>
<script type="text/javascript">
var jiathis_config = {data_track_clickback:'true'};
</script>
<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=1868161" charset="utf-8"></script>
<!-- JiaThis Button END -->
          
          
        </div>
      </div>
    </div>
    <!--右侧-->
    <div class="s-right">
       <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=5914daa4348edd0c5212ae9225b25ff6&sql=SELECT+%2A+FROM+qu_page+where+catid%3D32\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_page where catid=32 LIMIT 20");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);?>
<?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
<?php echo $val['content'];?>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
    </div>
    <div class="clear"></div>
  </div>
  <!--微博开始-->
  <div class="weibo">
    <div class="smle_main">
      <div class="sml_ledt"><img src="/style/picture/weibo.jpg" usemap="#Map2" border="0">
        <map name="Map2" id="Map2">
          <area shape="rect" coords="13,123,92,152" target="_blank" href="http://e.weibo.com/betteredu?ref=http%3A%2F%2Fwww.weibo.com%2F">
        </map>
      </div>
      <div class="sml_weibo_show">
        <div class="show_title"><img src="/style/images/xx_weik.png" usemap="#Map" border="0">
          <map name="Map" id="Map">
            <area shape="rect" coords="733,3,850,37" target="_blank" href="http://weibo.com/thinkwithu">
          </map>
        </div>
        <div class="iframe_show">
          <iframe class="share_self" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=550&fansRow=2&ptype=1&speed=0&skin=1&isTitle=1&noborder=1&isWeibo=1&isFans=1&uid=5486971383&verifier=6acb3995&dpc=1" frameborder="0" height="450" width="880"></iframe>
        </div>
      </div>
    </div>
  </div>
  <!--微博结束-->
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
jQuery(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
</script> 
<script>
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"48"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
</script>
</body>
</html>
