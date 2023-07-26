$(window).on("load", function () {

    // 개별메뉴 =============================================
    $(".submenu").hide();

    $("nav > ul  > li").hover(function () {
        $(this).find(".submenu").stop().slideDown(300);
    }, function () {
        $(this).find(".submenu").stop().slideUp(300);
    });

    // 페이드슬라이드 =========================================
    $(".slideList").children("div:gt(0)").hide();
    // ㄴ첫이미지 다음것들은 전부 숨기기

    let currentIndex = 0;
    setInterval(function () {
        let nextIndex = (currentIndex + 1) % 3;

        $(".slideImg").eq(currentIndex).fadeOut(1200);
        $(".slideImg").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000)

    // 탭메뉴 ==============================================
    $("ul.gallery").hide();

    $("h2").on("click", function () {
        $(this).addClass("on").siblings("h2").removeClass("on");
        $(".noticeGallery ul").hide(); $("h2.on+ul").show();
    })

    // 팝업 ===============================================
    $("#pop").hide();
})