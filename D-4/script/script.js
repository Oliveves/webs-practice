$(window).on("load", function(){
    //풀메뉴
    $(".background, .submenu").hide();

    $("nav > ul").hover(function(){
        $(".background, .submenu").stop().fadeIn();
    }, function(){
        $(".background, .submenu").stop().fadeOut();
    })

    //페이드슬라이드
    currentIndex = 0;
    $(".slideList").children("div:gt(0)").hide();

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;
        $(".slideImg").eq(currentIndex).fadeOut(1200);
        $(".slideImg").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000)
})