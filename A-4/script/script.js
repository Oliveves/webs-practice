$(window).on("load", function () {

    // 풀메뉴 =============================================
    $(".background, .submenu").hide();

    $("nav > ul").hover(function () {
        $(".background, .submenu").stop().slideDown(300);
    }, function () {
        $(".background, .submenu").stop().slideUp(300);
    });

    // 페이드슬라이드 ========================================

    $(".slideList").children("div:gt(0)").hide();
    let currentIndex = 0;

    setInterval(function () {
        let nextIndex = (currentIndex + 1) % 3;

        $(".slideImg").eq(currentIndex).fadeOut(1200);
        $(".slideImg").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000);

    // 팝업 =============================================
    $("#pop").hide();

    $(".notice > ul > li").first().addClass("layerPopup");

    $(".layerPopup").on("click", function () {
        $("#pop").fadeIn(300);
    })
    $(".close").on("click", function () {
        $("#pop").fadeOut(300);
    })
})