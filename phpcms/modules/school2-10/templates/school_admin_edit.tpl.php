<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta http-equiv="X-UA-Compatible" content="IE=7" />

<title>修改基本信息 - 后台管理中心</title>

<link href="<?php echo CSS_PATH;?>reset.css" rel="stylesheet" type="text/css" />

<link href="<?php echo CSS_PATH;?>zh-cn-system.css" rel="stylesheet" type="text/css" />

<link href="<?php echo CSS_PATH;?>table_form.css" rel="stylesheet" type="text/css" />

<link rel="stylesheet" type="text/css" href="<?php echo CSS_PATH;?>style/zh-cn-styles1.css" title="styles1" media="screen" />

<link rel="alternate stylesheet" type="text/css" href="<?php echo CSS_PATH;?>style/zh-cn-styles2.css" title="styles2" media="screen" />

<link rel="alternate stylesheet" type="text/css" href="<?php echo CSS_PATH;?>style/zh-cn-styles3.css" title="styles3" media="screen" />

<link rel="alternate stylesheet" type="text/css" href="<?php echo CSS_PATH;?>style/zh-cn-styles4.css" title="styles4" media="screen" />

<script language="javascript" type="text/javascript" src="<?php echo JS_PATH;?>jquery.min.js"></script>

<script language="javascript" type="text/javascript" src="<?php echo JS_PATH;?>admin_common.js"></script>

<script language="javascript" type="text/javascript" src="<?php echo JS_PATH;?>styleswitch.js"></script>

</head>

<body>

<style type="text/css">

  html{_overflow-y:scroll}

</style>

