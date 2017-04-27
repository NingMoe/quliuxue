<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><h1>本周热招院校<a id="tuijian_icon"><i class="icon-refresh"></i>换一批</a></h1>

   
<?php $n=1; if(is_array($data_hots)) foreach($data_hots AS $key => $val) { ?>
<div class="gdbox">
  <div class="imgbox"><a href="/index.php?m=school&c=show&id=<?php echo $val['id'];?>"><img src="<?php echo $val['logo'];?>" width="104" height="104" /></a></div>
  <div class="nrbox">
    <h2><a href="/index.php?m=school&c=show&id=<?php echo $val['id'];?>"><?php echo str_cut($val['cnname'],30);?></a></h2>
    <p><?php echo str_cut($val['enname'],25);?> <!--<?php echo str_cut(strip_tags($val[enname]),25);?> --></p>
    <ul>
      <li>大学排名：<span><?php echo $val['rank'];?></span></li>
      <li>托福成绩：<span><?php echo $val['toefl_scores'];?></span></li>
      <li>雅思成绩：<span><?php echo $val['ielts_score'];?></span></li>
    </ul>
    <div class="clear"></div>
  </div>
  <div class="anniu"><a href="/index.php?m=content&c=index&a=lists&catid=40">录取几率免费评估></a></div>
</div>
<?php $n++;}unset($n); ?>

 <div class="clear"></div>