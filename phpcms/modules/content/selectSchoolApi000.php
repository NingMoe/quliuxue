<?php
defined('IN_PHPCMS') or exit('No permission resources.');


class selectSchoolApi{

	public function selectSchool() {
		$school_db = pc_base::load_model('school_data_model');
		$country_ids= implode(',',$_POST[country_ids]);//提交过来的国家id由数组转换为字符串
		$degree_ids= implode(',',$_POST[degree_ids]);//提交过来的学历id由数组转换为字符串
		$where ="";
        if($country_ids=='0') $country_ids='';
        if($degree_ids=='0') $degree_ids='';

        //国家的拼接条件
	    if ($country_ids) {
            $where .= $where ?  " AND country in($country_ids)" : " country in($country_ids)";
	    }
	    //排名的拼接条件
	    if ($_POST[rank_left]) {
            $where .= $where ?  " AND (rank>='$_POST[rank_left]' and rank<='$_POST[rank_right]')" : " (rank>='$_POST[rank_left]' and rank<='$_POST[rank_right]')";
	    }
	    //学历的拼接条件
	    if ($degree_ids) {
	    foreach ($_POST[degree_ids] as $k=> $v) {	    	
	    	if($k==0){
	    		 $where_degree="degree LIKE '%$v%'";
	    	}else{
	    		$where_degree .=" and degree LIKE '%$v%'";
	    	}	    		
	    }
            $where .= $where ?  " AND ($where_degree)" : "  ($where_degree)";
	    }





         //专业和方向的拼接条件
	    //$new_professional是所有专业和方向的一维数组
	    $new_professional=$_POST[professional_ids];
	    foreach ($_POST[professional_fangxiang_ids] as $key => $value) {
	    	if(strstr($value,",")){
              $new_arr_professional_fangxiang_ids=explode(',',$value);
              foreach ( $new_arr_professional_fangxiang_ids as $k => $v) {
              	$new_professional[]=$v;
              }
	    	}else{
               $new_professional[]=$value;
	    	}

	    }

	    if ($new_professional) {
	    foreach ($new_professional as $k=> $v) {	    	
	    	if($k==0){
	    		$where_professional="professional LIKE '%$v%'";
	    	}else{
	    		$where_professional .=" and professional LIKE '%$v%'";
	    	}	    		
	    }
            $where .= $where ?  " AND ($where_professional)" : "  ($where_professional)";
	    }
       //print_R($where);exit;

         if($_POST[paixu_rank]){
         	if($_POST[paixu_rank]==1){
         	$order=" order by rank desc";
            }else{
             $order=" order by recommend desc";
            }
         }


        //搜索满足筛选条件的记录
	    if($where==''){
	    	$school_db->query("SELECT * FROM `qu_school_data`");
	    }else{
	    	$school_db->query("SELECT * FROM `qu_school_data` where ".$where.$order);
	    }

	    	

		
		$school_list = $school_db->fetch_array();
        include template('content','list_school_search_content');
	}
}
?>