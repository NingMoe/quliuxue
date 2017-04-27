<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?> 
 
 <div class="txtScroll-top">
      <div class="bd">
<ul class="infoList">
          <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=df4b32f7cf308cec0e8efda0720e31e4&sql=SELECT+%2A+FROM+qu_successful_case+a%2Cqu_successful_case_data+b+WHERE+a.id%3Db.id+ORDER+BY+a.id+DESC&cache=3600&num=6&return=data\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$tag_cache_name = md5(implode('&',array('sql'=>'SELECT * FROM qu_successful_case a,qu_successful_case_data b WHERE a.id=b.id ORDER BY a.id DESC',)).'df4b32f7cf308cec0e8efda0720e31e4');if(!$data = tpl_cache($tag_cache_name,3600)){pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_successful_case a,qu_successful_case_data b WHERE a.id=b.id ORDER BY a.id DESC LIMIT 6");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);if(!empty($data)){setcache($tag_cache_name, $data, 'tpl_data');}}?>
          <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>
          <li><a><?php echo $val['oneju'];?></a></li>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
        </ul>
          </div>
    </div>