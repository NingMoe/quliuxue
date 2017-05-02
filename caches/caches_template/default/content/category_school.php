<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>
<meta name="keywords" content="<?php echo $SEO['keyword'];?>">
<meta name="description" content="<?php echo $SEO['description'];?>">
<link rel="stylesheet" href="/style/css/school.css" type="text/css">
<script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> 
<link rel="stylesheet" href="/style/font-awesome/css/font-awesome.min.css" type="text/css"> 
</head>
<body>
    <div id="wrapper">
    <!-- 头部 -->
   <?php include template("content","top"); ?>
	<!-- 头部结束 -->
<!--院校搜索上部-->
<div class="reporttitle">
<h2>文书商城</h2>
</div>
<!--主要内容--->
<div class="content w-1000">
<!--文书商城-->
<div class="jbox">
<!--第一部分-->
<div class="j-1">
<div class="ydh">留学申请的关键是申请者竞争力的提升，竞争力体现在出国考试成绩、软性背景实力、文书质量三大方面，对于分数相当的申请者，软性背景实力和文书质量成为能否冲击名校的关键因素。去留学网文书商城为申请者推荐含金量高的软背景提升项目和文书定制服务。</div>
<div class="jlist">
<div class="box"><a href="<?php echo $CATEGORYS['12']['url'];?>&dingzhi=1"><script language="javascript" src="<?php echo APP_PATH;?>caches/poster_js/14.js"></script></a></div>
<!--<div class="box"><a href="<?php echo $CATEGORYS['11']['url'];?>">背景提升项目</a></div> -->
<div class="box">

    <div id="slideBox" class="slideBox">
      <div class="hd">
        <ul>
          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=5d626c865c0a8d1a1db810bc1c1f91cc&sql=SELECT+%2A+FROM+qu_freebanner+a%2Cqu_freebanner_data+b+where+a.id%3Db.id+and+a.catid%3D+%2736%27+ORDER+BY+a.inputtime+DESC&cache=3600&num=6&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_freebanner a,qu_freebanner_data b where a.id=b.id and a.catid= \'36\' ORDER BY a.inputtime DESC',)).'5d626c865c0a8d1a1db810bc1c1f91cc');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_freebanner a,qu_freebanner_data b where a.id=b.id and a.catid= '36' ORDER BY a.inputtime DESC LIMIT 6");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
          
          <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
          <li></li>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
        </ul>
      </div>
      <div class="bd">
        <ul>
          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=30fe1f94cd9291f3b51e0e1389810acf&sql=SELECT+%2A+FROM+qu_freebanner+a%2Cqu_freebanner_data+b+where+a.id%3Db.id+and+a.catid%3D+%2737%27+ORDER+BY+a.inputtime+DESC&cache=3600&num=6&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_freebanner a,qu_freebanner_data b where a.id=b.id and a.catid= \'37\' ORDER BY a.inputtime DESC',)).'30fe1f94cd9291f3b51e0e1389810acf');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_freebanner a,qu_freebanner_data b where a.id=b.id and a.catid= '37' ORDER BY a.inputtime DESC LIMIT 6");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
          <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
          <li><a href="<?php echo $val['url'];?>"><img src="<?php echo $val['thumb'];?>" alt="<?php echo $val['title'];?>" /></a></li>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
        </ul>
      </div>
    </div>       
        
</div>
<div class="box"><a href="<?php echo $CATEGORYS['12']['url'];?>&dingzhi=2"><script language="javascript" src="<?php echo APP_PATH;?>caches/poster_js/15.js"></script></a></div>
<!--<div class="box"><a href="<?php echo $CATEGORYS['12']['url'];?>">留学产品定制</a></div> -->
<div class="box">
 <div id="slideBox" class="slideBox">
      <div class="hd">
        <ul>
          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=30fe1f94cd9291f3b51e0e1389810acf&sql=SELECT+%2A+FROM+qu_freebanner+a%2Cqu_freebanner_data+b+where+a.id%3Db.id+and+a.catid%3D+%2737%27+ORDER+BY+a.inputtime+DESC&cache=3600&num=6&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_freebanner a,qu_freebanner_data b where a.id=b.id and a.catid= \'37\' ORDER BY a.inputtime DESC',)).'30fe1f94cd9291f3b51e0e1389810acf');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_freebanner a,qu_freebanner_data b where a.id=b.id and a.catid= '37' ORDER BY a.inputtime DESC LIMIT 6");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
          
          <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
          <li></li>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
        </ul>
      </div>
      <div class="bd">
        <ul>
          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=5d626c865c0a8d1a1db810bc1c1f91cc&sql=SELECT+%2A+FROM+qu_freebanner+a%2Cqu_freebanner_data+b+where+a.id%3Db.id+and+a.catid%3D+%2736%27+ORDER+BY+a.inputtime+DESC&cache=3600&num=6&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_freebanner a,qu_freebanner_data b where a.id=b.id and a.catid= \'36\' ORDER BY a.inputtime DESC',)).'5d626c865c0a8d1a1db810bc1c1f91cc');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_freebanner a,qu_freebanner_data b where a.id=b.id and a.catid= '36' ORDER BY a.inputtime DESC LIMIT 6");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
          <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
          <li><a href="<?php echo $val['url'];?>"><img src="<?php echo $val['thumb'];?>" alt="<?php echo $val['title'];?>" /></a></li>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
        </ul>
      </div>
    </div>      
