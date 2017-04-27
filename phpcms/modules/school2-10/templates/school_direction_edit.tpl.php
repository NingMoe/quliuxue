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
  <form action="?m=school&c=school&a=edit_direction&pc_hash=<?php echo $_SESSION['pc_hash'];?>" method="post" id="myform">
    <fieldset>
      <legend>学校专业</legend>
      <table width="100%"  class="table_form">
      <input type="hidden" class="input-text" value="<?php echo $r[id];?>"  name="id" readonly="readonly" id="id" height="30" size="30" />
        <tr>
        <th width="120">所属学校id：</th>
          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[direction_school_id];?>"  name="direction_school_id" readonly="readonly" id="direction_school_id" height="30" size="30" />
        </td>
        </tr>
        <tr>
        <th width="120">专业排名：</th>
          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[direction_rank];?>"   name="direction_rank" id="direction_rank" height="30" size="30" />
        </td>
        </tr>
        <tr>
        <th width="120">中文名称：</th>
          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[direction_cnname];?>"   name="direction_cnname" id="direction_cnname" height="30" size="30" />
        </td>
        </tr>
        <tr>
        <th width="120">英文名称：</th>
          <td class="y-bg"><input type="text" class="input-text"  value="<?php echo $r[direction_enname];?>"  name="direction_enname" id="direction_enname" height="30" size="30" />
        </td>
        </tr>
        <tr>
        <th width="120">专业详情：</th>
          <td class="y-bg"><input type="text" class="input-text"  value="<?php echo $r[direction_weburl];?>"  name="direction_weburl" id="direction_weburl" height="30" size="30" />
        </td>
        </tr>
        <tr>
        <th width="120">学位类型：</th>
          <td class="y-bg"><input type="text" class="input-text" value="<?php echo $r[direction_style];?>"   name="direction_style" id="direction_style" height="30" size="30" />
        </td>
        </tr>
        <tr>
         <th width="80"> 报名截止日期	  </th>
       <td><div id='baomingtime_tip'></div><textarea name="baomingtime" id="baomingtime" boxid="baomingtime"><?php echo $r[baomingtime];?></textarea><script charset="utf-8" type="text/javascript" src="/statics/js/kindeditor/kindeditor-min.js"></script><script charset="utf-8" type="text/javascript" src="/statics/js/kindeditor/lang/zh_CN.js"></script><script type="text/javascript">
KindEditor.ready(function(K) {
editor = K.create('textarea[id="baomingtime"]', {
allowFileManager : true,
width : '99%',height : '400px'});});</script><table cellpadding='0' cellspacing='1' border='0'><tr><td></td></tr></table>  </td>

    </tr>
    
        <tr>
         <th width="120">专业所属方向：</th>
         <td width="120">专业>>方向>>分类</td>
       
		</tr>
		<?php 
    foreach ($data_professional as $k_professional => $v_professional){  
    ?>
        <tr>
          <th width="80"><?php echo $v_professional[content]?></th>
          <td>
            <?php 
	        pc_base::load_sys_class('form', '', 0);
			$list=pc_base::load_model('school_data_model');
			$list1=pc_base::load_model('professional_data_model');
			$where="professional_pid='$v_professional[id]'";	
			$data_direction = $list1->listinfo($where,'id asc',$_GET['page'],$pages = '30');
	       
            foreach ($data_direction as $k_direction => $v_direction){  
    ?>
            <label class="ib" style="width:110px">
              <input type="radio" name='direction_pid' <?php if($r['direction_pid']==$v_direction['id']){echo "checked";}else{}?>   id="p_<?php echo $v_professional[id]?>"  value="<?php echo $v_direction[id]?>">
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
$(document).ready( function(){
	
	$("#pp_1").click(function(){
		var a = $("p_1").attr("checked");
		if (a != undefined) {
			$(this).toggleClass('selected');
			$("p_1").attr("checked",false);
			}
			else
			{
				$(this).toggleClass('selected');
				$("p_1").attr("checked",true);
            }
	 });
	 	
});
</script>
</body>
</html>