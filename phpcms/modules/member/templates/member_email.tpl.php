<?php defined('IN_ADMIN') or exit('No permission resources.');?>
<?php include $this->admin_tpl('header', 'admin');?>
<div class="pad-10">
<form method="post" action="?m=member&c=member&a=emails" name="myform" id="myform">
<input type="hidden" name="emails[ids]" value="<?php echo $ids ?>" />
<table class="table_form" width="100%" cellspacing="0">
<tbody>
<tr>
  <th width="80"><strong>邮件标题</strong></th>
  <td><input name="emails[title]" id="title" class="input-text" type="text" size="50" ></td>
</tr>
<tr>
  <th><strong>内容</strong></th>
  <td><textarea name="emails[content]" id="content"></textarea><?php echo form::editor('content');?></td>
</tr>

</tbody>
</table>
<input type="submit" name="dosubmit" id="dosubmit" value=" <?php echo L('ok')?> " class="dialog">&nbsp;<input type="reset" class="dialog" value=" <?php echo L('clear')?> ">
</form>
</div>
</body>
</html>
<script type="text/javascript">


$(document).ready(function(){
$.formValidator.initConfig({formid:"myform",autotip:true,onerror:function(msg,obj){window.top.art.dialog({content:msg,lock:true,width:'220',height:'70'}, function(){this.close();$(obj).focus();})}});
$('#title').formValidator({onshow:"<?php echo L('input_announce_title')?>",onfocus:"<?php echo L('title_min_3_chars')?>",oncorrect:"<?php echo L('right')?>"}).inputValidator({min:1,onerror:"<?php echo L('title_cannot_empty')?>"}).ajaxValidator({type:"get",url:"",data:"m=announce&c=admin_announce&a=public_check_title",datatype:"html",cached:false,async:'true',success : function(data) {
        if( data == "1" )
  {
            return true;
  }
        else
  {
            return false;
  }
},
error: function(){alert("<?php echo L('server_no_data')?>");},
onerror : "<?php echo L('announce_exist')?>",
onwait : "<?php echo L('checking')?>"
});

$("#content").formValidator({autotip:true,onshow:"",onfocus:"<?php echo L('announcements_cannot_be_empty')?>"}).functionValidator({
     fun:function(val,elem){
     //获取编辑器中的内容
  var oEditor = CKEDITOR.instances.content;
  var data = oEditor.getData();
        if(data==''){
      return "<?php echo L('announcements_cannot_be_empty')?>"
     } else {
   return true;
  }
}
});

});
</script>
