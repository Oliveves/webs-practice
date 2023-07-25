$(window).on("load", function(){
    //메뉴
    $(".submenu").hide();

    $("nav > ul > li").hover(function(){
        $(this).find($("ul")).stop().slideDown(500);
    }, function(){
        $(this).find($("ul")).stop().slideUp(500);
    });


    //반응형 - 좌우슬라이드

    let currentIndex = 0;

    $(".slideList").append($(".slideImg").first().clone(true));
    
    setInterval(function(){
        currentIndex ++;
        $(".slideList").animate({marginLeft : -currentIndex * $(".slideList").width()}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slideList").animate({marginLeft : 0}, 0);
                currentIndex = 0;
            }, 700)
        }
    }, 3000)

    //팝업
    $("#pop").hide();

    $(".notice ul li a").first().addClass("layerPopup");
    $(".layerPopup").on("click", function(){
        $("#pop").fadeIn();
    })
    $(".close").on("click", function(){
        $("#pop").fadeOut();
    })


})