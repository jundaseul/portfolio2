/* 공지사항 js*/

/*풀페이지 플러그인 연결*/
$(function () { //////////// jQB //////////////////////
    console.log("연결됐니????????????????");

    
    
   
        $('#fullpage').fullpage({
            //anchors: ['page1', 'page2', 'footer'],
            scrollOverflow: false,
            autoScrolling: true,
            //scrollBar: true,
            scrollOverflow: false
        });
   
    
    $("#menu").find(".cbtn").click(function(){
       $("body").css({
           overflow:"hidden"
       }); 
        console.log("숨기기");
    });


}); ///////////// jQB ///////////////////////////////
/////////////////////////////////////////////////////




$(function(){ //////////// jQB //////////////////////
    
      
    
    /* 공지사항 ******************************************************************************/
    // +버튼 영역 클릭시 하단 설명 나타나게 하기  

    $(".notCont").click(function () {
        $(this).parent().next().slideToggle(300).prev().parent().siblings().find(".notAns").slideUp(300);
        
        /*var isrc = $(this).find(".pbtn img").attr("src");
        
        if (isrc === "images/minus.png") isrc = "images/plus.png";
        else isrc = "images/minus.png";
        $(this).find(".pbtn img").attr("src", isrc);
        
        */
        
        var isrc = $(this).find(".pbtn img").attr("src");
        console.log(isrc);
        
        if (isrc === "images/minus.png") isrc = "images/plus.png";
        else isrc = "images/minus.png";
        
       
        
        $(".notCont").find(".pbtn img").attr("src", "images/plus.png");

        
        $(this).find(".pbtn img").attr("src", isrc);
        
        
    }); //////// click /////////////

/*
$(this).next("p").slideToggle(500).siblings("p").slideUp(500);

*/
    
    
    //    $(".ncon1").click(function () {
    //        $(".nans1").slideToggle(300);
    //        $(this).find(".pbtn img").attr("src", "images/minus.png");
    //    }); //////// click /////////////
    //
    //
    //    $(".ncon2").click(function () {
    //        $(".nans2").slideToggle(300);
    //    }); //////// click /////////////
    //
    //    $(".ncon3").click(function () {
    //        $(".nans3").slideToggle(300);
    //    }); //////// click /////////////


}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////



$(function () { //////////// jQB //////////////////////




    // 탑버튼 클릭시 위로 올라가게
    $('#tbtn').click(function () {

        //var offset = $('.ban').offset();
        //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.8초 동안 부드럽게 해당 위치로 이동함.
        $.fn.fullpage.moveTo(1);
        ////// animate ////////

    }); ///////////////// click ////////////////////////////




}); ///////////// jQB ///////////////////////////////
/////////////////////////////////////////////////////
