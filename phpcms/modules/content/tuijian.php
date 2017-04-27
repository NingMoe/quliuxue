


<?php

defined('IN_PHPCMS') or exit('No permission resources.');

class tuijian {

	

	public function init() {                                               //默认方法		

	  pc_base::load_sys_class('form', '', 0);

     
	  $list=pc_base::load_model('school_data_model');

        

          $data_hot = $list->query("select * from qu_school_data where recommend=1  order by rand() limit 4 "); 

		  $data_hots = $list->fetch_array($data_hot);
		  //print_r($data_hots);	
		
		include template('content','tuijian');
		
	}

}   

?>

