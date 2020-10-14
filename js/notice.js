/* 공지사항 js*/

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
