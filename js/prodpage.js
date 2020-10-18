//// product page JS - prodpage.js //////

// 값셋팅 변수
var tit; //타이틀
var col; //컬렉션
var pri; //가격
var cat; //구분
var isrc; //이미지경로


// 파라미터 받기 //
var pm = location.href; //url읽어오기


//2. 물음표가 있어야 자를 수 있으므로 이것을 체크한다!
// indexOf(문자열) 찾는 문자열순번 리턴하는 내장함수
// 만약 찾는 문자열이 없을 경우엔 -1을 리턴한다! 이것을 없는지 여부를 걸러냄
console.log("물음표체크:" + pm.indexOf("?"));

if (pm.indexOf("?") === -1) {
    // 물음표 파라미터 없이 들어온경우 첫페이지로 돌아가!
    location.href = "store.html";
} //// if ////////////////////




pm = pm.split("?")[1]; //?표뒤
pm = pm.split("&"); //?표뒤
console.log(pm);

// for in문(개수만큼 알아서 돈다)
// 지역변수 x에는 순번이 자동셋팅됨
for (var x in pm) {
    // 파라미터 이름
    var nm = pm[x].split("=");
    console.log(nm[0]);
    // 분류별 변수에 할당
    switch (nm[0]) {
        case "tit":
            tit = unescape(nm[1]);
            break;
        case "col":
            col = unescape(nm[1]);
            break;
        case "pri":
            pri = unescape(nm[1]);
            break;
        case "cat":
            cat = nm[1];
            break;
        case "isrc":
            isrc = unescape(nm[1]);
            break;
    } ///// switch case //////

} //// for in ///////



console.log("셋팅값:" + tit + "^" + col + "^" + pri + "^" + cat + "^" + isrc);




