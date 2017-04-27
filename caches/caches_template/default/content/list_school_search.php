<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">



<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<?php



     $jiamian="9";



 ?>

<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>

<meta name="keywords" content="<?php echo $SEO['keyword'];?>">

<meta name="description" content="<?php echo $SEO['description'];?>">

<link rel="stylesheet" href="/style/css/search.css" type="text/css">

<script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script>

<link rel="stylesheet" href="/style/font-awesome/css/font-awesome.min.css" type="text/css">

</head>



<body>

<a name="top" id="top"></a>

<div id="wrapper">



<!-- 头部 --> 



<?php include template("content","top"); ?> 



<!-- 头部结束 --> 



<!--院校搜索上部-->



<div class="reporttitle">

  <h2>院校搜索</h2>

</div>



<!--主要内容--->



<div class="content w-1000">

  <div class="sebox"> 

    

    <!--左侧-->

    

    <div class="s-left">

      <div class="s-1">

        <div class="imgbox"><a href="<?php echo $CATEGORYS['22']['url'];?>"><img src="/style/images/fz.png" /></a></div>

        <div class="nrbox">

          <h2>院校搜索</h2>

          <p>国内最大的留学院校</p>

        </div>

        

        <!-- 搜索开始-->

        

        <div class="search">

          <form action="<?php echo APP_PATH;?>index.php" method="get">

            <input type="hidden" name="m" value="content"/>

            <input type="hidden" name="c" value="index"/>

            <input type="hidden" name="a" value="lists"/>

            <div id="searchTxt" class="searchTxt" >

              <div class="searchMenu">

                <div class="searchSelected1" id="searchSelected">搜大学</div>

                <div style="display:none;" class="searchTab1" id="searchTab">

                  <ul>

                    <li class="" val="22" val2="1">搜大学</li>

                    <li val="22" val2="2">搜专业</li>

                  </ul>

                  <select name="type" style="display:none;" class="type">

                    <option value="1" >搜大学</option>

                    <option value="2" >搜专业</option>

                  </select>

                  <select name="catid" style="display:none;" class="catid">

                    <option value="22" >搜大学</option>

                    <option value="22" >搜专业</option>

                  </select>

                </div>

              </div>

              <input type="text" placeholder="请输入您要查找的学校或专业" name="keyword"  class="keyword"  value=""/>

              <button type="submit" value="搜 索" class="" id="searchbtn" />
              </button>

            </div>

          </form>

        </div>

        

        <!-- 搜索结束- -->

        

        <div class="clear"></div>

      </div>

      

      <!--第二部分-->

      

      <p class="cxss"><a href="/index.php?m=content&c=index&a=lists&catid=22">[ 重新查询 ]</a></p>

      <div class="s-2">

        <div class="advance-search" >

          <div class="bd_top_list advance-search-box"> <span class="bd_top_list_span">国家：</span>

            <ul>

              <a class="bd_top_list_a" data-type="country_id" data-value="0" href="javascript:;">全部</a> <a class="bd_top_list_b" data-type="country_id" data-value="1" href="javascript:;">美国</a> <a class="bd_top_list_b" data-type="country_id" data-value="2" href="javascript:;">英国</a> <a class="bd_top_list_b" data-type="country_id" data-value="3" href="javascript:;">加拿大</a> <a class="bd_top_list_b" data-type="country_id" data-value="4" href="javascript:;">澳大利亚</a> <a class="bd_top_list_b" data-type="country_id" data-value="5" href="javascript:;">新加坡</a> <a class="bd_top_list_b" data-type="country_id" data-value="6" href="javascript:;">香港</a>

            </ul>

            <div style="margin-top: 20px;"> <span class="bd_top_list_span">排名：</span> <span class="max-ranking" data-options="201"></span> <span class="min-ranking" data-options="1"></span>

              <ul>

                <div class="rk">

                  <div class="slider-bar-start">1名</div>

                  <div class=" slider-bar-end">201名</div>

                  <div class="ui-rangeSlider ui-rangeSlider-noArrow" id="range-slider" data-start="1" data-end="201" style="width: 408px; margin-left: 35px; position: relative;">

                    <div style="position: absolute; width: 408px;" class="ui-rangeSlider-container">

                      <div style="position: absolute; top: 0px; left: 0px; width: 396px;" class="ui-rangeSlider-innerBar"></div>

                      <div class="ui-rangeSlider-bar" style="position: absolute; top: 0px; width: 408px; left: 0px;"></div>

                      <div class="ui-rangeSlider-handle ui-rangeSlider-leftHandle" style="position: absolute; top: 0px; left: 0px;">

                        <div class="ui-rangeSlider-handle-inner"></div>

                      </div>

                      <div class="ui-rangeSlider-handle ui-rangeSlider-rightHandle" style="position: absolute; top: 0px; left: 390px;">

                        <div class="ui-rangeSlider-handle-inner"> </div>

                      </div>

                    </div>

                  </div>

                </div>

              </ul>

            </div>

            <div style="clear:both;height:10px;"></div>

            <span class="bd_top_list_span">学位：</span>

            <ul>

              <a class="bd_top_list_b" data-type="degree" data-value="0" href="javascript:;">全部</a> <a class="bd_top_list_b" data-type="degree" data-value="1" href="javascript:;">本科</a> <a class="bd_top_list_b" data-type="degree" data-value="2" href="javascript:;">硕士</a> <a class="bd_top_list_b" data-type="degree" data-value="3" href="javascript:;">博士</a>

            </ul>

            <div style="clear:both;height:10px;"></div>

            <span class="bd_top_list_span">专业：</span>

            <ul style="padding:0px 12px;width:85%" class="major-item">

              <?php



                 pc_base::load_sys_class('form', '', 0);



           $list=pc_base::load_model('school_data_model');



               $list1=pc_base::load_model('professional_data_model');



           $where="professional_pid='0'"; 



           $data_professional = $list1->listinfo($where,'id asc',$_GET['page'],$pages = '30');



                 ?>

              <?php 



    foreach ($data_professional as $k_professional => $v_professional){  



    ?>

              <li><a class="bd_top_list_c bd_top_list_cb major-item-a" data-type="first_id" data-value="<?php echo $v_professional[id]?>" href="javascript:;"><?php echo $v_professional[content]?>（<?php echo jiamiannum($v_professional[id])?>个项目）</a>

                <ul>

                  <li><a class="bd_top_list_c bd_top_list_cb" data-type="parent_id" data-value="<?php echo jiamianall($v_professional[professional_id])?>" href="javascript:;">所有（<?php echo jiamiannum($v_professional[id])?>个项目）</a></li>

                  <?php 



          pc_base::load_sys_class('form', '', 0);



      $list=pc_base::load_model('school_data_model');



      $list1=pc_base::load_model('professional_data_model');



      $where="professional_pid='$v_professional[id]'";  



      $data_direction = $list1->listinfo($where,'id asc',$_GET['page'],$pages = '30');



      



            foreach ($data_direction as $k_direction => $v_direction){  

  //print_r($v_direction[id]); 

    ?>

                  <li><a class="bd_top_list_c bd_top_list_cb" data-type="parent_id" data-value="<?php echo $v_direction[professional_id]?>" href="javascript:;"><?php echo $v_direction[content]?>（<?php echo jiamiannum2($v_direction[professional_id]);?>个项目）</a></li>

                  <?php } ?>

                </ul>

              </li>

              <?php } ?>

            </ul>

          </div>

        </div>

        <div class="advance-search-box">

          <input value="搜索" name="reset_btn" class="home-index-btn" type="button" onclick="window.location.href='#top'">

        </div>

        <div class="clear"></div>

      </div>

      <?php include template("content","gundong"); ?> 

      

      <!--第三部分-->

      

      <div class="s-3" id="schoolList"> </div>

      

      <!--第四部分-->

      

      <div class="s-4" id="tuijiancon">

     

      </div>

      <div class="clear"></div>

    </div>

    

    <!--右侧-->

    

    <div class="s-right"> <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"get\" data=\"op=get&tag_md5=cf14cfce9d32dcd3370acb2378eecbdc&sql=SELECT+%2A+FROM+qu_page+where+catid%3D29\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}pc_base::load_sys_class("get_model", "model", 0);$get_db = new get_model();$r = $get_db->sql_query("SELECT * FROM qu_page where catid=29 LIMIT 20");while(($s = $get_db->fetch_next()) != false) {$a[] = $s;}$data = $a;unset($a);?>

      

      <?php $n=1; if(is_array($data)) foreach($data AS $key => $val) { ?>

      

      <?php echo $val['content'];?>

      

      <?php $n++;}unset($n); ?>

      

      <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?> </div>

    <div class="clear"></div>

  </div>

  <div class="clear"></div>