<div class="pad-lr-10">

  <form action="?m=school&c=school&a=edit&pc_hash=<?php echo $_SESSION['pc_hash'];?>" method="post" id="myform">

    <input type="hidden" class="input-text" value="<?php echo $r[id];?>" name="id" id="id" height="30" size="30" />

    <fieldset>

      <legend>基本信息</legend>

      <table width="100%"  class="table_form">

      <tr>

          <th width="120">学校关注人数：</th>

          <td class="y-bg"><input type="text" class="input-text"   value="<?php echo $r[dianji];?>"  name="dianji" id="dianji" height="30" size="30" />

            请输入整数数字</td>

        </tr>

       <tr>

          <th width="120">推荐状态：</th>

          <td class="y-bg"><label class="ib" >

              <input type="radio" <?php if($r['recommend']==0){echo "checked";}?> name='recommend'  id="recommend_1"  value="0">

              默认</label>

            <label class="ib" >

              <input type="radio"<?php if($r['recommend']==1){echo "checked";}?>  name='recommend'  id="recommend_2"  value="1">

              推荐</label>

              

            请选择是否推荐 </td>

        </tr>

        <tr>

          <th width="120">国家：</th>

          <td class="y-bg"><label class="ib" >

              <input type="radio" name='country' <?php if($r['country']==1){echo "checked";}?>  id="country_1"  value="1">

              美国</label>

            <label class="ib" >

              <input type="radio" name='country' <?php if($r['country']==2){echo "checked";}?>  id="country_2"  value="2">

              英国</label>

            <label class="ib" >

              <input type="radio" name='country' <?php if($r['country']==3){echo "checked";}?> id="country_3"  value="3">

              加拿大</label>

            <label class="ib" >

              <input type="radio" name='country' <?php if($r['country']==4){echo "checked";}?> id="country_4"  value="4">

              澳大利亚</label>

            <label class="ib" >

              <input type="radio" name='country' <?php if($r['country']==5){echo "checked";}?> id="country_5"  value="5">

              新加坡</label>

            <label class="ib" >

              <input type="radio" name='country' <?php if($r['country']==6){echo "checked";}?> id="country_6"  value="6">

              香港 </label>

            请选择学校所在国家（区） </td>

        </tr>

        <tr>

          <th width="120">中文名称：</th>

          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[cnname];?>" name="cnname" id="cnname" height="30" size="30" />

            请输入学校完整中文名称</td>

        </tr>

        <tr>

          <th width="120">英文名称：</th>

          <td class="y-bg"><input type="text" class="input-text"  value="<?php echo $r[enname];?>"  name="enname" id="enname" height="30" size="30" />

            请输入学校完整英文名称</td>

        </tr>

        <tr>

          <th width="120">学校LOGO：</th>

          <td class="y-bg"><script type="text/javascript" src="<?php echo APP_PATH;?>statics/js/swfupload/swf2ckeditor.js"></script>

            <input type='text' name='logo' id='logo'  value="<?php echo $r[logo];?>"  size='' class='input-text' />

            <input type='button' class='button' onclick="flashupload('logo_images', '附件上传','logo',submit_images,'1,gif|jpg|jpeg|png|bmp,1,,,0','content','7','183008883f53cdc0a3db3f8baa3c6bb8')"/ value='上传图片'>

            <input type="button" style="width: 66px;" class="button" onclick="$('#logo_preview').attr('src','<?php echo APP_PATH;?>statics/images/icon/upload-pic.png');$('#logo').val(' ');return false;" value="取消图片"></td>

        </tr>

        <tr>

      <th width="80"> 校园风采大图	  </th>

      <td><input type='text' name='datu' id='datu' value='<?php echo $r[datu];?>' size='' class='input-text' />  <input type='button' class='button' onclick="flashupload('datu_images', '附件上传','datu',submit_images,'1,gif|jpg|jpeg|png|bmp,1,,,0','content','0','87c9857d1ab8c63bdbaa89398ef1e762')"/ value='上传图片'><input type="button" style="width: 66px;" class="button" onclick="crop_cut_datu($('#datu').val());return false;" value="裁切图片"><input type="button" style="width: 66px;" class="button" onclick="$('#datu_preview').attr('src','<?php echo APP_PATH;?>statics/images/icon/upload-pic.png');$('#datu').val(' ');return false;" value="取消图片"><script type="text/javascript">function crop_cut_datu(id){

	if (id=='') { alert('请先上传缩略图');return false;}

	window.top.art.dialog({title:'裁切图片', id:'crop', iframe:'index.php?m=content&c=content&a=public_crop&module=content&catid='+catid+'&picurl='+encodeURIComponent(id)+'&input=datu&preview=', width:'680px', height:'480px'}, 	function(){var d = window.top.art.dialog({id:'crop'}).data.iframe;

	d.uploadfile();return false;}, function(){window.top.art.dialog({id:'crop'}).close()});

};</script>  </td>

    </tr>

        <tr>

          <th width="120">所在地：</th>

          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[location];?>"   name="location" id="location" height="30" size="30" />

            请输入学校所在地</td>

        </tr>

        <tr>

          <th width="120">地理位置：</th>

          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[position];?>"   name="position" id="position" height="30" size="30" />

            请输入学校地理位置</td>

        </tr>

        <tr>

          <th width="120">学校排名：</th>

          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[rank];?>"   name="rank" id="rank" height="30" size="30" />

            请直接输入排名数字</td>

        </tr>

        <tr>

          <th width="120">录取几率：</th>

          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[odds];?>"   name="odds" id="odds" height="30" size="30" />

            请直接输入录取几率（不需要输入%）</td>

        </tr>

        <tr>

          <th width="120">学校官方网址：</th>

          <td class="y-bg"><input type="text" class="input-text"  value="<?php echo $r[weburl];?>"  name="weburl" id="weburl" height="30" size="30" />

            请直接输入学校官网网址</td>

        </tr>

        <tr>

          <th width="120">托福成绩：</th>

          <td class="y-bg"><input type="text" class="input-text"  value="<?php echo $r[toefl_scores];?>"  name="toefl_scores" id="toefl_scores" height="30" size="30" />

            请直接输入托福成绩</td>

        </tr>

        <tr>

          <th width="120">雅思成绩：</th>

          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[ielts_score];?>"   name="ielts_score" id="ielts_score" height="30" size="30" />

            请直接输入雅思成绩</td>

        </tr>

        <tr>

          <th width="80"> 学位 </th>

          <td><label class="ib" style="width:80px">

              <input type="checkbox" name='degree[]' <?php if(strpos($r['degree'],"1")===false){}else{echo "checked";}?> id="degree_1"  value="1">

              本科</label>

            <label class="ib" style="width:80px">

              <input type="checkbox" name='degree[]' <?php if(strpos($r['degree'],"2")===false){}else{echo "checked";}?> id="degree_2"  value="2">

              硕士</label>

            <label class="ib" style="width:80px">

              <input type="checkbox" name='degree[]' <?php if(strpos($r['degree'],"3")===false){}else{echo "checked";}?> id="degree_3"  value="3">

              博士</label>

            <label class="ib" style="width:80px">

              <input type="checkbox" name='degree[]' <?php if(strpos($r['degree'],"4")===false){}else{echo "checked";}?>  id="degree_4"  value="4">

              博士后</label>

            学校可授学位</td>

        </tr>

       <tr>



      <th width="80"> 学校简介

	  </th>



      <td><div id='school_profile_tip'></div><textarea name="school_profile" id="school_profile" boxid="school_profile"><?php echo $r[school_profile];?></textarea><script charset="utf-8" type="text/javascript" src="/statics/js/kindeditor/kindeditor-min.js"></script><script charset="utf-8" type="text/javascript" src="/statics/js/kindeditor/lang/zh_CN.js"></script><script type="text/javascript">

KindEditor.ready(function(K) {

editor = K.create('textarea[id="school_profile"]', {

allowFileManager : true,

width : '99%',height : '400px'});});</script><table cellpadding='0' cellspacing='1' border='0'><tr><td></td></tr></table>  </td>



    </tr>

        <tr>

          <th width="120"> 录取要求 </th>

           <td><div id='requirements_tip'></div><textarea name="requirements" id="requirements" boxid="requirements"><?php echo $r[requirements];?></textarea>

		   <script type="text/javascript">

