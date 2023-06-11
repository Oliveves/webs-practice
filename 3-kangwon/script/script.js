$(window).on("load", function(){

    //개별메뉴
    $(".submenu").hide();

    $("nav > ul > li").hover(function(){
        $(this).find(".submenu").stop().fadeIn(500);
    }, function(){
        $(this).find(".submenu").stop().fadeOut(500);
    })

    //fade슬라이드
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
        $(this).addClass("on").sibling("h2").removeClass("on");
        $(".noticeGallery ul").hide(); $(".on+ul").show();
    });

    //팝업
    $("#pop").hide();

    $("ul.notice > li").first().addClass("layerPopup");
    $(".layerPopup").on("click", function(){
        $("#pop").fadeIn();
    })
    $(".close").on("click", function(){
        $("#pop").fadeOut();
    })
});