$(window).on("load", function(){
    //메뉴
    $(".submenu").hide();

    $("nav > ul > li").hover(function(){
        $(this).find($(".submenu")).stop().slideDown();
    }, function(){
        $(this).find($(".submenu")).stop().slideUp();
    })

    //위아래슬라이드
    let currentIndex = 0;

    $(".slideList").append($(".slideImg").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".slideList").animate({marginTop : -currentIndex * $(".slideImg").height()}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slideList").animate({marginTop : 0}, 0);
                currentIndex = 0;
            }, 700)
        }
    }, 3000)

    //팝업
    $("#pop").hide();
    $(".notice > ul > li").first().on("click", function(){
        $("#pop").fadeIn();
    })
    $(".close").first().on("click", function(){
        $("#pop").fadeOut();
    })
});