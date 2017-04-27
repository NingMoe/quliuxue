<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!-- 头部 -->



<div  class="header clear">

  <div class="section"> 

    <!-- 友情链接 -->

    <div class="friendlink">

      <p class="wrapper">

       <?php if($_username || get_nickname()) { ?><font color="#fff">会员:</font><a href="<?php echo APP_PATH;?>index.php?m=member&siteid=<?php echo $siteid;?>"><?php echo get_nickname();?></a> <?php } ?>

      <a href="<?php echo $CATEGORYS['43']['url'];?>">美国大学排名</a><a href="<?php echo $CATEGORYS['44']['url'];?>">英国大学排名</a>
      <a style="display:none;" href="<?php echo $CATEGORYS['42']['url'];?>">世界大学排名</a>
      <a href="<?php echo $CATEGORYS['13']['url'];?>">留学中介排名</a>
      </p>

    </div>

    <!-- 友情链结束 -->

    <div class="wrapper"> 

      <!-- logo -->

      <h1><a href="index.html">Qu去留学</a></h1>

      <!-- 搜索开始-->

      <div class="search">

      

       

      

       <form action="<?php echo APP_PATH;?>index.php" method="get">

        <input type="hidden" name="m" value="content"/>

        <input type="hidden" name="c" value="index"/>

        <input type="hidden" name="a" value="lists"/>

 

     

          <div id="searchTxt" class="searchTxt" >

            <div class="searchMenu">

              <div class="searchSelected" id="searchSelected">搜大学</div>

              <div style="display:none;" class="searchTab" id="searchTab">

                <ul>

                  <li class="" val="22" val2="1">搜大学</li>

                  <li val="22" val2="2">搜专业</li>

                  <li val="13" val2="0">搜中介</li>

                </ul>

                

                <select name="type" style="display:none;" class="type">

                <option value="1" >搜大学</option>

                <option value="2" >搜专业</option>

                <option value="0" >搜中介</option>

                </select> 

                <select name="catid" style="display:none;" class="catid">

                <option value="22" >搜大学</option>

                <option value="22" >搜专业</option>

                <option value="13" >搜中介</option>

                </select>

              </div>

            </div>

            <input type="text" placeholder="请输入您要查找的学校或专业" name="keyword"  class="keyword"  value="" />

            <button type="submit" value="搜 索" class="" id="searchbtn" /></button>


            </div>

        </form>

        <!-- 搜索结束- --> 

      </div>

      <div class="about">

        <ul>

          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=6e15ad6b495cbbb858b8b12efc29a186&action=category&catid=1&num=25&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'1','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'25',));}?>

          <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?><?php if($n>1) { ?><?php } ?><li><a  href="<?php echo $r['url'];?>"><?php echo $r['catname'];?></a></li><?php $n++;}unset($n); ?>

          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>

          <li><?php if($_username || get_nickname()) { ?><a class="a1" href="<?php echo APP_PATH;?>index.php?m=member&siteid=<?php echo $siteid;?>">会员</a><a href="<?php echo APP_PATH;?>index.php?m=member&c=index&a=logout&forward=<?php echo urlencode($_GET['forward']);?>&siteid=<?php echo $siteid;?>" target="_top">退出</a><?php } else { ?><a class="a1 denglu" href="#" target="_top">登陆</a><a href="<?php echo APP_PATH;?>index.php?m=member&c=index&a=register&siteid=<?php echo $siteid;?>" target="_blank">注册</a>

    <?php } ?> 

     </li>

        </ul>

      </div>

      <!-- END MAIN NAVIGATION --> 

    </div>

    <!-- 头部导航 -->

    <div id="second">

      <div class="wrapper">

        <div id="secondnav">

          <ul class="clear">

            <li<?php if(!$catid && !$jiamian) { ?> class="active"<?php } ?> ><a href="/">首页</a>

            </li>

            <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=b43f1459ac702900c8d44c91a5e796dd&action=category&catid=0&num=25&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'0','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'25',));}?>

            <?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>

            <li <?php if($catid==$r[catid]|| $jiamian==$r[catid] || $top_parentid==$r[catid]) { ?> class="active"<?php } ?>  ><a href="<?php echo $r['url'];?>"><?php echo $r['catname'];?></a></li>

            <?php $n++;}unset($n); ?>

            <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>

          </ul>

        </div>

      </div>

    </div>

    <!-- 头部导航结束 --> 

  </div>

</div>

<!-- 头部结束 --> 