<?php
defined('IN_PHPCMS') or exit('No permission resources.');
class index {
	
	public function init() {                                               //默认方法		
	    /*清空排序cookies*/
	    
		include template('school', 'index');                    //调用auto里面的index首页模版	
	}

	public function ranking() {                                               //默认方法		
	    /*清空排序cookies*/
	    
		include template('school', 'ranking');                    //调用auto里面的index首页模版	
	}
}   
?>
