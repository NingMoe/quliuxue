<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title><meta name="keywords" content="<?php echo $SEO['keyword'];?>"><meta name="description" content="<?php echo $SEO['description'];?>"><link rel="stylesheet" href="/style/css/school.css" type="text/css"><script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> <link rel="stylesheet" href="/style/font-awesome/css/font-awesome.min.css" type="text/css"></head><body><div id="wrapper">   <!-- 头部 -->   <?php include template("content","top"); ?>   <!-- 头部结束 -->   <!--院校搜索上部-->  <div class="reporttitle">    <h2>文书商城</h2>  </div>  <!--主要内容--->  <div class="content w-1000">     <!--当前位置-->    <div class="weizi"> <?php include template("content","position"); ?> </div>    <!--背景项目提升-->    <div  class="b-box">       <!--左侧-->      <div class="b-left">         <!--内容-->        <div class="m-nr">          <div class="imgbox"><img src="<?php echo $neirongtu;?>" width="730" height="210" /></div>          <h1><?php echo $title;?></h1>          <p><?php echo $content;?></p>          <div class="clear"></div>          <div class="anniu"><a href="tencent://message/?uin=1746295647&Site=&Menu=yes"  target="_blank"><i class="icon-circle-arrow-right"></i>在线咨询</a></div>        </div>        <!--咨询表单-->        <div class="m-form">          <h1>在线申请</h1>          <form action="/index.php?m=school&c=school&a=online_jiayou&t=1" name="form1" id="form1" method="post"  onsubmit="return checkData()">            <ul>            <input type="hidden" name="mingcheng" value="<?php echo $title;?>" />            <input type="hidden" name="lianjie" value="<?php echo $url;?>" />              <li><span>项目名称：</span><b><?php echo $title;?></b></li>              <li><span>姓名：</span>                <input type="text" name="name" />              </li>              <li><span>电话：</span>                <input type="text" name="phone" />              </li>              <li><span>邮箱：</span>                <input type="text" name="email" />              </li>              <li><span>咨询内容：</span>                <textarea name="zixun" id="textarea" cols="45" rows="5" onclick="this.innerHTML='';" onfocus="if (value =='请输入想要咨询的内容'){value =''}" onblur="if (value ==''){value='请输入想要咨询的内容'}">请输入想要咨询的内容</textarea>              </li>              <li><input type="submit" value=" 提 交 " id="dosubmit" onclick="return checkData()" name="dosubmit" class="button"></li>            </ul>          </form>        </div>      </div>      <!--右侧-->      <div class="s-right">                <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=87d983bff95519ace3f39e143011c36d&sql=SELECT+%2A+FROM+qu_page+where+catid%3D30\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_page where catid=30 LIMIT 20");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);?><?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?><?php echo $val['content'];?><?php $n++;}unset($n); ?><?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>        </div>      <div class="clear"></div>    </div>  </div>  <div class="clear"></div></div><!--尾部版权--><?php include template("content","bot"); ?><!--遮罩层--><?php include template("content","login"); ?><script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> <script type="text/javascript" src="/style/js/search.js"></script><!--搜索--> <script type="text/javascript" src="/style/js/cover.js"></script><!--遮罩层--><script type="text/javascript">function checkData() {    for (var i = 0; i < document.form1.length; i++) {        if (document.form1.elements[i].type == "text" && document.form1.elements[i].value == "") {            alert("请完善所要填写的信息!");          			 return false;        }    }    }</script> <script language="JavaScript" src="<?php echo APP_PATH;?>api.php?op=count&id=<?php echo $id;?>&modelid=<?php echo $modelid;?>"></script></body></html>