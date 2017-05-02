<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?>
    
    <div id="slideBox" class="slideBox">
        <div class="bd">
          <ul>
           <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=ff6c08e757b775ff93cdd25ef2639d7e&sql=SELECT+%2A+FROM+qu_freebanner+where+catid%3D+%2723%27+ORDER+BY+id+DESC&cache=3600&num=6&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_freebanner where catid= \'23\' ORDER BY id DESC',)).'ff6c08e757b775ff93cdd25ef2639d7e');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_freebanner where catid= '23' ORDER BY id DESC LIMIT 6");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
          <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
          <li><a><img src="<?php echo $val['thumb'];?>"  /></a></li>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
          </ul>
        </div>
 <!-- 下面是前/后按钮代码，如果不需要删除即可 --> 
        <a class="prev" href="javascript:void(0)"></a> 
		<a class="next" href="javascript:void(0)"></a> 
		</div>        