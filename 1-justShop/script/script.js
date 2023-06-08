$(window).on("load", function(){
    //그룹메뉴
    $(".submenu").hide();

    $("nav > ul > li").hover(function(){
        $(".submenu").stop().fadeIn(500);
    }, 
    function(){
        $(".submenu").stop().fadeOut(500);
    })


    //위아래슬라이드

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
            
        };

    },3000);

    //탭메뉴
    $(".gallery").hide();

    $("h2").on("click", function(){
        $(this).addClass("on").siblings("h2").removeClass("on");
        $(".noticeGallery ul").hide(); $(".on+ul").show();
    });



    //팝업
    $("#pop").hide();

    $(".noticeGallery li").first().addClass("layerPopup");
    $(".layerPopup").on("click", function(){
        $("#pop").fadeIn();
    })
    $(".close").on("click", function(){
        $("#pop").fadeOut();
    })

})