$(window).on("load", function(){

    // 풀메뉴
    $(".background, .submenu").hide();

    $("nav > ul > li").hover(function(){
        $(".background, .submenu").stop().slideDown(500);
    }, 
    function(){
        $(".background, .submenu").stop().slideUp(500);
    })

    // 좌우슬라이드
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


    // 팝업
    $("#pop").hide();

    $(".notice").addClass("layerPopup");
    $(".layerPopup").on("click", function(){
        $("#pop").fadeIn();
    })
    $(".close").on("click", function(){
        $("#pop").fadeOut();
    })

});