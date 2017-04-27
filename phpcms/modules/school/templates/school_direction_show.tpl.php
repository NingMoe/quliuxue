<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=7" />
<title>phpcmsV9 - 后台管理中心</title>
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
  <div class="table-list">
    <table width="100%" cellspacing="0" >
      <thead>
        <tr>
          <th width="20">id</th>
          <th>专业排名</th>
          <th>中文名称</th>
          <th>英文名称</th>
         <!-- <th>专业详情</th> -->
          <th>学位类型</th>
          <th>专业方向</th>
         
        </tr>
      </thead>
      <tbody>
        <?php 
		  foreach ($infos as $v){  ?>
        <tr>
          <td align='center'><?php echo $v['id'] ?></td>
          <td align='center'><?php echo $v['direction_rank'] ?></td>
          <td align='center'><?php echo $v['direction_cnname'] ?></td>
          <td align='center'><?php echo $v['direction_enname'] ?></td>
         <!-- <td align='center'><?php echo $v['direction_weburl'] ?></td> -->
          <td align='center'><?php echo $v['direction_style'] ?></td>
          <td align='center'><?php echo $v['direction_pid'] ?></td>
          <td align='center'><a href="javascript:edit_direction('<?php echo $v['id'] ?>','<?php echo $v['direction_cnname'] ?>')">修改</a>|<a href='?m=school&c=school&a=delete_direction&id=<?php echo $v['id'] ?>' onClick="return confirm('确认要删除 『 <?php echo $v['direction_cnname'] ?> 』这条专业吗？')">删除</a></td></tr>
         <?php } ?>
      </tbody>
    </table>
    <div id="pages"> <?php echo $pages;?> </div>
  </div>
</div>
<script type="text/javascript"> 
/*修改基本参数*/
window.top.$('#display_center_id').css('display','none');

function edit_direction(id, direction_cnname) {
	window.top.art.dialog({id:'edit_direction'}).close();
	window.top.art.dialog({title:'编辑《'+direction_cnname+'》基本信息',id:'edit_direction',iframe:'?m=school&c=school&a=edit_direction&id='+id,width:'920',height:'520'}, function(){var d = window.top.art.dialog({id:'edit_direction'}).data.iframe;d.document.getElementById('dosubmit').click();return false;}, function(){window.top.art.dialog({id:'edit_direction'}).close()});
}
/*结束*/
</script>
</body>
</html>