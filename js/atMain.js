$(function(){
    var i = 0;
    function move_box(){
        var atBox_top = $(".atBox").offset().top;
        var move_right = $(".atBox_Class>a").width(),
        win_scroll = $(window).scrollTop(),
        hWin=$(window).height(),
        atClassTitle_top=$(".atClassTitle").offset().top;
        // var atCAC =$(".atClassAfter_content").offset().top;
        if(win_scroll>atBox_top - 0.5*hWin && i==0){
        $(".atBox").animate({scrollLeft:move_right*0.5},1000)
        i++;
        };
        if(win_scroll>atClassTitle_top - 0.5*hWin){
            var dis = win_scroll-0.2*hWin-atClassTitle_top;
            $(".atClassTitle-content-pic_img").css("transform",`translate(${dis*0.8}px,${dis*0.2}px)`);
            $(".atClassTitle-content-pic_ColorBlock").css("transform",`translate(${dis*0.6}px,${dis*0.1}px)`);
        };
        var CTB =$(".atClassAfter_content_block");
        CTB.each(function(){
            var this_top =  $(this).offset().top;
            var abc = $(this)
            if(win_scroll>this_top - 0.5*hWin){
                abc.addClass("show_ani");
                // $(".atClassAfter-content_pic").css({
                // clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)"
                // });
                // $(".atClassAfter-content-block_blank").css("transform","translateX(0)")
                // setTimeout(function(){
                //     $(".atClassAfter-content_text").css("opacity","1")
                // },1000)
            }
        })

        
        
    }



    $(window).scroll(function(){
        move_box();
    })

})