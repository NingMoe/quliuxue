/**
 * 项目页面相关处理
 * @Date: 2014/07/28
 */

if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun/*, thisArg*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}

$(function () {
    var mouse_on = false;
    
    $(".major-item-a").mouseover(function () {
        if ($(this).parent().find("ul>li").size() == 0) {
            return ;
        }

        $(".major-item ul").hide();

        $(this).parent().find("ul").fadeIn(100);
        $(this).parent().find("ul").css({
            top: $(this).offset().top + 30
        });

    }).mouseout(function () {
        var obj = $(this).parent().find("ul");
        
        var t = setInterval(function () {
            if (mouse_on) return ;
                               
            obj.hide();
            if (t) clearInterval(t);
        }, 500);
        
    });

    $(".major-item ul").hover(function() {
        mouse_on = true;
    }, function () {
        mouse_on =false;
    });



    var update_first_id = function (first_id, remove) {
        if (arguments.length <= 1) remove = false;
        
        var source_value = $(String("#searchForm2 [name={name}]").replace('{name}', "first_id")).val();
        source_value = String(source_value);
        var source_value_arr = source_value.split(',');

        //below code compatible ie8
        if (typeof source_value_arr == "string" && source_value_arr != "") {
            source_value_arr = [source_value_arr];
        }

        var source_value_arr = source_value_arr.filter(function (a) {
            if (a == "" || a == 0) return false;
            else return a;
        });

        
        if (remove == false) source_value_arr.push(first_id);
        source_value_arr = $.unique(source_value_arr);

        if (remove == true) {
            var new_value_arr = [];
            $(source_value_arr).each(function (index, item) {
                if (item != first_id) {
                    new_value_arr.push(item);
                }
            });

            source_value_arr = new_value_arr;
        }

        $(String("#searchForm2 [name={name}]").replace('{name}', 'first_id')).val(source_value_arr.join(","));
    };
    
   

    //处理表单相关
    $(".bd_top_list ul a").click(function () {
        if ($(this).data("type") == "first_id") return false;

        var source_value = $(String("#searchForm2 [name={name}]").replace('{name}', $(this).data("type"))).val();
        source_value = String(source_value);
        var source_value_arr = source_value.split(',');

        //below code compatible ie8
        if (typeof source_value_arr == "string" && source_value_arr != "") {
            source_value_arr = [source_value_arr];
        }

        var source_value_arr = source_value_arr.filter(function (a) {
            if (a == "" || a == 0) return false;
            else return a;
        });

        source_value_arr = $.unique(source_value_arr);
        
        var class_selected = "bd_top_list_a";
        var class_no_selected = "bd_top_list_b";
        if ($(this).hasClass("bd_top_list_c") || $(this).hasClass("bd_top_list_c_hover")) {
            class_selected = "bd_top_list_c_hover";
            class_no_selected = "bd_top_list_cb";
        }
        
        
        if ($(this).hasClass(class_no_selected)) {
            if ($.inArray(String($(this).data("value")), source_value_arr) === -1) {
                source_value_arr.push($(this).data("value"));
            }

            if ($(this).data("value") == "" || $(this).data("value") == 0) {
                source_value_arr = [];
                if ($(this).data("type") == "parent_id") {
                    $(this).parent().siblings().find("a").removeClass(class_selected).addClass(class_no_selected);

                    $(this).parent().parent().parent().find("a").eq(0).addClass("bd_top_list_a");

                    update_first_id($(this).parent().parent().parent().find("a").eq(0).data("value"));
                } else {
                    $(this).siblings().removeClass(class_selected).addClass(class_no_selected);
                }
                
            } else {
                if ($(this).data("type") == "parent_id") {
                    $(this).parent().siblings().first().find("a").removeClass(class_selected).addClass(class_no_selected);

                    $(this).parent().parent().parent().find("a").eq(0).addClass("bd_top_list_a");

                    update_first_id($(this).parent().parent().parent().find("a").eq(0).data("value"), true);
                } else {
                    $(this).siblings().first().removeClass(class_selected).addClass(class_no_selected);
                }
            }
            
            $(String("#searchForm2 [name={name}]").replace('{name}', $(this).data("type"))).val(source_value_arr.join(","));
            $(this).removeClass(class_no_selected).addClass(class_selected);
        } else if ($(this).hasClass(class_selected)) {
            if ($.inArray(String($(this).data("value")), source_value_arr) !== -1) {
                var new_value_arr = [];
                $(source_value_arr).each(function (index, item) {
                    if (item != $(this).data("value")) {
                        new_value_arr.push(item);
                    }
                }.bind(this));

                source_value_arr = new_value_arr;
            }

            if ($(this).data("value") != "" && $(this).data("value") != 0) {
                
            }
            
            //$(this).parent().siblings().first().find("a").removeClass(class_selected).addClass(class_no_selected);
 
            

            $(String("#searchForm2 [name={name}]").replace('{name}', $(this).data("type"))).val(source_value_arr.join(","));
            $(this).removeClass(class_selected).addClass(class_no_selected);

            if ($(this).data("type") == "parent_id") {
                console.log("." + class_selected, $(this).parent().find("." + class_selected));
                
                if ($(this).parent().parent().find("." + class_selected).size() == 0) {
                    $(this).parent().parent().parent().find("a").eq(0).removeClass("bd_top_list_a");
                }

                update_first_id($(this).parent().parent().parent().find("a").eq(0).data("value"), true);
            }
        }

        if ($(".home-index-btn").size() == 0) {
            $("#searchForm2").submit();
        }
    });

    $("#searchForm2 [name=reset_btn]").click(function () {
        $(".bd_top_list ul a").each(function () {
            if ($(this).hasClass("bd_top_list_a") || $(this).hasClass("bd_top_list_c_hover")) {
                $(this).trigger("click");
            }
        });

        $("#searchForm2 input[name=start]").val('');
        $("#searchForm2 input[name=end]").val('');
    });
    
    $("#range-slider").bind("valuesChanging", function(e, data){
        //console.log("Something moved. min: " + data.values.min + " max: " + data.values.max);

        //$(".slider-bar-start").html(parseInt(data.values.min) + '名');
        //$(".slider-bar-end").html(parseInt(data.values.max) + '名');

        $("#searchForm2 input[name=start]").val(parseInt(data.values.min));
        $("#searchForm2 input[name=end]").val(parseInt(data.values.max));
    });

    $("#range-slider").bind("userValuesChanged", function(e, data) {
        $("#searchForm2 input[name=start]").val(parseInt(data.values.min));
        $("#searchForm2 input[name=end]").val(parseInt(data.values.max));

        if ($(".home-index-btn").size() == 0) {
            $("#searchForm2").submit();
        }
    });

    
    $("").ready(function () {
        $("#range-slider").rangeSlider({
            arrows:false, 
            //valueLabels : 'hide',
            bounds: {min: $(".min-ranking").data().options, max: $(".max-ranking").data().options},
            defaultValues: {
                min : $("#range-slider").data("start"),
                max : $("#range-slider").data("end")
            }
        });
    });
    
});