KindEditor.ready(function(K) {

editor = K.create('textarea[id="requirements"]', {

allowFileManager : true,

width : '99%',height : '400px'});});</script><table cellpadding='0' cellspacing='1' border='0'><tr><td></td></tr></table>  </td>



    </tr>

        <tr>

          <th width="120"> 七嘴八舌 </th>

          

           <td><div id='qizuibashe_tip'></div><textarea name="qizuibashe" id="qizuibashe" boxid="qizuibashe"><?php echo $r[qizuibashe];?></textarea>

		   <script type="text/javascript">

KindEditor.ready(function(K) {

editor = K.create('textarea[id="requirements"]', {

allowFileManager : true,

width : '99%',height : '400px'});});</script><table cellpadding='0' cellspacing='1' border='0'><tr><td></td></tr></table>  </td>



    </tr>

        <tr>

          <th width="120"> 校园文化 </th>

         

          <td><div id='culture_tip'></div><textarea name="culture" id="culture" boxid="culture"><?php echo $r[culture];?></textarea>

		  <script type="text/javascript">

KindEditor.ready(function(K) {

editor = K.create('textarea[id="culture"]', {

allowFileManager : true,

width : '99%',height : '400px'});});</script><table cellpadding='0' cellspacing='1' border='0'><tr><td></td></tr></table>  </td>



    </tr>

        <?php 

    foreach ($data_professional as $k_professional => $v_professional){  

    ?>

        <tr>

          <th width="80"><?php echo $v_professional[content]?></th>

          <td><label class="ib" style="width:110px">

              <input type="checkbox" name='professional_all'  id="pp_<?php echo $v_professional[id]?>"  value="<?php echo $v_professional[id]?>">

              <b>全选/不选</b></label>

            <?php 

	        pc_base::load_sys_class('form', '', 0);

			$list=pc_base::load_model('school_data_model');

			$list1=pc_base::load_model('professional_data_model');

			$where="professional_pid='$v_professional[id]'";	

			$data_direction = $list1->listinfo($where,'id asc',$_GET['page'],$pages = '30');

	       

            foreach ($data_direction as $k_direction => $v_direction){  

    ?>

            <label class="ib" style="width:110px">

              <input type="checkbox" name='professional[]'  
              
              <?php
			  $str = $r['professional'];
$people=explode(",",$str);

if(in_array($v_direction['id'],$people)){
  echo "checked";
}else{
  echo "";
}
?> 

               id="p_<?php echo $v_professional[id]?>"  value="<?php echo $v_direction[id]?>">

              <?php echo $v_direction[content]?></label>

            <?php } ?></td>

        </tr>

        <?php } ?>

      </table>

    </fieldset>

    <div class="bk15"></div>

    <input type="submit" class="dialog" id="dosubmit" name="dosubmit" value="提交" />

  </form>

</div>

<script type="text/javascript">

        $(function () {

     

            // 反选

            $("#pp_1").bind("click", function () {

                $("[id = p_1]:checkbox").each(function () {

              $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_2").bind("click", function () {

                $("[id = p_2]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_3").bind("click", function () {

                $("[id = p_3]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_4").bind("click", function () {

                $("[id = p_4]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_5").bind("click", function () {

                $("[id = p_5]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });







			    // 反选

            $("#pp_6").bind("click", function () {

                $("[id = p_6]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });







			    // 反选

            $("#pp_7").bind("click", function () {

                $("[id = p_7]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });









			    // 反选

            $("#pp_8").bind("click", function () {

                $("[id = p_8]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });







			    // 反选

            $("#pp_9").bind("click", function () {

                $("[id = p_9]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });







			    // 反选

            $("#pp_10").bind("click", function () {

                $("[id = p_10]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });







			    // 反选

            $("#pp_11").bind("click", function () {

                $("[id = p_11]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_12").bind("click", function () {

                $("[id = p_12]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });







			    // 反选

            $("#pp_13").bind("click", function () {

                $("[id = p_13]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





    // 反选

            $("#pp_14").bind("click", function () {

                $("[id = p_14]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });







			    // 反选

            $("#pp_15").bind("click", function () {

                $("[id = p_15]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_16").bind("click", function () {

                $("[id = p_16]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });







			    // 反选

            $("#pp_17").bind("click", function () {

                $("[id = p_17]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });







			    // 反选

            $("#pp_18").bind("click", function () {

                $("[id = p_18]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_19").bind("click", function () {

                $("[id = p_19]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_20").bind("click", function () {

                $("[id = p_20]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_21").bind("click", function () {

                $("[id = p_21]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_22").bind("click", function () {

                $("[id = p_22]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });



			    // 反选

            $("#pp_23").bind("click", function () {

                $("[id = p_23]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });





			    // 反选

            $("#pp_24").bind("click", function () {

                $("[id = p_24]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });



              // 反选

            $("#pp_25").bind("click", function () {

                $("[id = p_25]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });

			    // 反选

            $("#pp_26").bind("click", function () {

                $("[id = p_26]:checkbox").each(function () {

                    $(this).attr("checked", !$(this).attr("checked"));

                });

            });

 

       

        });

    </script>

</body>

</html>