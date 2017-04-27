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
<div class="subnav">
  <div class="content-menu ib-a blue line-x"> <a class="add fb" href="javascript:window.top.art.dialog({id:'add',iframe:'?m=school&c=school&a=add', title:'添加学校', width:'920', height:'520', lock:true}, function(){var d = window.top.art.dialog({id:'add'}).data.iframe;var form = d.document.getElementById('dosubmit');form.click();return false;}, function(){window.top.art.dialog({id:'add'}).close()});void(0);"><em>添加学校</em></a> 
    
    <!--    <a class="add fb" href='?m=new_robot&c=robot&a=add'><em>添加大学</em></a>    　    --> 
    <a href="" class="on"><em>学校管理</em></a> <a>
    <form method="post" id="form0" name="form0">
      <input type="text" name="cnname">
      <input type="submit" name="dosubmit" value="搜学校" id="dosubmit">
    </form>
    </a> </div>
</div>
<style type="text/css">
	html{_overflow-y:scroll}
</style>
<div class="pad-lr-10">
  <div class="table-list">
    <table width="100%" cellspacing="0" >
      <thead>
        <tr>
          <th width="20">id</th>
          
          <th>热招</th>
          <th>中文名称</th>
          <th>英文名称</th>
          <th>国家</th>
          <th>学校排名</th>
          <th>托福成绩</th>
          <th>雅思成绩</th>
          <th>管理操作</th>
        </tr>
      </thead>
      <tbody>
        <?php 
		  foreach ($infos as $v){  ?>
        <tr>
          <td align='center'><?php echo $v['id'] ?></td>
          <td align='center'>
		  <a href='?m=school&c=school&a=addhot&id=<?php echo $v['id'] ?>' onClick="return confirm('确认要更改『 <?php echo $v['cnname'] ?> 』的招生状态吗？')"><?php if($v['recommend']>0){echo "<font color='#FF0000'>热招中</font>";}else{echo "招生中";} ?></a>
		  
		  
		  </td>
          <td align='center'><?php echo $v['cnname'] ?></td>
          <td align='center'><?php echo $v['enname'] ?></td>
          <td align='center'><?php if($v['country']==1){echo "美国";}
		   elseif($v['country']==2){echo "英国";}
		   elseif($v['country']==3){echo "加拿大";}
	       elseif($v['country']==4){echo "澳大利亚";}
		   elseif($v['country']==5){echo "新加坡";}
		   elseif($v['country']==6){echo "香港";}?></td>
          <td align='center'><?php echo $v['rank'] ?></td>
          <td align='center'><?php echo $v['toefl_scores'] ?></td>
          <td align='center'><?php echo $v['ielts_score'] ?></td>
          <td align='center'><a href="javascript:edit_school('<?php echo $v['id'] ?>','<?php echo $v['cnname'] ?>')">修改</a>|<a href='?m=school&c=school&a=delete&id=<?php echo $v['id'] ?>' onClick="return confirm('确认要删除 『 <?php echo $v['cnname'] ?> 』的所有数据 吗？')">删除</a></td>
          <td align='center'><a class="add fb" href="javascript:window.top.art.dialog({id:'add',iframe:'?m=school&c=school&a=add_direction&id=<?php echo $v['id'] ?>', title:'添加 <?php echo $v['cnname'] ?> 的专业', width:'800', height:'420', lock:true}, function(){var d = window.top.art.dialog({id:'add'}).data.iframe;var form = d.document.getElementById('dosubmit');form.click();return false;}, function(){window.top.art.dialog({id:'add'}).close()});void(0);">添加专业</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="add fb" href="javascript:window.top.art.dialog({id:'add',iframe:'?m=school&c=school&a=show_direction&id=<?php echo $v['id'] ?>', title:'查看 <?php echo $v['cnname'] ?> 的专业', width:'800', height:'420', lock:true}, function(){var d = window.top.art.dialog({id:'add'}).data.iframe;var form = d.document.getElementById('dosubmit');form.click();return false;}, function(){window.top.art.dialog({id:'add'}).close()});void(0);">专业列表</a></td>
          
          <?php } ?>
        </tr>
      </tbody>
    </table>
    <div id="pages"> <?php echo $pages;?> </div>
  </div>
</div>
<script type="text/javascript"> 
/*修改基本参数*/
window.top.$('#display_center_id').css('display','none');

function edit_school(id, cnname) {
	window.top.art.dialog({id:'edit_school'}).close();
	window.top.art.dialog({title:'编辑《'+cnname+'》基本信息',id:'edit_school',iframe:'?m=school&c=school&a=edit&id='+id,width:'920',height:'520'}, function(){var d = window.top.art.dialog({id:'edit_school'}).data.iframe;d.document.getElementById('dosubmit').click();return false;}, function(){window.top.art.dialog({id:'edit_school'}).close()});
}
function show_direction(id, cnname) {
	window.top.art.dialog({id:'show_direction'}).close();
	window.top.art.dialog({title:'编辑《'+cnname+'》基本信息',id:'show_direction',iframe:'?m=school&c=school&a=show_direction&id='+id,width:'920',height:'520'}, function(){var d = window.top.art.dialog({id:'show_direction'}).data.iframe;d.document.getElementById('dosubmit').click();return false;}, function(){window.top.art.dialog({id:'show_direction'}).close()});
}

</script>
</body>
</html>