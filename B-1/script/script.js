$(window).on("load", function(){
    
    // 그룹메뉴 ==================================
    $("ul.submenu").hide();
    $("nav > ul > li").hover(function(){
        $("ul.submenu").stop().slideDown(300);
    }, function(){
        $("ul.submenu").stop().slideUp(300);
    });

    // 좌우슬라이드 ==============================
    let currentIndex = 0;
    $(".slideList").append($(".slideImg").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".slideList").animate({marginLeft : -currentIndex * 100 + "%"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slideList").animate({marginLeft : 0}, 0);
                currentIndex = 0;
            }, 700)
        }
    }, 3000)

    // 탭메뉴 ==============================
    $("ul.gallery").hide();

    $("h2").on("click", function(){
        $(this).addClass("on").siblings("h2").removeClass("on");
        $(".noticeGallery ul").hide(); $("h2.on+ul").show();
    });

    // 팝업 ==============================
    $("#pop").hide();

    $("ul.notice").first().addClass("layerPopup");
    $(".layerPopup").on("click", function(){
        $("#pop").fadeIn(300);
    })
    $(".close").on("click", function(){
        $("#pop").fadeOut(300);
    })
});