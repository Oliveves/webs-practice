$(window).on("load", function(){
    //메뉴
    $(".background, .submenu").hide();
    $("nav > ul").hover(function(){
        $(".background, .submenu").stop().fadeIn(500);
    }, function(){
        $(".background, .submenu").stop().fadeOut(500);
    })


    //페이드 슬라이드
    $(".slideList").children("div:gt(0)").hide();

    let currentIndex = 0;
    
    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;
        $(".slideImg").eq(currentIndex).fadeOut(1200);
        $(".slideImg").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000)

    //탭메뉴
    $("ul.gallery").hide();

    $("h2").on("click", function(){
        $(this).addClass("on").siblings("h2").removeClass("on");
        $(".noticeGallery > ul").hide(); $(".on+ul").show();
    })

    //팝업
    $("#pop").hide()

    $("ul.notice > li").first().addClass("layerPopup");
    $(".layerPopup").on("click", function(){
        $("#pop").fadeIn();
    })
    $(".close").on("click", function(){
        $("#pop").fadeOut();
    })
    
});