</div>



<!--尾部版权--> 



<?php include template("content","bot"); ?> 



<!--遮罩层--> 



<?php include template("content","login"); ?> <script type="text/javascript" src="/style/js/jquery-1.8.3.min.js"></script> 

<script type="text/javascript" src="/style/js/search.js"></script><!--搜索--> 



<script type="text/javascript" src="/style/js/cover.js"></script><!--遮罩层--> 



<script type="text/javascript" src="/style/js/jquery-ui-1.js"></script><!--滑块---> 



<script type="text/javascript" src="/style/js/jQAllRangeSliders-min.js"></script> 

<script type="text/javascript" src="/style/js/list.js"></script><!--文本加背景多选--> 



<script type="text/javascript" src="/style/js/jquery.SuperSlide.js"></script><!--消息滚动--> 



<script type="text/javascript">



jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,delayTime:700});



</script> 

<script type="text/javascript">



$(".xxbox").each(function() {



	var d     = false,



		_this = $(this),



		$li   = _this.find(".nrbox ul li");



		$s    = _this.find(".gd");



	



	$li.each(function(i) {



		i>3&&$(this).attr("name","b").hide();



	});



	



	$s.click(function() {



		!d?($li.show(),d=true,$(this).text("收起")):(_this.find("li[name='b']").hide(),d=false,$(this).text("查看更多"));



	});



	



});



