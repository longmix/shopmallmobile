var myScroll,wx;
$(function(){
	
	$('#container').css({top:'50px'});
	var upIcon = $("#up-icon"),
		downIcon = $("#pullDown");
	myScroll = new IScroll('#container');
	myScroll.on("scroll",function(){
		if(this.y >= 50){
			if(!downIcon.hasClass("reverse_icon")) downIcon.addClass("reverse_icon").find('.pullDownLabel').html('释放可以刷新');
			return "";
		}else if(this.y < 50 && this.y > 0){
			if(downIcon.hasClass("reverse_icon")) downIcon.removeClass("reverse_icon").find('.pullDownLabel').html('下拉可以刷新');
			return "";
		}
	});

	
	var swiper = new Swiper('.swiper-container1', {
		autoplay: 5000,//可选选项，自动滑动
		pagination : '.swiper-pagination1'
	});
	var swiper = new Swiper('.swiper-container2', {
		autoplay: 5000,//可选选项，自动滑动
		pagination : '.swiper-pagination2'
	});

	var swiper = new Swiper('.swiper-container3 .swiper-slide', {
		freeMode:true,
		freeModeFluid:true,
		slidesPerView: 'auto',
		simulateTouch:false/*,
		centeredSlides: true*/
	});

	
	var swiper = new Swiper('.swiper-container4 .swiper-slide', {
		freeMode:true,
		freeModeFluid:true,
		slidesPerView: 'auto',
		simulateTouch:false/*,
		centeredSlides: true*/
	});
	
						
	var swiper = new Swiper('.swiper-container5', {
	    pagination: '.swiper-pagination5',
		slidesPerView: 3.5,
		paginationClickable: true,
		spaceBetween: 10,
		freeMode: true
	});
	
	var swiper = new Swiper('.swiper-container6', {
		pagination: '.swiper-pagination6',
		slidesPerView: 2.5,
		paginationClickable: true,
		spaceBetween: 10,
		freeMode: true
	});


});
