/* store js */


/* store ***************************************/


/*베스트 아이템*/

$(function () { //////////// jQB //////////////////////

    // 분류명
    var cat = "earring";


    // 이미지 설명글 셋팅하기 //
    var msg = {
        "earring": [
            {
                "상품코드": "MRC-ER04",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 178,000"
            },
            {
                "상품코드": "MRC-ER07",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 126,000"
            },
            {
                "상품코드": "MRC-ER02",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 110,000"
            },
            {
                "상품코드": "MRC-ER08",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 153,000"
            }
        ],
        "ring": [
            {
                "상품코드": "MRC-RS06",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 98,000"
            },
            {
                "상품코드": "MRC-RS01",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 115,000"
            },
            {
                "상품코드": "MRC-RS04",
                "컬렉션명": "'Object Collection'",
                "가격": "KRW 105,000"
            },
            {
                "상품코드": "MRC-RS07",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 75,000"
            }
        ],
        "bracelet": [
            {
                "상품코드": "MRC-BL08",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 138,000"
            },
            {
                "상품코드": "MRC-BL03",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 160,000"
            },
            {
                "상품코드": "MRC-BL07",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 126,000"
            },
            {
                "상품코드": "MRC-BL02",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 250,000"
            }
        ],
        "necklace": [
            {
                "상품코드": "MRC-NL07",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 82,000"
            },
            {
                "상품코드": "MRC-NL04",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 105,000"
            },
            {
                "상품코드": "MRC-NL01",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 144,000"
            },
            {
                "상품코드": "MRC-NL05",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 210,000"
            }
        ]

    };

    // 이미지 설명글 셋팅하기 //
    var msg2 = {
        "earring": [
            {
                "상품코드": "MRC-ER09",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 230,000"
            },
            {
                "상품코드": "MRC-ER08",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 153,000"
            },
            {
                "상품코드": "MRC-ER07",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 126,000"
            },
            {
                "상품코드": "MRC-ER06",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 98,000"
            },
            {
                "상품코드": "MRC-ER05",
                "컬렉션명": "'Object  Collection'",
                "가격": "KRW 142,000"
            },
            {
                "상품코드": "MRC-ER04",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 178,000"
            },
            {
                "상품코드": "MRC-ER03",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 163,000"
            },
            {
                "상품코드": "MRC-ER02",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 110,000"
            },
            {
                "상품코드": "MRC-ER01",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 152,000"
            }
        ],
        "ring": [
            {
                "상품코드": "MRC-RS07",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 75,000"
            },
            {
                "상품코드": "MRC-RS06",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 98,000"
            },
            {
                "상품코드": "MRC-RS05",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 118,000"
            },
            {
                "상품코드": "MRC-RS04",
                "컬렉션명": "'Object Collection'",
                "가격": "KRW 105,000"
            },
            {
                "상품코드": "MRC-RS03",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 168,000"
            },
            {
                "상품코드": "MRC-RS02",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 135,000"
            },
            {
                "상품코드": "MRC-RS01",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 115,000"
            }
        ],
        "bracelet": [
            {
                "상품코드": "MRC-BL08",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 138,000"
            },
            {
                "상품코드": "MRC-BL07",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 126,000"
            },
            {
                "상품코드": "MRC-BL06",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 196,000"
            },
            {
                "상품코드": "MRC-BL05",
                "컬렉션명": "'Object Collection'",
                "가격": "KRW 143,000"
            },
            {
                "상품코드": "MRC-BL04",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 135,000"
            },
            {
                "상품코드": "MRC-BL03",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 160,000"
            },
            {
                "상품코드": "MRC-BL02",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 250,000"
            },
            {
                "상품코드": "MRC-BL01",
                "컬렉션명": "'Object Collection'",
                "가격": "KRW 220,000"
            }
        ],
        "necklace": [
            {
                "상품코드": "MRC-NL07",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 82,000"
            },
            {
                "상품코드": "MRC-NL06",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 125,000"
            },
            {
                "상품코드": "MRC-NL05",
                "컬렉션명": "'Desert Collection'",
                "가격": "KRW 210,000"
            },
            {
                "상품코드": "MRC-NL04",
                "컬렉션명": "'Le Morocco Collection'",
                "가격": "KRW 105,000"
            },
            {
                "상품코드": "MRC-NL03",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 163,000"
            },
            {
                "상품코드": "MRC-NL02",
                "컬렉션명": "'Object Collection'",
                "가격": "KRW 98,000"
            },
            {
                "상품코드": "MRC-NL01",
                "컬렉션명": "'Fragments Collection'",
                "가격": "KRW 144,000"
            }
        ]

    };



    // 각 All박스 이미지 개수 셋팅
    var gabox = {
        "earring": 9,
        "ring": 7,
        "bracelet": 8,
        "necklace": 7
    };

    /// 1. 포토박스의 html 생성 및 초기화, 캡션글 넣기
    // 대상 : #store_gallery
    //for(시;한;증){


    /*////////////////////////////////
        함수명: gallSet
        기능: 갤러리를 셋팅함
    */ ////////////////////////////////
    var gallSet = function () {
        console.log("함수호출!");

        // 새로비우기
        $("#gallery").html("");

        for (var i = 0; i < msg[cat].length; i++) {
            $("#gallery").append(
                '<div class="photobox swiper-slide">' +
                '<img src="images/store/' + cat + '/' + (i + 1) + '.jpg" alt="' + cat + '">' +
                '<span class="cobox"></span>' +
                '<span class="txt">' +
                '<h4 class="txttitle">' + msg[cat][i]["상품코드"] + '</h4>' +
                '<p class="txtcollec">' + msg[cat][i]["컬렉션명"] + '</p>' +
                '<p class="txtprice">' + msg[cat][i]["가격"] + '</p>' +
                '</span>' +
                '</div>'
            );
        } /// for ////////////////////////////////////



        /// 2. 포토박스에 마우스 오버/아웃시 변경효과주기
        // 대상 : .photobox
        // hover(함수1,함수2)

        $(".photobox").hover(
            function () { // over
                //1. 반투명커버 사라지기
                $(".cobox", this).addClass("cover").stop().fadeIn(200);
                //2. 글자박스 올라오기
                $(".txt", this).stop().animate({
                    top: "82%"
                }, 300); /// animate //////
            },
            function () { // out
                //1. 반투명커버 불러오기
                $(".cobox", this).addClass("cover").stop().fadeOut(200);
                //2. 글자박스 내려가기
                $(".txt", this).stop().animate({
                    top: "100%"
                }, 300); /// animate //////
            }); ////////// hover ///////////////////


        //////////////////// All 셋팅

        // 새로비우기
        $(".gallery").html("");

        for (var i = 0; i < gabox[cat]; i++) {
            $(".gallery").append(
                '<div class="photobox">' +
                '<img src="images/store/' + cat + '/all/' + (i + 1) + '.jpg" alt="' + cat + '">' +
                '<span class="cobox"></span>' +
                '<span class="txt">' +
                '<h4 class="txttitle">' + msg2[cat][i]["상품코드"] + '</h4>' +
                '<p class="txtcollec">' + msg2[cat][i]["컬렉션명"] + '</p>' +
                '<p class="txtprice">' + msg2[cat][i]["가격"] + '</p>' +
                '</span>' +
                '</div>'
            );
        } /// for ////////////////////////////////////

        // 2. 포토박스에 마우스 오버/아웃시 변경효과주기
        // 대상 : .photobox
        // hover(함수1,함수2)

        $(".photobox").hover(
            function () { // over
                //1. 반투명커버 사라지기
                $(".cobox", this).addClass("cover").stop().fadeIn(200);
                //2. 글자박스 올라오기
                $(".txt", this).stop().animate({
                    top: "82%"
                }, 300); /// animate //////
            },
            function () { // out
                //1. 반투명커버 불러오기
                $(".cobox", this).addClass("cover").stop().fadeOut(200);
                //2. 글자박스 내려가기
                $(".txt", this).stop().animate({
                    top: "100%"
                }, 300); /// animate //////
            }); ////////// hover ///////////////////





    }; /////// gallSet 함수 ////////////
    //////////////////////////////////


    // 최초 갤러리 셋팅함수 호출!
    gallSet();


    /// 2. 포토박스에 마우스 오버/아웃시 변경효과주기
    // 대상 : .photobox
    // hover(함수1,함수2)

    $(".photobox").hover(
        function () { // over
            //1. 반투명커버 사라지기
            $(".cobox", this).addClass("cover").stop().fadeIn(200);
            //2. 글자박스 올라오기
            $(".txt", this).stop().animate({
                top: "82%"
            }, 300); /// animate //////
        },
        function () { // out
            //1. 반투명커버 불러오기
            $(".cobox", this).addClass("cover").stop().fadeOut(200);
            //2. 글자박스 내려가기
            $(".txt", this).stop().animate({
                top: "100%"
            }, 300); /// animate //////
        }); ////////// hover ///////////////////




    /*모든 아이템*/


    // 카테고리 메뉴 클릭시 변경하기 ///
    $(".store_cate a").click(function (e) {
        e.preventDefault();

        var txt = $(this).text();
        //alert(txt);

        // 1.큰제목 바꾸기
        $(".cate_active").text(txt);

        // 2. 이미지 셋팅하기
        // cat변수에 값 변경하기
        cat = txt;
        gallSet();

        // 3. 클릭된 메뉴는 숨기고 다른 메뉴는 보이게하기
        // class = "hdn"으로 처리
        $(this).parent().addClass("hdn")
            .siblings().removeClass("hdn");

        // 4. 새로 리스트를 for문으로 생성한 경우 
        //   기존 링크가 상실되기때문에 링크 셋팅함수를 
        // 다시한번 호출하여 링크 설정을 재로드한다!
        setLink();


    }); ///////// click //////////////
    /////////////////////////////////////////////////
    ////// 상품 아이템 클릭시 상세페이지로 이동하기 ///////
    // 대상: .photobox
    var setLink = function () {
        $(".photobox").click(function () {

            var tit = $(".txttitle", this).text();
            var col = $(".txtcollec", this).text().replace(/'/g, "");
            var pri = $(".txtprice", this).text();
            var isrc = "'" + $("img", this).attr("src") + "'";

            console.log("값:" + tit + "^" + col + "^" + pri + "^" + isrc);

            // 파라미터를 가지고 상세페이지로 이동!
            location.href = "prodpage.html?tit=" + escape(tit) + "&col=" + escape(col) + "&pri=" + escape(pri) + "&cat=" + cat + "&isrc=" + escape(isrc);


        }); //////////// click //////////////
    } ////////// setLink함수 ///////////////////////

    // 최초호출
    setLink();

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////








    var mob = 0;
    var winWidth;
    if ($(window).width() < 800) mob = 1;
    console.log("모바일?" + mob);

    mobSwiper();

    $(window).resize(function () {

        //window.location.reload(); -> 자동새로고침(단점:계속 위로올라가서 시작함)
        winWidth = $(window).width();
        //console.log(winWidth);
        winWidth < 800 ? mob = 1 : mob = 0;
        mobSwiper();
    });

    //$(".swiper-wrapper").load(window.location.href + ".swiper-wrapper");
    // 모바일일때 BEST ITEM 리스트에 Swiper 플러그인 적용하기!

    function mobSwiper() {




        // 모바일일때 BEST ITEM 리스트에 Swiper 플러그인 적용하기!
        if (mob) {
            console.log("모바일");
            $('.swiper-wrapper').css({
                flexWrap: "nowrap"
            });
            $('.swiper-slide').css({
                display: "flex",
                //            height: "50vh"
            });
            $('#gallery').css({
                width: "100%"
            });
            $('#gallery .photobox').css({
                margin: "0 auto"
            });

            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 2,
                spaceBetween: 15,
                //                navigation: { // 네비게이션 설정
                //                    nextEl: '.swiper-button-next', // 다음 버튼 클래스명
                //                    prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
                //                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,

                },
                /*
                                breakpoints: {
                                    640: {
                                        slidesPerView: "2",
                                        spaceBetween: "30",
                                    },
                                    768: {
                                        slidesPerView: "2",
                                        spaceBetween: "40",

                                    },
                                    1024: {
                                        slidesPerView: "3",
                                        spaceBetween: "30",
                                    },
                                    1240: {
                                        slidesPerView: "3",
                                        spaceBetween:"30",
                                    },
                                    1350: {
                                        slidesPerView: "4",
                                        spaceBetween:"20",
                                        pagination: {
                                            hiddenClass: 'swiper-pagination-hidden'
                                        },
                                        
                                    }
                                },*/

                breakpoints: {
                    600: {
                        slidesPerView: "2",
                        spaceBetween: "30"
                    },
                    768: {
                        slidesPerView: "2",
                        spaceBetween: "40",

                    },
                    1024: {
                        slidesPerView: "3",
                        spaceBetween: "30",
                    },
                    1350: {
                        watchOverflow: "boolean",
                        slidesPerView: "4",
                        spaceBetween: "20",

                        pagination: {
                            hiddenClass: 'swiper-pagination-hidden'
                        }
                    }
                },


            });


        } ////// if ////////////////////////////////////////


    };



    /*store 탑버튼*/
    $('.store_tbtn').click(function () {


        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.8초 동안 부드럽게 해당 위치로 이동함.
        $('html').animate({
            scrollTop: "0px"
        }, 800);

        ////// animate ////////




    }); ///////////////// click ////////////////////////////



    // 1600px에서 설명글박스 조절
    if ($(window).width() < 1600) {
        $('.txt').css({
            height: "22%"
        })
        $(".photobox").hover(
            function () { // over
                //1. 반투명커버 사라지기
                $(".cobox", this).addClass("cover").stop().fadeIn(200);
                //2. 글자박스 올라오기
                $(".txt", this).stop().animate({
                    top: "78%"
                }, 300); /// animate //////
            },
            function () { // out
                //1. 반투명커버 불러오기
                $(".cobox", this).addClass("cover").stop().fadeOut(200);
                //2. 글자박스 내려가기
                $(".txt", this).stop().animate({
                    top: "100%"
                }, 300); /// animate //////
            }); ////////// hover ///////////////////

    };



    //1350px에서 설명글박스 조절
    if ($(window).width() < 1350) {
        $('.txt').css({
            height: "24%"
        })
        $(".photobox").hover(
            function () { // over
                //1. 반투명커버 사라지기
                $(".cobox", this).addClass("cover").stop().fadeIn(200);
                //2. 글자박스 올라오기
                $(".txt", this).stop().animate({
                    top: "76%"
                }, 300); /// animate //////
            },
            function () { // out
                //1. 반투명커버 불러오기
                $(".cobox", this).addClass("cover").stop().fadeOut(200);
                //2. 글자박스 내려가기
                $(".txt", this).stop().animate({
                    top: "100%"
                }, 300); /// animate //////
            }); ////////// hover ///////////////////

    };


    //1024px에서 설명글박스 조절
    if ($(window).width() < 1024) {
        $('.txt').css({
            height: "23%"
        })
        $(".photobox").hover(
            function () { // over
                //1. 반투명커버 사라지기
                $(".cobox", this).addClass("cover").stop().fadeIn(200);
                //2. 글자박스 올라오기
                $(".txt", this).stop().animate({
                    top: "77%"
                }, 300); /// animate //////
            },
            function () { // out
                //1. 반투명커버 불러오기
                $(".cobox", this).addClass("cover").stop().fadeOut(200);
                //2. 글자박스 내려가기
                $(".txt", this).stop().animate({
                    top: "100%"
                }, 300); /// animate //////
            }); ////////// hover ///////////////////

    };



    //600px에서 설명글박스 조절
    if ($(window).width() < 600) {
        $('.txt').css({
            height: "24%"
        })
        $(".photobox").hover(
            function () { // over
                //1. 반투명커버 사라지기
                $(".cobox", this).addClass("cover").stop().fadeIn(200);
                //2. 글자박스 올라오기
                $(".txt", this).stop().animate({
                    top: "76%"
                }, 300); /// animate //////
            },
            function () { // out
                //1. 반투명커버 불러오기
                $(".cobox", this).addClass("cover").stop().fadeOut(200);
                //2. 글자박스 내려가기
                $(".txt", this).stop().animate({
                    top: "100%"
                }, 300); /// animate //////
            }); ////////// hover ///////////////////

    };





    //486px에서 설명글박스 조절
    if ($(window).width() < 486) {
        $('.txt').css({
            height: "23%"
        })
        $(".photobox").hover(
            function () { // over
                //1. 반투명커버 사라지기
                $(".cobox", this).addClass("cover").stop().fadeIn(200);
                //2. 글자박스 올라오기
                $(".txt", this).stop().animate({
                    top: "100%"
                }, 300); /// animate //////
            },
            function () { // out
                //1. 반투명커버 불러오기
                $(".cobox", this).addClass("cover").stop().fadeOut(200);
                //2. 글자박스 내려가기
                $(".txt", this).stop().animate({
                    top: "100%"
                }, 300); /// animate //////
            }); ////////// hover ///////////////////
    };




    /*store 탑버튼*/
    $('.store_tbtn').click(function () {

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.8초 동안 부드럽게 해당 위치로 이동함.
        $('html').animate({
            scrollTop: "0px"
        }, 800);

        ////// animate ////////

    }); ///////////////// click ////////////////////////////




}); ///////////// jQB ///////////////////////////////
/////////////////////////////////////////////////////
