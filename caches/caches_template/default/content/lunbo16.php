<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?>   <div id="slideBox" class="slideBox">
      <div class="hd">
        <ul>
          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=c3fc2414f421777d747d673d47187e0d&sql=SELECT+%2A+FROM+qu_freebanner+where+catid%3D+%2716%27+ORDER+BY+id+DESC&cache=3600&num=6&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_freebanner where catid= \'16\' ORDER BY id DESC',)).'c3fc2414f421777d747d673d47187e0d');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_freebanner where catid= '16' ORDER BY id DESC LIMIT 6");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
          
          <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
          <li></li>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
        </ul>
      </div>
      <div class="bd">
        <ul>
          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=c3fc2414f421777d747d673d47187e0d&sql=SELECT+%2A+FROM+qu_freebanner+where+catid%3D+%2716%27+ORDER+BY+id+DESC&cache=3600&num=6&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_freebanner where catid= \'16\' ORDER BY id DESC',)).'c3fc2414f421777d747d673d47187e0d');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_freebanner where catid= '16' ORDER BY id DESC LIMIT 6");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
          <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
          <li><a href="<?php echo $val['url'];?>"><img src="<?php echo $val['thumb'];?>" alt="<?php echo $val['title'];?>" /></a></li>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
        </ul>
      </div>
    </div>