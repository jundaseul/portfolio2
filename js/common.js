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







$(function () { //////////// jQB //////////////////////
    //console.log("로딩완료");




    /* 메뉴 ******************************************************************************/

    // 메뉴햄버거버튼 클릭시 메뉴창 보이기
    $(".menubtn").click(function () {
        $("#menu").fadeIn(500);


        $("body").css({
            overflowY: "hidden"
        });
    }); // click ///////////////////////


    // 햄버거버튼 클릭시 메뉴창 숨기기
    $(".cbtn").click(function () {
        $("#menu").fadeOut(500);

        $("body").css({
            overflowY: "auto"
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
        console.log("순번:" + idx);

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

}); ///////////// jQB ///////////////////////////////
/////////////////////////////////////////////////////






$(function () { //////////// jQB //////////////////////
    console.log("로딩완료");
    
    /*탑버튼*/

    $(window).scroll(function (e) {

        // 탑버튼위치값(top:70%)
        var tbpos = $(window).height() * 0.7;
        console.log("70%값:" + tbpos);

        // 현재 스크롤 위치값(세로스크롤)
        var scTop = $(this).scrollTop();
        //console.log("위치:" + scTop);

        // 1.스크롤위치가 200px 미만일때
        if (scTop < 200) {

            // 버튼숨기고 처음위치로
            $("#tbtn").hide().css({
                top: tbpos + "px"
            }); /// css ///////

        } //// if ////////////////////
        // 2.스크롤위치가 200px 이상일때
        else {

            // 버튼보이고 위치이동하기
            $("#tbtn").show().stop()
                .animate({
                    top: (tbpos + scTop) + "px"
                }, 400, "easeOutCirc");

        } //// else //////////////////


    }); //////////////// scroll //////////////////////////////////////////////


    /// 탑버튼 클릭시 맨위로 이동하기 ////
    $("#tbtn").click(function () {
        click_sts = 1; //스크롤잠금
        $("html,body").animate({
            scrollTop: "0px"
        }, 800, "easeInOutQuint", function () {
            click_sts = 0; //해제   
        }); /// animate /////

    }); ////////// click ///////////




}); ///////////// jQB ///////////////////////////////
/////////////////////////////////////////////////////
