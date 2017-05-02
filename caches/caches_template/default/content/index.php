<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="baidu_union_verify" content="f0305c6732f1c49fd8d3ca8aaf95fe57"><title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title><meta name="keywords" content="<?php echo $SEO['keyword'];?>"><meta name="description" content="<?php echo $SEO['description'];?>"><link rel="stylesheet" href="/style/css/index.css" type="text/css"><script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> <link rel="stylesheet" href="/style/font-awesome/css/font-awesome.min.css" type="text/css"><meta name="renderer" content="webkit|ie-comp|ie-stand"><!--[if IE 7]><link rel="stylesheet" href="/style/font-awesome/css/font-awesome-ie7.min.css" type="text/css">   <![endif]--></head><body><div id="wrapper">   <!-- 头部 -->  <?php include template('content','top'); ?>   <!-- 头部结束 -->   <!-- 主要内容 -->  <div class="content">         <!-- TEST -->    <div id="features">          <?php include template("content","lunbo23"); ?>                        <!--浮动层-->      <div class="wrapper">       <?php include template("content","gundong"); ?>         <div class="loginbox">          <h2>我要选校报告</h2>          <p>想去的国家：</p>          <select name="">            <option value="美国">美国</option>            <option value="英国">英国</option>            <option value="法国">法国</option>			<option value="其他">其他</option>          </select>          <p>申请目标：</p>          <select name="">            <option value="硕士">硕士</option>			<option value="本科">本科</option>            <option value="博士">博士</option>          </select>          <p>目前就读年级：</p>          <select name="">		  <option value="本科大三">本科大三</option>            <option value="本科大一">本科大一</option>            <option value="本科大二">本科大二</option>			<option value="本科大四">本科大四</option>			<option value="本科高中">高中</option>			<option value="本科在职">在职</option>			<option value="本科在职">其他</option>			          </select>          <a href="<?php if($_username) { ?>/index.php?m=content&c=index&a=lists&catid=56<?php } else { ?>/index.php?m=member&c=index&a=register&siteid=<?php echo $siteid;?><?php } ?>">一键获取选校报告</a> </div>        <ul id="infographics">          <!-- SCHOOLS AND COLLEGES W/ DROP DOWN -->          <!--<li><a href="<?php echo $CATEGORYS['22']['url'];?>" class="infographic-one"></a></li>-->          <li><a href="https://shop59954069.taobao.com/?spm=a230r.7195193.1997079397.2.xVso1n" class="infographic-four" target="_blank"></a></li>          <li><a href="<?php echo $CATEGORYS['22']['url'];?>" class="infographic-two"></a></li>          <li><a href="/index.php?m=content&c=index&a=lists&catid=13" class="infographic-three"></a></li>          <!--<li><a href="<?php echo $CATEGORYS['11']['url'];?>" class="infographic-four"></a></li>-->          <li><a href="/index.php?m=content&c=index&a=lists&catid=10" class="infographic-one"></a></li>        </ul>      </div>    </div>  </div>  <!--主要内容-->  <div class="c-2">    <div class="panel-header">      <h2>IMPROVEMENT</h2>    </div>     <div class="w-1000">      <div class="news-bb news-ts" >        <h3><a href="<?php echo $CATEGORYS['11']['url'];?>">文书商城</a></h3>        <ul>          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=6730a3b60fcc14b5a832a808f7553de3&action=lists&catid=12&order=inputtime+DESC&num=2&moreinfo=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'12','order'=>'inputtime DESC','moreinfo'=>'1','limit'=>'2',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>                   <li class="clear">           <?php if($n<2 &&$val['thumb']!='' ) { ?>               <div class="event-image">                   <a href="<?php echo $val['url'];?>">                        <img src="<?php echo $val['neirongtu'];?>" />                        <p class="title"><?php echo str_cut($val['title'],40);?></p>                        <span class="caption full-caption">                            <!-- <h2><?php echo str_cut($val['title'],60);?></h2>  -->                            <p><?php echo str_cut($val['description'],200);?></p>                       </span>                    </a>               </div>		   <?php } ?>            <a href="<?php echo $val['url'];?>">                <span> <em class="events-date"><?php echo date('M',$val[inputtime]);?><em class="events-date-large"><?php echo date('j',$val[inputtime]);?></em></em>                    <em class="title"><?php echo str_cut($val['title'],35);?></em> <em class="events-title"><?php echo str_cut($val['description'],90);?></em>                </span>            </a>          </li>        <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>                     </ul>        <h4><a href="<?php echo $CATEGORYS['12']['url'];?>"><span>更多文书商城<i class="fa-arrow-circle-right"></i></span></a></h4>      </div>      <div class="news-bb news-ts" >        <h3><a href="<?php echo $CATEGORYS['24']['url'];?>">留学资讯</a></h3>        <ul>          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=dc14c73c5b608e909b1bccdbd1e445b6&action=lists&catid=24&order=inputtime+DESC&num=2\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'24','order'=>'inputtime DESC','limit'=>'2',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>                   <li class="clear">           <?php if($n<2 &&$val['thumb']!='' ) { ?>		  <div class="event-image"><a href="<?php echo $val['url'];?>"><img src="<?php echo $val['thumb'];?>" />       <p class="title"><?php echo str_cut($val['title'],40);?></p>      <span class="caption full-caption">     <!-- <h2><?php echo str_cut($val['title'],60);?></h2>  -->    <p><?php echo str_cut($val['description'],200);?></p>    </span></a></div>	   		   		   		   <?php } ?>            <a href="<?php echo $val['url'];?>"> <span> <em class="events-date"><?php echo date('M',$val[inputtime]);?><em class="events-date-large"><?php echo date('j',$val[inputtime]);?></em></em> <em class="title"><?php echo str_cut($val['title'],40);?></em> <em class="events-title"><?php echo str_cut($val['description'],90);?></em> </span> </a> </li>        <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>         </ul>        <h4><a href="<?php echo $CATEGORYS['24']['url'];?>"><span>更多留学资讯<i class="fa-arrow-circle-right"></i></span></a></h4>      </div>      <div class="news-bb" >        <h3><a href="index.php?m=content&c=index&a=show&catid=18&id=8">“留学保保”计划</a></h3>        <ul>                <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=f1254b1015452004a546b52e8feec805&action=lists&catid=18&order=inputtime+DESC&num=6\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'18','order'=>'inputtime DESC','limit'=>'6',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>         <li><a href="<?php echo $val['url'];?>"><span><?php echo str_cut($val['title'],80);?></span></a>         <a href="<?php echo $val['url'];?>"><span><?php echo str_cut($val['description'],60);?></span></a>         </li>                 <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>                        </ul>        <h4><a href="/index.php?m=content&c=index&a=show&catid=18&id=8"><span>“留学保保”计划<i class="fa-arrow-circle-right"></i></span></a></h4>      </div>    </div>    <div class="clear"></div>  </div>  <!--第三部分-->  <div class="c-3">    <div class="panel-header">      <h2>college</h2>    </div>    <div class="w-1000">       <!--院校搜索-->      <div class="p-1">        <div class="yxss">          <h1>院校搜索</h1>        <form action="<?php echo APP_PATH;?>index.php" method="get">        <input type="hidden" name="m" value="content"/>        <input type="hidden" name="c" value="index"/>        <input type="hidden" name="a" value="lists"/>            <div id="searchTxt" class="searchTxt" >              <div class="searchMenu">                <div class="searchSelected" id="searchSelected">搜大学</div>                <div style="display:none;" class="searchTab" id="searchTab">                  <ul>                   <li class="" val="22" val2="1">搜大学</li>                  <li val="22" val2="2">搜专业</li>                  <li val="13" val2="0">搜中介</li>                  </ul>                                    <select name="type" style="display:none;" class="type">                <option value="1" >搜大学</option>                <option value="2" >搜专业</option>                <option value="0" >搜中介</option>                </select>                 <select name="catid" style="display:none;" class="catid">                <option value="22" >搜大学</option>                <option value="22" >搜专业</option>                <option value="13" >搜中介</option>                </select>                </div>              </div>                            <input type="text" placeholder="请输入您要查找的学校或中介" name="keyword"  class="keyword"  value=""/>             <button type="submit" value="搜 索" class="" id="searchbtn" /></button>            </div>          </form>        </div>        <!--院校动态-->        <div class="p-2">          <ul>          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=718886d947cb186f658ba7578cbfa0e4&action=lists&catid=25&order=inputtime+DESC&num=3\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'25','order'=>'inputtime DESC','limit'=>'3',));}?>          <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>         <li><a href="<?php echo $val['url'];?>"><?php echo str_cut($val['title'],60);?></a><span><?php echo date('Y-m-d',$val[inputtime]);?></span>         </li>        <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>       </ul>          <h4><a href="<?php echo $CATEGORYS['25']['url'];?>"><span>访问最新动态<i class="fa-arrow-circle-right"></i></span></a></h4>                            </div>        <div class="clear"></div>      </div>      <div class="p-3">                 <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=48763e948cf349eca41e3372cae9957c&sql=SELECT+%2A+FROM+qu_school_data+where+recommend%3E0+ORDER+BY+rand%28%29&cache=3600&num=1&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_school_data where recommend>0 ORDER BY rand()',)).'48763e948cf349eca41e3372cae9957c');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_school_data where recommend>0 ORDER BY rand() LIMIT 1");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>             <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <div class="box  f"><a href="/index.php?m=school&c=show&id=<?php echo $val['id'];?>"><img src="<?php echo $val['datu'];?>" /></a><span class="caption">        <p><?php echo $val['cnname'];?></p>        </span></div>                <?php $n++;}unset($n); ?>          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>        <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=e2564ab3cb4afece7f3951722722d254&sql=SELECT+%2A+FROM+qu_school_data+where+recommend%3E0+ORDER+BY+rand%28%29&order=listorder+DESC&start=1&num=1&cache=3600&num=1&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_school_data where recommend>0 ORDER BY rand()','order'=>'listorder DESC',)).'e2564ab3cb4afece7f3951722722d254');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_school_data where recommend>0 ORDER BY rand() LIMIT 1,1");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>        <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>          <div class="box  r">            <a href="/index.php?m=school&c=show&id=<?php echo $val['id'];?>"><img src="<?php echo $val['datu'];?>" /></a>            <span class="caption">              <p><?php echo $val['cnname'];?></p>            </span>          </div>        <?php $n++;}unset($n); ?>          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>                  </div>    </div>    <div class="clear"></div>  </div>  <!--第4部分-->  <div class="c-4">    <div class="panel-header">      <h2>NEWS</h2>    </div>    <div class="w-1000">      <div class="g-box">        <div class="g-l">          <div class="border">            <div class="block-m"></div>          </div>          <div class="border">            <div class="hours"></div>          </div>        </div>        <div class="g-r">          <h3><a href="<?php echo $CATEGORYS['24']['url'];?>">Qu去留学资讯</a></h3>          <p><?php echo $CATEGORYS['55']['description'];?></p>        </div>        <div class="clear"></div>      </div>      <!--画廊-->      <div class="metro">        <div class="metro_l">          <ul>		   <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=7a2abf522d3584df54d61d90efd7a9cb&action=lists&catid=55&order=id+DESC&start=0&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <a href="<?php echo $val['url'];?>">   <li class="jiang01" style="background:url(<?php echo $val['thumb'];?>)" ></li></a>                 <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>              <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=ccdfa88f347bd4f9eb783688da49f093&action=lists&catid=55&order=id+DESC&start=1&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'1,1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <a href="<?php echo $val['url'];?>">   <li class="jiang02" style="background:url(<?php echo $val['thumb'];?>)" ></li></a>                 <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>		   <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=2446f916c7e2d22d348fbc02a96b28f7&action=lists&catid=55&order=id+DESC&start=2&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'2,1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>          <a href="<?php echo $val['url'];?>">   <li class="jiang03" style="background:url(<?php echo $val['thumb'];?>)" ></li></a>                         <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>   		   <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=cf0475491304a3cb54c5ba2b75b7f827&action=lists&catid=55&order=id+DESC&start=3&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'3,1',));}?>                        <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>          <a href="<?php echo $val['url'];?>">   <li class="jiang04" style="background:url(<?php echo $val['thumb'];?>)" ></li></a>                         <?php $n++;}unset($n); ?>          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>         <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?> <!--            <li class="jiang02"><a href="#">新加坡留学申请指南</a>              <p>业界最多录取数据，留学新加坡，这里是你的起点。</p>            </li>            <li class="jiang03" style="background:url(/style/picture/002.jpg) no-repeat scroll 0 0 transparent;cursor:pointer;" > <a href="#">美国留学专区<br>              <span>常春藤名校</span></a> </li>            <li class="jiang04"><a href="#">美国留学研究生奖学金</a>              <p>美国留学奖学金一直是学生关心美国留学常见问题高频词汇。</p>            </li>-->            <div class="clear"></div>          </ul>          <div class="clear"></div>          <ul>  <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=3b0745ecbfd97a34e56348c41a55aced&action=lists&catid=55&order=id+DESC&start=4&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'4,1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <a href="<?php echo $val['url'];?>">   <li class="jiang04 jiang05" style="background:url(<?php echo $val['thumb'];?>)" ></li></a>                 <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>              		   <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=c97e0bc9e346191273a2d35c11d56935&action=lists&catid=55&order=id+DESC&start=5&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'5,1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <a href="<?php echo $val['url'];?>">   <li class="jiang06" style="background:url(<?php echo $val['thumb'];?>)" ></li></a>                 <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>   <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=e11a34a2911e7192d6763cb147ce188c&action=lists&catid=55&order=id+DESC&start=6&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'6,1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <a href="<?php echo $val['url'];?>">   <li class="jiang07" style="background:url(<?php echo $val['thumb'];?>)" ></li></a>                 <?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>        <!--    <li class="jiang06"><a href="#">英国留学名校申请专区</a>              <p>英国留学三部曲，轻松入读英国名校！</p>            </li>            <li class="jiang07" style="background:url(/style/picture/003.jpg) no-repeat scroll 0 0 transparent;cursor:pointer;"> <a href="#">全球大学排名<br>              <span>Colleges Ranking</span></a> </li>  -->            <div class="clear"></div>          </ul>        </div> <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=0e49f402d2b69f71c842fd80ee272e66&action=lists&catid=55&order=id+DESC&start=7&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'7,1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <a href="<?php echo $val['url'];?>">                         <div class="metro_r" style="background:url(<?php echo $val['thumb'];?>)" >                  </div></a><?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>        <div class="clear"></div>        <ul> <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=073fe8b78e049dd87564323ed8c24be8&action=lists&catid=55&order=id+DESC&start=8&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'8,1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <a href="<?php echo $val['url'];?>">                         <div class="jiang04 f" style="background:url(<?php echo $val['thumb'];?>)" >                  </div></a><?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>		 <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=4f21d70c2ca7751cd13464334821ccc2&action=lists&catid=55&order=id+DESC&start=9&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'9,1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <a href="<?php echo $val['url'];?>">                         <div class="jiang08 f" style="background:url(<?php echo $val['thumb'];?>)" >                  </div></a><?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>		 <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=0b26d083b8a5b21cf8cfb9d390eaeb99&action=lists&catid=55&order=id+DESC&start=10&num=1\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$data = $content_tag->lists(array('catid'=>'55','order'=>'id DESC','limit'=>'10,1',));}?>                  <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>      <a href="<?php echo $val['url'];?>">                         <div class="jiang09 f" style="background:url(<?php echo $val['thumb'];?>)" >                  </div></a><?php $n++;}unset($n); ?>        <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>          <div class="clear"></div>        </ul>      </div>    </div>    <div class="clear"></div>  </div>  <!--尾部版权--> <?php include template("content","bot"); ?> <!--遮罩层--> <?php include template("content","login"); ?> <script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> <script type="text/javascript" src="/style/js/search.js"></script><!--搜索--> <script type="text/javascript" src="/style/js/cover.js"></script><!--遮罩层--> <script type="text/javascript" src="/style/js/jquery.SuperSlide.js"></script><!--消息滚动--> <script type="text/javascript">jQuery(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,delayTime:700});// var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://"); document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F7941846bf82d24e57afc527a8eb8da94' type='text/javascript'%3E%3C/script%3E"));</script><div style="display:none">links:<a href=" http://www.vipmst.com" >淘宝内部优惠券</a><a href=" http://www.sgznny.com" >智能温室</a><a href=" http://www.qp931.cn" >真钱棋牌</a><a href=" http://www.kuz315.com" >徐州装修</a><a href=" http://www.jhmacau.com" >香港腳</a><a href=" http://www.liqfang.com" >享硬玛卡浓缩片多少钱一盒？</a><a href=" http://whclhs.5858.com" >武汉成人美术培训</a><a href=" http://www.xijielinli.cn" >手机赚钱软件</a><a href=" http://www.taoplay.com" >手游资讯</a><a href=" http://www.igusu.net" >苏州分类信息</a><a href=" http://www.tao768.com" >淘宝内部优惠券</a><a href=" http://www.chuanhengtai.com" >网咖设计</a>   <a href=" http://shsm.site" >上海女王</a><a href=" http://www.modelhui.com" >商务模特</a><a href=" http://www.sxtaoli.com" >火山岩滤料</a> <a href=" http://www.wangzhanzhan.com" >驴肉</a><a href=" http://www.mingrizoushi.com" >明日走势</a><a href=" http://www.lvyounow.com" >菲律宾旅游</a><a href=" http://www.hhku.com" >韩货库</a><a href=" http://www.digitcoin98.com" >洪江dgc博客</a><a href=" http://www.profstone.com" >nature stone</a><a href=" http://www.funcgo.com" >ss 账号</a> <a href=" http://www.xiaoshuy.com" >除甲醛</a> <a href=" http://www.kanfu8.com" >传世私服发布站</a><a href=" http://www.pingyun888.com" >鹿鼎娱乐</a>zhongyi.sina.com/cjdt/cjxw/230938.shtml" >喻川直销</a><a href=" http://www.shunmeiguoji.com" >微整形培训</a><a href=" http://www.kyl998.com" >消音器</a><a href=" http://www.xjlsscl.cn" >新疆游泳池设备</a><a href=" http://pinpai.szonline.net/contents/20161221/694914.html" >修正蛇鞭粉胶囊</a><a href=" http://www.189315.com" >北京调查公司</a><a href=" http://www.chufangcaidan.com" >减肥菜单</a><a href=" http://www.ranshaocaituan.com" >林肯娱乐</a><a href=" http://www.shengmaow.com" >麻将透视外挂</a><a href=" http://www.shaiya001.com" >神泣私服</a><a href=" http://www.hitbelt.com" >FHP Belt</a><a href=" http://www.hitbelt.com/index.php?m=content&c=index&a=lists&catid=225" >同步带</a><a href=" http://www.anmo3.com" >北京保健按摩</a><a href=" http://money.china.com/fin/sxy/201612/23/1772632.html" >喻川直销</a><a href=" http://www.eboxcn.com" >自动贩卖机</a><a href=" http://www.sshjiaosu.com" >素诗汇</a><a href=" http://www.qdjinghong.com" >青岛画册设计</a><a href=" http://www.jinyazhou888.net" >金亚洲</a><a href=" http://www.imxdsf.com" >冒险岛私服   </a><a href=" http://www.xiaosj.cn/user/s19409.aspx" >门萨</a><a href=" http://shop1471279543378.1688.com" >奶茶设备原料批发</a><a href=" http://www.zhuxianzhen.com" >朱仙镇木版年画</a><a href=" http://www.nexttrucking.com" >ch robinson</a><a href=" http://www.topqualityedm.com" >wire EDM</a><a href=" http://www.hrcp28.com" >华人彩票</a><a href=" http://www.inhome365.com/product_detail/183" >儿童生日礼物</a><a href=" http://www.inhome365.com/product_detail/179" >结婚礼物</a><a href=" http://www.hack2010.com" >源码论坛</a><a href=" http://www.szthnf.com" >别墅设计</a><a href=" http://www.aiheman.com" >天津半永久学校</a><a href=" http://www.tdxuanchi.com" >商业设计</a><a href=" http://www.yunkong.com" >步进电机</a><a href=" http://www.bsly8.com" >连环夺宝</a><a href=" http://www.zh-mylike.com" >免费学无痕双眼皮</a><a href=" http://www.520bymm.com" >美女包养网</a><a href=" http://beijing.jindunbaobiao.cn" >北京保镖公司</a><a href=" http://shanghai.jindunbaobiao.cn" >上海保镖公司</a><a href=" http://tianjin.jindunbaobiao.cn" >天津保镖公司</a><a href=" http://chongqing.jindunbaobiao.cn" >重庆保镖公司</a><a href=" http://guangzhou.jindunbaobiao.cn" >广州保镖公司</a><a href=" http://shenzhen.jindunbaobiao.cn" >深圳保镖公司</a><a href=" http://dongguan.jindunbaobiao.cn" >东莞保镖公司</a><a href=" http://xianggang.jindunbaobiao.cn" >香港保镖公司</a><a href=" http://aomen.jindunbaobiao.cn" >澳门保镖公司</a><a href=" http://jiangsu.jindunbaobiao.cn" >江苏保镖公司</a><a href=" http://nanjing.jindunbaobiao.cn" >南京保镖公司</a><a href=" http://suzhou.jindunbaobiao.cn" >苏州保镖公司</a><a href=" http://wuxi.jindunbaobiao.cn" >无锡保镖公司</a><a href=" http://changzhou.jindunbaobiao.cn" >常州保镖公司</a><a href=" http://kunshan.jindunbaobiao.cn" >昆山保镖公司</a><a href=" http://zhejiang.jindunbaobiao.cn" >浙江保镖公司</a><a href=" http://hangzhou.jindunbaobiao.cn" >杭州保镖公司</a><a href=" http://wenzhou.jindunbaobiao.cn" >温州保镖公司</a><a href=" http://ningbo.jindunbaobiao.cn" >宁波保镖公司</a><a href=" http://shandong.jindunbaobiao.cn" >山东保镖公司</a><a href=" http://jinan.jindunbaobiao.cn" >济南保镖公司</a><a href=" http://qingdao.jindunbaobiao.cn" >青岛保镖公司</a><a href=" http://anhui.jindunbaobiao.cn" >安徽保镖公司</a><a href=" http://hefei.jindunbaobiao.cn" >河北保镖公司</a><a href=" http://wuhu.jindunbaobiao.cn" >芜湖保镖公司</a><a href=" http://fujian.jindunbaobiao.cn" >福建保镖公司</a><a href=" http://fuzhou.jindunbaobiao.cn" >福州保镖公司</a><a href=" http://xiamen.jindunbaobiao.cn" >厦门保镖公司</a><a href=" http://guangxi.jindunbaobiao.cn" >广西保镖公司</a><a href=" http://nanning.jindunbaobiao.cn" >南宁保镖公司</a><a href=" http://hainan.jindunbaobiao.cn" >海南保镖公司<a href=" http://sanya.jindunbaobiao.cn" >三亚保镖公司</a><a href=" http://henan.jindunbaobiao.cn" >河南保镖公司</a><a href=" http://zhengzhou.jindunbaobiao.cn" >郑州保镖公司</a><a href=" http://hubei.jindunbaobiao.cn" >湖北保镖公司</a><a href=" http://wuhan.jindunbaobiao.cn" >武汉保镖公司</a><a href=" http://hunan.jindunbaobiao.cn" >湖南保镖公司</a><a href=" http://changsha.jindunbaobiao.cn" >长沙保镖公司</a><a href=" http://jiangxi.jindunbaobiao.cn" >江西保镖公司</a><a href=" http://nanchang.jindunbaobiao.cn" >南昌保镖公司</a><a href=" http://liaoning.jindunbaobiao.cn" >辽宁保镖公司</a><a href=" http://shenyang.jindunbaobiao.cn" >沈阳保镖公司</a><a href=" http://dalian.jindunbaobiao.cn" >大连保镖公司</a><a href=" http://heilongjiang.jindunbaobiao.cn" >黑龙江保镖公司</a><a href=" http://haerbin.jindunbaobiao.cn" >哈尔滨保镖公司</a><a href=" http://jilin.jindunbaobiao.cn" >吉林保镖公司</a><a href=" http://changchun.jindunbaobiao.cn" >长春保镖公司</a><a href=" http://sichuan.jindunbaobiao.cn" >四川保镖公司</a><a href=" http://chengdu.jindunbaobiao.cn" >成都保镖公司</a><a href=" http://yunnan.jindunbaobiao.cn" >云南保镖公司</a><a href=" http://kunming.jindunbaobiao.cn" >昆明保镖公司</a><a href=" http://guizhou.jindunbaobiao.cn" >贵州保镖公司<a href=" http://guiyang.jindunbaobiao.cn" >贵阳保镖公司</a><a href=" http://lasa.jindunbaobiao.cn" >拉萨保镖公司</a><a href=" http://hebei.jindunbaobiao.cn" >河北保镖公司</a><a href=" http://shijiazhuang.jindunbaobiao.cn" >石家庄保镖公司</a><a href=" http://shanxi.jindunbaobiao.cn" >山西保镖公司</a><a href=" http://taiyuan.jindunbaobiao.cn" >太原保镖公司</a><a href=" http://neimenggu.jindunbaobiao.cn" >内蒙古保镖公司</a><a href=" http://huhehaote.jindunbaobiao.cn" >呼和浩特保镖公司</a><a href=" http://shanxibaobiao.jindunbaobiao.cn" >陕西保镖公司</a><a href=" http://xian.jindunbaobiao.cn" >西安保镖公司</a><a href=" http://gansu.jindunbaobiao.cn" >甘肃保镖公司</a><a href=" http://lanzhou.jindunbaobiao.cn" >兰州保镖公司</a><a href=" http://xinjiang.jindunbaobiao.cn" >新疆保镖公司</a><a href=" http://ningxia.jindunbaobiao.cn" >宁夏保镖公司</a><a href=" http://www.jindunbaobiao.com.cn" >保镖公司</a><a href=" http://www.jindunbaobiao.cn" >保镖公司</a><a href=" http://www.tieshenbaobiao.com.cn" >保镖公司</a></div></body></html>