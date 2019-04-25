$(function(){
	//初始化fullpage组件
	//1.设置每一个屏幕的背景颜色
	//2.设置屏幕内容的对齐方式，默认是垂直居中的，需改成顶部对齐
	//3 设置指示器，点容器
	//4监听进入某一屏的时候用事件或者回调函数afterlode
	$(".container").fullpage({
		//配置参数，当然用css也可以做到，但是不方便
		sectionsColor:["#fadd67","#84a2d4","#ef674d","#ffeedd","#d04759","#84d9ed","#8ac060"],
		verticalCentered:false,
		//设置指示器
		navigation:true,
		//回调函数afterLode
		afterLoad:function (link,index) {
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index-1).addClass('now');
        },
        //离开某一个页面的时候触发
        onLeave:function(index,nextIndex,direction){
        	if(index==2 && nextIndex==3){
        		//当前是从第2页到第3页
        		$(".section").eq(index-1).addClass("leaved");
        	}else if (index==3 && nextIndex==4){
                //当前是从第三屏到第四屏
                $(".section").eq(index-1).addClass("leaved");
            }else if (index==5 && nextIndex==6){
                //当前是从第五屏到第六屏
                $(".section").eq(index-1).addClass("leaved");
                $(".screen06 .box").addClass("show");
            }else if (index==6 && nextIndex==7){
                // 当前是第6页到第七页的时候
                $(".screen07 .text").addClass("show");
                $(".screen07 .star img").each(function(i,item){
                    $(this).delay(i*0.5*1000).fadeIn();

                });

            }

        },
    

        //点击更多切换下一页，最好在组件初始完毕或者插件内容渲染完毕
        //可以使用afterRender回调函数，页面结构生成后的回调函数
        afterRender:function(){

        	$(".more").on("click",function(){
        		$.fn.fullpage.moveSectionDown();//jquery中封装插件方法采用$.fn的方式,表示向下滚动之意
        	});

            //当第四屏的购物车动画结束之后执行收获地址的动画
            $(".screen04 .cart").on("transitionend",function(){
                $(".screen04 .address").show().find("img:last").fadeIn(1000);
                $(".screen04 .text").addclass("show")


            });

            //第8屏的功能
            //1.手要跟着鼠标移动
            //2.点击再来一次重置动画跳回第一页
            $(".screen08").on("mousemove",function(e){
                $(this).find(".hand").css({
                    //鼠标的坐标给我们的手
                    left:e.clientX-190,
                    top:e.clientY-20
                });
            }).find(".again").on("click",function(){
                    //点击再来一次重置动画回第一次
                    //需要清除所有加类做动画的方式，这是清除类的方式
                    $(".now .leaved .show").removeClass("now").removeClass("leaved").removeClass("show");
                    //这是清除以下两种做动画的方式
                    //加CSS属性，后果是加一个style属性
                    //用jquery方法 show()和fadeIn(),后果同样是加了一个style属性
                    $(".content[style]").removeAttr("style");
                    //最后跳回第一次
                    $.fn.fullpage.moveTo(1);//跳回第一页


               //js的链式调用，这里的this还是screen08
            });
        },
        //配置参数，鼠标滚动的速度，其实是时间
        scrollingSpeed:1000//设置为页面切换的时间1000毫秒，默认为700毫秒
	});
});//jquery函数初始化



