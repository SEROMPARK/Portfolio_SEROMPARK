$(function(){
	var mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
		},
		on: { // added
			init: function(){
				// console.log("initialized!!");
				accountText(this);
			},
			slideChange: function(){
				// console.log("slide changed!!");
				accountText(this);
			},
		},
	});

$(function(){
	var w;

	$(".tab").click(function(e){
		e.preventDefault();
		$("#mobile").addClass("active");
		$(".tab").addClass("open");
		$(".dim").addClass("active");
	});

	$(".dim").click(function(){
		$("#mobile").removeClass("active");
		$(".tab").removeClass("open"); 
		$(".dim").removeClass("active");
	});
});

	function accountText(obj){ // added
		// console.log(obj.slides.length, obj.activeIndex);
		$(".main_slider .account .current").text(obj.activeIndex+1);
		$(".main_slider .account .total").text(obj.slides.length);
	}
	$(".prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
	$(".play").click(function(e){
		e.preventDefault();
		mainSwiper.autoplay.start();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});

	var sub_swiper=new Swiper("#sub_slider .swiper-container", {
		slidesPerView: 1.5,
		spaceBetween: 12,
		pagination: {
			el: "#sub_slider .swiper-pagination",
			type: "progressbar"
		},
		navigation: {
			nextEl: "#sub_slider .swiper-button-next",
			prevEl: "#sub_slider .swiper-button-prev",
		},
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
		},
		on: {
			init: function(){
				var subSliderLength=$("#sub_slider .swiper-slide").length;
				$("#sub_slider .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_swiper.activeIndex;
				currentSlider+=1;
				$("#sub_slider .num").text(currentSlider);
			}
		}
	});

	$("#content2 .menu_list li").click(function(e){
		e.preventDefault();
		$("#content2 .menu_list li").removeClass("active");
		$(this).addClass("active");
	});

	

});