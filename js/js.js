$(function(){
    $("#skillbtn").on("click",function(){
        var position = $('#skills').offset(); // 위치값
        $('html,body').animate({ scrollTop : position.top }, 1000); // 이동
    }),
    $("#contentbtn").on("click",function(){
        var position = $('#content').offset(); // 위치값
        $('html,body').animate({ scrollTop : position.top }, 1000); // 이동
    }),
    $(".btnTop").on("click",function(){
        $('html,body').animate({ scrollTop : 0}, 1000); // 이동
    }),
    $(window).scroll(function(){
        var a = $(this).scrollTop();
        if(a >= $('#visual').height()){
            $('.btnTop').css("display", "flex");
        } else{
            $('.btnTop').css("display", "none");
        }
    });

});


