<?php
defined('IN_PHPCMS') or exit('No permission resources.');


class anliApi{

	public function anli() {
		pc_base::load_sys_class('form', '', 0);
		
		$list=pc_base::load_model('successful_case_data_model');
        //搜索满足筛选条件的记录
	    
	    $anli_list= $list ->listinfo('',$order,$_GET['page'],$pages = '9');		    
		$pages = $list ->pages;
		include template('content','category_free_content');
	}
	public function school1() {
		pc_base::load_sys_class('form', '', 0);
		
		$list=pc_base::load_model('xiangmu_data_model');
        //搜索满足筛选条件的记录
	    $where = '';
		if($_GET[didian]!=''){
			$where .= $where ?  " AND didian='$_GET[didian]'" : " didian='$_GET[didian]'";
		}
		if ($_GET[leixing]!=''){
            $where .= $where ?  " AND xiangmuleixing='$_GET[leixing]'" : " xiangmuleixing='$_GET[leixing]'";
        }
	    $school1_list= $list ->listinfo($where,'id DESC',$_GET['page'],$pages = '4');		    
		$pages = $list ->pages;
		include template('content','list_school1_content');
	}
	public function school2() {
		pc_base::load_sys_class('form', '', 0);
		
		$list=pc_base::load_model('chanpin_data_model');
        //搜索满足筛选条件的记录
	    $where = '';
		if($_GET[dingzhi]!=''){
			$where .= $where ?  " AND dingzhi='$_GET[dingzhi]'" : " dingzhi='$_GET[dingzhi]'";
		}
		
	    $school2_list= $list ->listinfo($where,$order,$_GET['page'],$pages = '4');		    
		$pages = $list ->pages;
		include template('content','list_school2_content');
	}
	
	
}
?>