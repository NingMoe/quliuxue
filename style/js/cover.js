// JavaScript Document
   $(document).ready(function(){
      var bheight=document.body.clientHeight;
   $(".denglu").click(function(){
   $(".brg").css({ display: "block", height: $(document).height() });
   $(".float_login").css("display","block");
    return false;
   });
   $(".close").click(function(){
   $(".brg").css("display","none");
   $(".float_login").css("display","none");
   });
   //修改密码
   $(".gmm").click(function(){
   $(".brg").css({ display: "block", height: $(document).height() });
   $(".xgpassword").css("display","block");
   });
   $(".close").click(function(){
   $(".brg").css("display","none");
   $(".xgpassword").css("display","none");
   });
   //忘记密码
   $(".float_login .wjmm").click(function(){
   $(".brg").css({ display: "block", height: $(document).height() });
   $(".float_login").css("display","none");
   $(".wjpassword").css("display","block");
   });
   $(".close").click(function(){
   $(".brg").css("display","none");
   $(".wjpassword").css("display","none");
   });
   });


