$(window).on("load", function(){
    //위아래 슬라이드
    
    let currentIndex = 0;
    $(".slideList").append($(".slideImg").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".slideList").animate({marginTop : -currentIndex * 400 + "px"}, 600)

        if( currentIndex == 3){
            setTimeout(function(){
                $(".slideList").animate({marginTop : 0}, 0)
                currentIndex = 0;
            }, 700)
        }
    },3000)

    //탭메뉴
    $("ul.gallery").hide();

    $("h2").on("click", function(){
        $(this).addClass("on").siblings("h2").removeClass("on");
        $(".noticeGallery ul").hide(); $(".on+ul").show();
    })
})