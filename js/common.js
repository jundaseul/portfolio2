/* 공통사항 js*/


/////////// 스크롤 전역변수 /////////////////////////////////////////////

//1. 페이지번호
var pno = 0;
//2. 전체페이지 수
const totnum = 3;
// const는 변수 var와 달리 변경불가한 상수를 말한다.
//3. 광스크롤방지
var psts = 0; //(0-허용, 1-불허용)

/////////////////////////////////////////////////////////////////



/*모바일일 때  ********************************/
var mob = 0;
if ($(window).width() < 800) mob = 1;
console.log("모바일?" + mob);


/*
태블릿일 때
var tab = 0;
if ($(window).width() < 1200) tab = 1;
console.log("태블릿?" + tab);
*/



$(function () { //////////// jQB //////////////////////
    //console.log("로딩완료");




    /* 메뉴 ******************************************************************************/

    // 메뉴햄버거버튼 클릭시 메뉴창 보이기
    $(".menubtn").click(function () {
        $("#menu").fadeIn(500);


        $("body").css({
            //overflowY: "hidden"
        });
    }); // click ///////////////////////


    // 햄버거버튼 클릭시 메뉴창 숨기기
    $(".cbtn").click(function () {
        $("#menu").fadeOut(500);

        $("body").css({
            //overflowY: "auto"
        });
    }); // click //////////////////////


    /************************************** 메뉴 호버시 배경 바꾸기 ******************************************************/

    var bgi = [
        "images/menubg_1.jpg",
        "images/menubg_06.jpg",
        "images/menubg_3.jpg",
        "images/menubg_5.jpg"
    ];

    $(".menu_bg li").each(function (idx, ele) {
        $(ele).css({
            background: "url(" + bgi[idx] + ") no-repeat center/cover"
        });
    }); ///////////// each ///////////////


    $(".menu_txt li").mouseenter(function () {
        var idx = $(this).index();
        //console.log("순번:" + idx);

        $(".menu_bg li").eq(idx).addClass("on")
            .siblings().removeClass("on");

    }); ///////// mouseenter //////////////////



    /*로그인 ******************************************************************************/
    //login 클릭시 로그인팝업 나타나게

    $(document).on("click", ".gnblogin", function (e) {
        var target = $(this).attr("href");
        $(target).addClass("show");
    });

    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e) {
        var LayerPopup = $(".login_wrap");
        if (LayerPopup.has(e.target).length === 0) {
            LayerPopup.removeClass("show");
        }
    });



    /*장바구니 ******************************************************************************/
    // cart 클릭시 장바구니 팝업 나타나게
    $(".cartbtn").click(function () {
        $("#cart_wrap").fadeIn(300);

        $("body").css({
            overflowY: "hidden"
        });
    }); ///////////// click ////////////////////
    // 닫기 클릭시 장바구니 팝업 사라지게
    $(".cart_cbtn").click(function () {
        $("#cart_wrap").fadeOut(300);

        $("body").css({
            overflowY: "visible"
        });
    }); ///////////// click ////////////////////


    // 삭제하고 문구나타나게    
    if (".cart_list_box .delcheck:checked + .bullet_checkbox") {
        $(".delbtn").click(function () {
            $(".cart_list, .cart_list_box .delcheck:checked + .bullet_checkbox").hide().parent().find(".cart_msg").fadeIn(200).parent().next().find(".cartprice").text("KRW 0");
        });
    }



    /*모바일버전에서 로그인팝업창 띄우기*/
    $(".gnb_menu").click(function () {
        $('.login_wrap').fadeIn(300);
    });
    
    /*로그인팝업 닫기*/
    $('.logcbtn').click(function(){
       $('.login_wrap').fadeOut(300);
    });





}); ///////////// jQB ///////////////////////////////
/////////////////////////////////////////////////////