</div>
</div>
</div>
      <!--第三部分-->
      <div class="j-2">
        <h1><span class="s1"><a href="<?php echo $CATEGORYS['12']['url'];?>">热门留学产品</a></span><span class="s2"><a href="<?php echo siteurl($siteid);?>/index.php?m=content&c=index&a=lists&catid=12&dingzhi=1">文书创作</a>|<a href="<?php echo siteurl($siteid);?>/index.php?m=content&c=index&a=lists&catid=12&dingzhi=2">文书修改</a>|<a href="<?php echo siteurl($siteid);?>/index.php?m=content&c=index&a=lists&catid=12&dingzhi=3">网申手续</a>|<a href="<?php echo siteurl($siteid);?>/index.php?m=content&c=index&a=lists&catid=12&dingzhi=4">签证办理</a></span></h1>
        <div class="ydh">去留学网定制留学产品部分为DIY留学申请者提供灵活的多样的留学申请服务，文书定制由去留学网资深文案团队、第三方机构或资深顾问个人提供，申请者可以了解各方实力，结合个人的需要定制留学产品。</div>
        <div class="jlist">
          <ul>
           <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=a3bc9ff678079f69b21b51c5ef317ebe&sql=SELECT+%2A+FROM+qu_chanpin+a%2Cqu_chanpin_data+b+WHERE+a.id%3Db.id+ORDER+BY+a.inputtime+DESC&cache=3600&num=4&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_chanpin a,qu_chanpin_data b WHERE a.id=b.id ORDER BY a.inputtime DESC',)).'a3bc9ff678079f69b21b51c5ef317ebe');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_chanpin a,qu_chanpin_data b WHERE a.id=b.id ORDER BY a.inputtime DESC LIMIT 4");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
            <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
            <li><a href="<?php echo $val['url'];?>"><img src="<?php echo $val['thumb'];?>"/>
             </p>
              <span class="caption full-caption">
             <h3><?php echo str_cut($val['title'],28);?></h3>
              <p><?php echo str_cut($val['description'],200);?>...</p>
              </span> </a> </li>
                <?php $n++;}unset($n); ?>
              
               <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>  
          </ul>
        </div>
      </div>
      
	<!--第二部分-->
 		<div class="j-2">
        <h1><span class="s1"><a href="<?php echo $CATEGORYS['11']['url'];?>">热门背景提升项目</a></span><span class="s2"><a href="<?php echo siteurl($siteid);?>/index.php?m=content&c=index&a=lists&catid=11&leixing=4">名企实习</a>|<a href="<?php echo siteurl($siteid);?>/index.php?m=content&c=index&a=lists&catid=11&leixing=3">比赛竞赛</a>|<a href="<?php echo siteurl($siteid);?>/index.php?m=content&c=index&a=lists&catid=11&leixing=2">实践项目</a>|<a href="<?php echo siteurl($siteid);?>/index.php?m=content&c=index&a=lists&catid=11&leixing=1">交流交换</a></span></h1>
        <div class="ydh">背景提升项目展现了对申请者有价值的多个实践项目、商业比赛、交流交换等信息，想要提升申请背景的申请者可以咨询去留学网老师的专业意见，提前规划和参与有价值的背景提升项目。</div>
        <div class="jlist">
          <ul>
      
          
          
           <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=d55550a3eb9ce166dac4c32fd003aa94&sql=SELECT+%2A+FROM+qu_xiangmu+a%2Cqu_xiangmu_data+b+WHERE+a.id%3Db.id+ORDER+BY+a.inputtime+DESC&cache=3600&num=4&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_xiangmu a,qu_xiangmu_data b WHERE a.id=b.id ORDER BY a.inputtime DESC',)).'d55550a3eb9ce166dac4c32fd003aa94');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_xiangmu a,qu_xiangmu_data b WHERE a.id=b.id ORDER BY a.inputtime DESC LIMIT 4");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
            <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
            <li><a href="<?php echo $val['url'];?>"><img src="<?php echo $val['thumb'];?>"/>
              
              <span class="caption full-caption">
              <h3><?php echo str_cut($val['title'],28);?></h3>
              <p><?php echo str_cut($val['description'],200);?>...</p>
              </span> </a> </li>
                <?php $n++;}unset($n); ?>
              
               <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
           
          </ul>
        </div>
      </div>

      <div class="clear"></div>
    </div>
    <div class="clear"></div>
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
jQuery(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
$(".j-2 .jlist ul li:eq(3)").css("marginRight","0px");	
$(".j-2 .jlist ul li:eq(7)").css("marginRight","0px");	
</script>
</body>
</html>