</script> 

<script type="text/javascript">



var country = new Array();



var country=$("a[data-type='country_id']");



var range=$("#range-slider");



   //国家和学位和专业



$(function() {



	 Exec_select_old();

     //Ituijian() ;



    $(document).on({     



    click: function() {



      Exec_select();



    },



    },"a[data-type='country_id'],a[data-type='degree'],.major-item");











    $(document).on({     



    click: function() {



      rank();



        Exec_select(); 



    },



    },"#rank");











    $(document).on({     



    click: function() {



      recommend();



        Exec_select(); 



    },



    },"#recommend");











 //排名



 $(document).on({



    mouseup: function() {



            Exec_select();       



    },



    },"#range-slider");

















});



















function Exec_select() {



            //国家



            var country_ids = new Array();



            $("a[data-type='country_id'][class='bd_top_list_a']").each(function() {



              country_ids.push($(this).attr("data-value"));



            });    



            //学历



            var degree_ids = new Array();



            $("a[data-type='degree'][class='bd_top_list_a']").each(function() {



              degree_ids.push($(this).attr("data-value"));



            }); 



        //排名



        var rank_left=$('.ui-rangeSlider-leftLabel .ui-rangeSlider-label-value').text();



        var rank_right=$('.ui-rangeSlider-rightLabel .ui-rangeSlider-label-value').text();







       //专业



            var professional_ids = new Array();



            $(".major-item .bd_top_list_a").each(function() {



              professional_ids.push($(this).attr("data-value"));



            }); 



            var professional_fangxiang_ids = new Array();



            $(".major-item li ul li .bd_top_list_c_hover").each(function() {



              professional_fangxiang_ids.push($(this).attr("data-value"));



            }); 



















var paixu_rank=$('#rank').attr('val');



var paixu_recommend=$('#recommend').attr('val');







      $.post("/index.php?m=content&c=selectSchoolApi&a=selectSchool",{country_ids:country_ids,degree_ids:degree_ids,rank_left:rank_left,rank_right:rank_right,professional_ids:professional_ids,professional_fangxiang_ids:professional_fangxiang_ids,paixu_rank:paixu_rank,paixu_recommend:paixu_recommend},function(data) {   



           $('#schoolList').html(data);



      });







}







