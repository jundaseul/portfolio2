/* contact js */


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



//////////// jQB //////////////////////
$(function () { 




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
