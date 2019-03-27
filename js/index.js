$(function(){
	//初始化fullpage组件
	//1.设置每一个屏幕的背景颜色
	//2.设置屏幕内容的对齐方式，默认是垂直居中的，需改成顶部对齐
	//3 设置指示器，点容器
	$(".container").fullpage({
		//配置参数，当然用css也可以做到，但是不方便
		sectionsColor:["#fadd67","#84a2d4","#ef674d","#ffeedd","#d04759","#84d9ed","#8ac060"],
		verticalCentered:false,
		//设置指示器
		navigation:true
	});
});//jquery函数初始化