function Exec_select_old() {



            //国家



            var country_ids = new Array();



            $("a[data-type='country_id'][class='bd_top_list_a']").each(function() {



              country_ids.push($(this).attr("data-value"));



            });    



            //学历



            var degree_ids = new Array();



            $("a[data-type='degree'][class='bd_top_list_a']").each(function() {



              degree_ids.push($(this).attr("data-value"));



            }); 



        //排名



        var rank_left=$('.ui-rangeSlider-leftLabel .ui-rangeSlider-label-value').text();



        var rank_right=$('.ui-rangeSlider-rightLabel .ui-rangeSlider-label-value').text();







       //专业



            var professional_ids = new Array();



            $(".major-item .bd_top_list_a").each(function() {



              professional_ids.push($(this).attr("data-value"));



            }); 



            var professional_fangxiang_ids = new Array();



            $(".major-item li ul li .bd_top_list_c_hover").each(function() {



              professional_fangxiang_ids.push($(this).attr("data-value"));



            }); 



















var paixu_rank=$('#rank').attr('val');



var paixu_recommend=$('#recommend').attr('val');







      $.post("/index.php?m=content&c=selectSchoolApi&a=selectSchool",{country_ids:country_ids,degree_ids:degree_ids,rank_left:rank_left,rank_right:rank_right,professional_ids:professional_ids,professional_fangxiang_ids:professional_fangxiang_ids,paixu_rank:paixu_rank,paixu_recommend:paixu_recommend,



        type:'<?php echo $_GET['type'];?>',keyword:'<?php echo $_GET['keyword'];?>'},function(data) {   



           $('#schoolList').html(data);



      });







}























function rank(){



//按照学校排名排序



var paixu_rank=$('#rank').attr('val');







//按照学校排名排序if判断











if(paixu_rank==0){



  $('#rank').attr('val','1');//由没有排序到有排序



  $('#rank').attr('class','active');



}else{



  $('#rank').attr('val','0');



  $('#rank').attr('class','');







}



}











function recommend(){



//按照学校排名排序



var paixu_recommend=$('#recommend').attr('val');







//按照学校排名排序if判断











if(paixu_recommend==0){



  $('#recommend').attr('val','1');//由没有排序到有排序



  $('#recommend').attr('class','active');



}else{



  $('#recommend').attr('val','0');



  $('#recommend').attr('class','');







}



}







</script> 

<script>



function repage(url)



{



  if(typeof url == 'undefined') url='/index.php?m=content&c=selectSchoolApi&a=selectSchool&page=<?php echo $_GET['page'];?>';



 



 



	//国家



            var country_ids = new Array();



            $("a[data-type='country_id'][class='bd_top_list_a']").each(function() {



              country_ids.push($(this).attr("data-value"));



            });    



            //学历



            var degree_ids = new Array();



            $("a[data-type='degree'][class='bd_top_list_a']").each(function() {



              degree_ids.push($(this).attr("data-value"));



            }); 



        //排名



        var rank_left=$('.ui-rangeSlider-leftLabel .ui-rangeSlider-label-value').text();



        var rank_right=$('.ui-rangeSlider-rightLabel .ui-rangeSlider-label-value').text();







       //专业



            var professional_ids = new Array();



            $(".major-item .bd_top_list_a").each(function() {



              professional_ids.push($(this).attr("data-value"));



            }); 



            var professional_fangxiang_ids = new Array();



            $(".major-item li ul li .bd_top_list_c_hover").each(function() {



              professional_fangxiang_ids.push($(this).attr("data-value"));



            }); 



















var paixu_rank=$('#rank').attr('val');



var paixu_recommend=$('#recommend').attr('val');







      $.post(url,{country_ids:country_ids,degree_ids:degree_ids,rank_left:rank_left,rank_right:rank_right,professional_ids:professional_ids,professional_fangxiang_ids:professional_fangxiang_ids,paixu_rank:paixu_rank,paixu_recommend:paixu_recommend,



        type:'<?php echo $_GET['type'];?>',keyword:'<?php echo $_GET['keyword'];?>'},function(data) {   



           $('#schoolList').html(data);



      });







	



	



}



$(function(){



    $(document).on({     



    click: function() {



         repage(this.href);



    return false;



    },



    },".pages a");

})



</script>





<script>







	

$(function(){

	Ituijian() ;

	$(document).on({

		click: function() {

			Ituijian();

			

			},

    },"#tuijian_icon");

});

	





function Ituijian() {

	$.post("/index.php?m=content&c=tuijian&a=init",{},function(data) {   



           $('#tuijiancon').html(data);



      });

}



	

</script> 



</body>

</html>

