<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>

<meta name="keywords" content="<?php echo $SEO['keyword'];?>">

<meta name="description" content="<?php echo $SEO['description'];?>">

<link rel="stylesheet" href="/style/css/report.css" type="text/css">
<script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> 
<link rel="stylesheet" href="/style/font-awesome/css/font-awesome.min.css" type="text/css">

</head>

<body>

<div id="wrapper"> 

  <!-- 头部 -->

<?php include template("content","top"); ?>

  <!-- 头部结束 --> 



  <!--选校报告上部-->

  <div class="reporttitle">

    <h2>选择去网的理由</h2>

  </div>

  <!--主要内容--->

  <div class="content w-1000"> 

    <!--一段话-->

    <p class="ydh">去留学网是国内知名在线留学服务平台，凭借广泛搜集国外院校专业资料，历时两年打造全球院校智能数据库，为申请者提供颇具参考价值的选校报告。去留学网拥有超专业的服务团队全程支持：咨询选校，方案定制，文书包装，网申，套磁，面试，签证等等，精心打造全方位的留学服务！去留学网承诺smart 全套留学申请服务，颠覆传统中介的运营模式，以颇具性价比的专业服务，每年帮助为上百名学生成功飞越海外名校。</p>

    <div class="report"> 

      <!--左侧-->

      <div class="re-left">
        <div class="re-l-t">
          <div class="imgbox"><img src="/style/picture/xxlogo.png" /></div>
          <div class="nrbox">
            <h1>去留学网两大核心服务</h1>
            <p style="font-size: 16px;color: #003A6C;">smart全套美英留学申请服务／定制留学文书</p>
            <p>去留学网服务团队皆拥有三年以上从业经历，按照文理工商艺五大专业方向进行专业划分，对应学科老师经历了特定专业的千锤百炼，熟悉该专业各个学校的申请策略和录取偏好，设计专业而富有针对性的文书包装，为申请者提供更广阔的选择，更直接的经验支持。我们经验丰富的团队有信心为您铺展最平稳的offer之路。</p>
         </div>
          <div class="clear"></div>
        </div>
        <ul>
          <li style="font-size: 16px;color: #003A6C;">智能选校定位／美英选校报告</li>
          <li>去留学网凭借广泛搜集国外院校专业资料，历时两年打造全球院校智能数据库，为申请者提供颇具参考价值的选校报告。申请可者针对个人的不同情况和考试成绩的更新，随时调整自己的选校报告，查查适合自己的学校;申请者也可以从选校报告中挑选出感兴趣的学校，与去留学网咨询老师联系，免费评估录取几率。</li>
        </ul>

        <!-- <p class="anniu"><a href="<?php if($_username) { ?><?php echo $CATEGORYS['56']['url'];?><?php } else { ?>/index.php?m=member&c=index&a=register&siteid=<?php echo $siteid;?><?php } ?>">立即咨询<i class="icon-arrow-right"></i></a></p>-->
        <p class="anniu"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes">立即咨询<i class="icon-arrow-right"></i></a></p>

        <div class="clear"></div>

      </div>

      <!--右侧-->

      <div class="re-right">

      <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=27e6cdddfa958103bd7d0e9c91e73185&sql=SELECT+%2A+FROM+qu_page+where+catid%3D28\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_page where catid=28 LIMIT 20");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);?>

<?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>

<?php echo $val['content'];?>

<?php $n++;}unset($n); ?>

<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>

</div>

      <div class="clear"></div>

    </div>

    <div class="tuijian">

      <h1>院校推荐</h1>

      

     <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=961d2bb8cf6eba6db05f9bcaab5cc91f&sql=SELECT+%2A+FROM+qu_school_data+where+recommend%3E0+ORDER+BY+rand%28%29&cache=3600&num=3&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_school_data where recommend>0 ORDER BY rand()',)).'961d2bb8cf6eba6db05f9bcaab5cc91f');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_school_data where recommend>0 ORDER BY rand() LIMIT 3");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>

       

      <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>

      <div class="box"><a href="/index.php?m=school&c=show&id=<?php echo $val['id'];?>"><img src="<?php echo $val['datu'];?>" /></a><span class="caption">

        <p><?php echo $val['cnname'];?></p>

        </span></div>

        

        <?php $n++;}unset($n); ?>

          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>

     

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

</body>

</html>

