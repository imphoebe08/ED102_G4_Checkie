$(function(){
    var i = 0;
    function move_box(){
        var atBox_top = $(".atBox").offset().top;
        var move_right = $(".atBox_Class>a").width()
        ,win_scroll = $(window).scrollTop(),
        hWin=$(window).height(),atClassTitle_top=$(".atClassTitle").offset().top;
        
        if(win_scroll>atBox_top - 0.5*hWin && i==0){
        $(".atBox").animate({scrollLeft:move_right*0.5},1000)
        i++;
        };
        if(win_scroll>atClassTitle_top - 0.5*hWin){
            var dis = win_scroll-0.2*hWin-atClassTitle_top;
            $(".atClassTitle-content-pic_img").css("transform",`translateX(${dis*0.8}px)`);
            $(".atClassTitle-content-pic_ColorBlock").css("transform",`translateX(${dis*0.6}px)`);
        }
    }



    $(window).scroll(function(){
        move_box();
    })

})