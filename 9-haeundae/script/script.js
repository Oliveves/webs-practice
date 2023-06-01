$(window).on("load", function(){
//아코디언 메뉴
$("nav > ul > li > ul").hide();

$("nav > ul > li").hover(function(){
    $(this).find(".submenu").stop().slideDown(500);
},
function(){
    $(this).find(".submenu").stop().slideUp(500);
}
)

// 슬라이드 fade메뉴
$(".slideList").children("div:gt(0)").hide();

let currentIndex = 0;

setInterval(function(){
    let nextIndex = (currentIndex + 1) % 3;

    $(".slideImg").eq(currentIndex).fadeOut(1200);
    $(".slideImg").eq(nextIndex).fadeIn(1200);

    currentIndex = nextIndex;
}, 3000)


});
