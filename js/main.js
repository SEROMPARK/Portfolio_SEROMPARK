$(function(){
	// 1) 페이지 이동 관련
	var scrollT=0;
	var pageN=0;
	var targetY=0;
	var winHalf;
	var categoryFlag=false;
	var projectN=0;

	$(".global_controller li").eq(pageN).addClass("active");

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page1").offset().top-winHalf){
			pageN=0;
		}
		else if(scrollT <= $("#page2").offset().top-winHalf){
			pageN=1;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			pageN=2;
		}
		else if(scrollT <= $("#page4").offset().top-winHalf){
			pageN=3;
		}
		else{
			pageN=4;
		}
		console.log("pageN : "+pageN);

		$(".global_controller li").removeClass("active");
		$(".global_controller li").eq(pageN).addClass("active");
		$(".floating_menu li").removeClass("active");
		$(".floating_menu li").eq(pageN).addClass("active");

		if(pageN == 0){
			$(".logo, #gnb, .global_tabs, .global_controller, .contact_me").removeClass("dark");
			$(".essay a").removeAttr("style").removeClass("dimmed"); // <a href=""> :: 제대로 표현됩니다. // 0
		}
		else{
			if(pageN == 3){
				$(".essay a").hide(); // <a href="" style="display:none"> :: 안보입니다. // 3
			}
			else{
				$(".essay a").removeAttr("style").addClass("dimmed"); // <a href="" class="dimme"> // 2, 4
			}
			$(".logo, #gnb, .global_tabs, .global_controller, .contact_me").addClass("dark");
		}

		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
				$("#header").addClass("active");
			}
			else{
				$("#page"+pageN).addClass("active");

				if(pageN == 4){
					categoryFlag=true;
				}
			}
		}
	});

	// 2) 화면 크기 조정 관련
	$(window).resize(function(){
		winHalf=$(window).height()/2;
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	// 3) 탭 이동 관련
	$(".global_tabs").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".floating_menu").toggleClass("active");
	});
	$(".global_controller li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").animate({"scrollTop":targetY}, 300);
	});
	$(".floating_menu li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$(".global_tabs").removeClass("active");
		$(".floating_menu").removeClass("active");
		$("html").delay(400).animate({"scrollTop":targetY}, 300);
	});

	function mobileLink(){
		if(isMobile){
			$("a.project1").attr({href: "project1/mobile/index.html"});
		}
		else{
			$("a.project1").attr({href: "project1/pc/index.html"});
		}

		$("a.project2").attr({href: "project2/index.html"});
	}

	mobileLink();

	$(".project:first").addClass("active");

	$(".project .title_area").click(function(e){
		e.preventDefault();
		var project=$(this).parents(".project");
		console.log(projectN, project.index());

		if(projectN != project.index()){
			projectN=project.index();
			$("#project1").removeClass("active");
			project.addClass("active");

			var projectY=$(this).offset().top-60;
			$("html").animate({scrollTop:projectY}, 800);
		}
	});
});

	