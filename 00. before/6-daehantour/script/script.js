$(window).on("load", function(){

    //풀메뉴
    $(".background, nav > ul > li > ul").hide();

    $("nav > ul > li").hover(function(){
        $(".background, .submenu").stop().slideDown(500)
    }, function(){
        $(".background, .submenu").stop().slideUp(500)
    })



    //슬라이드위아래
    let currentIndex = 0;
    $(".slideList").append($(".slideImg").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".slideList").animate({marginTop : -currentIndex * 300 + "px"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slideList").animate({marginTop : 0}, 0);
                currentIndex = 0;
            }, 700)
        }
    }, 3000)

    //팝업
    $("#pop").hide();

    $(".notice > ul > li > a").first().addClass("layerPopup");
    $(".layerPopup").on("click", function(){
        $("#pop").fadeIn();
    });
    $(".close").on("click", function(){
        $("#pop").fadeOut();
    })

})