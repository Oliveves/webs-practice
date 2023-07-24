$(window).on("load", function () {

    // 그룹메뉴 ==============================================
    $(".submenu").hide();

    $("nav > ul > li").hover(function () {
        $(".submenu").stop().fadeIn(300);
    }, function () {
        $(".submenu").stop().fadeOut(300);
    })

    // 위아래슬라이드 ==========================================
    let currentIndex = 0;

    $(".slideList").append($(".slideImg").first().clone(true));
    // ㄴ 끝나면 다시 첫번째 이미지부터 시작하기

    setInterval(function () {
        currentIndex++;
        $(".slideList").animate({ marginTop: -currentIndex * 300 + "px" }, 600);

        if (currentIndex == 3) {
            setTimeout(function () {
                $(".slideList").animate({ marginTop: 0 }, 0);
                currentIndex = 0;
            }, 700)
        };
    }, 3000)

    // 탭메뉴 ================================================
    $("ul.gallery").hide();

    $("h2").on("click", function () {
        $(this).addClass("on").siblings("h2").removeClass("on")
        $(".noticeGallery ul").hide(); $(".on+ul").show();
    })

})

