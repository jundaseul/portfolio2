/* lookbook js */


/*룩북 상세페이지 이미지 플러그인 ********************************/
var mob = 0;
if ($(window).width() < 800) mob = 1;
console.log("모바일?" + mob);


$(function () { //////////// jQB //////////////////////
    console.log("로딩완료");

    var sldNum = 3;
    if (mob) {
        sldNum = 1;
        $(".swiper-slide").first().removeClass("tbx");
        $(".swiper-slide").last().remove();
    }

    console.log("개수:" + sldNum);

    new Swiper('.swiper-container', {

        slidesPerView: sldNum, // 동시에 보여줄 슬라이드 갯수
        spaceBetween: 20, // 슬라이드간 간격
        //slidesPerGroup: 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

        // 그룹수가 맞지 않을 경우 빈칸으로 메우기
        // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
        //loopFillGroupWithBlank: true,

        //loop: true, // 무한 반복

        // 스크롤바 설정하기
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

    });

}); ///////////// jQB ///////////////////////////////
/////////////////////////////////////////////////////

/*룩북 more 누르면 펼쳐지게 ********************************************/
$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    $(".detail").hide();

    $(".lbbtn_more").click(function () {
        $(".detail").slideDown(800, "easeInOutCirc");
        $("html,body").animate({
            scrollTop: $(window).height() + "px"
        }, 800, "easeInOutCirc");
    }); ///////// click ////////////


}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////