$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    // 텍스트
    var pdvt = $(".pdvt");
    console.log("개수:" + pdvt.length);

    // 이미지
    var pdvi = $(".pdv");
    console.log("개수:" + pdvi.length);

    // 1.텍스트 셋팅!(공통)
    pdvt.eq(0).text(col);
    pdvt.eq(1).text(col);
    pdvt.eq(2).text(tit);
    pdvt.eq(3).text(pri);


    // 2. 이미지셋팅(구분해야함!)

    var allow = ["MRC-ER04", "MRC-RS06", "MRC-BL08", "MRC-NL07"];
    var alw = 0;
    for (var x in allow) {
        // 허용하는 타이틀과 같으면 상태값을 1로 변경함!
        if (tit === allow[x]) alw = 1;
    } /////// forIn //////////////

    // 허용상태값 찍기
    console.log("허용?" + alw);


    // 풀셋팅 : 허용상태값이 1일때만 셋팅
    if (alw) {

        for (var i = 0; i < pdvi.length; i++) {
            var cbgi = pdvi.eq(i).css("background-image");
            cbgi = cbgi.replace("earring", cat);
            pdvi.eq(i).css({
                "background-image": cbgi
            });
            //console.log(pdvi.eq(i).css("background-image"));
        } /////// for /////////^////////////

    } //////// if ////////////////
    else { // 풀셋팅이 아닐경우
        pdvi.eq(0).css({
            "background-image": "url(" + isrc + ")"
        });
    } //////// else //////////////////////






    /*이미지 나타나게 하는 세팅 **********************************************************/

    var pos1, pos2, pos3, pos4, pos5, pos6, pos7;

    var initSet = function () {
        // 1번타겟
        $(".pImg2").css({
            top: "150px",
            opacity: "0",
            transition: "all 0.8s ease-out"
        }); //// css ///////////

        pos1 = $(".pImg2").offset().top;
        //console.log("1위치:" + pos1);



        // 2번타겟
        $(".pImg3").css({
            top: "150px",
            opacity: "0",
            transition: "all 0.8s ease-out"
        }); //// css ///////////

        pos2 = $(".pImg3").offset().top;
        //console.log("2위치:" + pos2);


        // 3번타겟
        $(".pImg4").css({
            top: "150px",
            opacity: "0",
            transition: "all 0.8s ease-out 0.1s"
        }); //// css ///////////

        pos3 = $(".pImg4").offset().top;
        //console.log("2위치:" + pos2);
        
        
        // 4번타겟
        $(".pImg5").css({
            top: "150px",
            opacity: "0",
            transition: "all 0.8s ease-out 0.5s"
        }); //// css ///////////

        pos4 = $(".pImg5").offset().top;
        //console.log("2위치:" + pos2);
        
        
        // 5번타겟
        $(".pImg6").css({
            top: "180px",
            opacity: "0",
            transition: "all 0.8s ease-out 0.3s"
        }); //// css ///////////

        pos5 = $(".pImg6").offset().top;
        //console.log("6위치:" + pos5);
        
                
        
        // 6번타겟
        $(".pImg7").css({
            top: "180px",
            opacity: "0",
            transition: "all 0.8s ease-out "
        }); //// css ///////////

        pos6 = $(".pImg7").offset().top;
        //console.log("6위치:" + pos6);
        
                     
        // 7번타겟
        $(".pImg8").css({
            top: "180px",
            opacity: "0",
            transition: "all 0.8s ease-out 0.5s"
        }); //// css ///////////

        pos7 = $(".pImg8").offset().top;
        //console.log("7위치:" + pos7);
        
        
        

    } /////////////////////////////////////////////////////////////////



    // 초기화함수 호출하기
    initSet();


    // 스크롤이벤트 함수
    $(window).scroll(function () {

        var scTop = $(this).scrollTop();
        //console.log("스크롤위치값:" + scTop);


        // 1번이미지
        if (scTop > pos1 - 800 && scTop < pos1 + 800) {
            // 1번 나타나게
            $(".pImg2").css({
                top: "0",
                opacity: "1"
            }); //// css ///////////

        }; //////// if //////////////////
        //        else { // 원위치
        //            $(".intro_side_tit").css({
        //                top: "0",
        //                opacity: 0
        //            });
        //        } /////// else //////////////////


        //2번이미지
        if (scTop > pos2 - 600 && scTop < pos2 + 600) {
            // 1번 나타나게
            $(".pImg3").css({
                top: "0",
                opacity: "1"
            }); //// css ///////////
        }; //////// if //////////////////
        
        
        //3번이미지
        if (scTop > pos3 - 600 && scTop < pos3 + 600) {
            // 1번 나타나게
            $(".pImg4").css({
                top: "0",
                opacity: "1"
            }); //// css ///////////
        }; //////// if //////////////////

        
        //4번이미지
        if (scTop > pos4 - 1000 && scTop < pos4 + 1000) {
            // 1번 나타나게
            $(".pImg5").css({
                top: "0",
                opacity: "1"
            }); //// css ///////////
        }; //////// if //////////////////

        
        
        //5번이미지
        if (scTop > pos5 - 600 && scTop < pos5 + 600) {
            // 1번 나타나게
            $(".pImg6").css({
                top: "0",
                opacity: "1"
            }); //// css ///////////
        }; //////// if //////////////////

        
        //6번이미지
        if (scTop > pos6 - 700 && scTop < pos6 + 700) {
            // 1번 나타나게
            $(".pImg7").css({
                top: "0",
                opacity: "1"
            }); //// css ///////////
        }; //////// if //////////////////

        
        
        //7번이미지
        if (scTop > pos7 - 700 && scTop < pos7 + 700) {
            // 1번 나타나게
            $(".pImg8").css({
                top: "0",
                opacity: "1"
            }); //// css ///////////
        }; //////// if //////////////////

        
        

    }); /////// scroll /////////////////////////////////////////

    
    
    
    
     /*prodpage 탑버튼*/
    $('.prod_tbtn').click(function () {


        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.8초 동안 부드럽게 해당 위치로 이동함.
        $('html').animate({
            scrollTop: "0px"
        }, 800);
           
        ////// animate ////////




    }); ///////////////// click ////////////////////////////

    
    



}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////





