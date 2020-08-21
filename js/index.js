$(function(){
    // 活動滾動視差 
    var win = $(window),
    hWin = win.height(),
    inAct = $("#inAct").offset().top,
    inArti =$(".inArti").offset().top,

    inAct_block_w =$(".inAct_block").width(),
    inAct_block_p = $(".inAct_block").css("paddingLeft"),
    inAct_body_w =$(".inAct_body").width(),
    // inAct_block 最多往左的距離
    distance = parseInt(inAct_block_w) - parseInt(inAct_body_w) + parseInt(inAct_block_p);
    if(win.width()>768){
        Scroll();
        win.scroll(function(){
            Scroll();
    })
    }

    // 判斷開不開js
    win.resize(function() {
        if(win.width()>768){
            Scroll();
            win.scroll(function(){
                Scroll();
        })
        }else{
            $(this).off("scroll");
        }
      });
        
    
    
    function Scroll(){
        var scroll = $(window).scrollTop(),
        // 現在滾動條變化
        scroll_distance = scroll - inAct,
        trs = (scroll_distance  / (inArti - inAct - hWin))*distance;
        if(scroll > inAct){
            $(".inAct_block").css("transform",`translateX(-${trs}px)`)
        }
    }
    //結束
})
    
    // <!-- about 輪播 -->
    $(function(){
        var i = 2;
        setInterval(function(){
            $(`.inAbout-right_block>div`).removeClass("inAbout-show")
            $(`.inAbout-right_block>div:nth-child(${i})`).addClass("inAbout-show")
            i++;
            if(i==3){
                i-=2;
            }
        },5000)
    })
    // <!-- 首頁輪播 -->
    $(function(){
        // ck字體特效
        $(".inBanner-logo>svg").removeClass("inBanner-hide_svg");
        // 飛入特效
        var timeline_1 = new TimelineMax();
        var timeline_2 = new TimelineMax();
        // 飛入
        // 第一個飛入後淡出
        timeline_1.from('.inBanner-fly_block:nth-child(1)', 2, {
        x: 500,
        y:500,
        opacity:0,
        ease: Power1.ease0ut,
        }).to('.inBanner-fly_block:nth-child(1)',0,{
            transition: "all 1s linear",
            clipPath:"polygon(0% 0%, 0 0%, 0 100%, 0% 100%)",
        });
        // 第二個飛入後淡出
        timeline_2.from('.inBanner-fly_block:nth-child(2)', 2, {
        x: -500,
        y:-500,
        opacity:0,
        ease: Power1.ease0ut,
        }).to('.inBanner-fly_block:nth-child(2)',0,{
            transition: "all 1s linear",
            clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",


        });

        TweenMax.to('.inBanner-fix_img', 1, {
        delay:2.2,
        opacity:1,
        });
    });
    // 圈圈背景變化
    $(function(){
        // 調圈圈顏色

        // inAct
        
    var t1 = TweenMax.to('.inBanner-circle', 2, {backgroundImage: "linear-gradient(135deg, #fddb92, #d1fdff)"});
    // 下面這個是大圈圈 因為有兩層 所以多寫一個css
    var t2 = TweenMax.to('.inBanner_bgImg>.inBanner-big_circle', 2, {backgroundImage: "linear-gradient(135deg, #fff, #fff), linear-gradient(135deg, #fddb92, #d1fdff)"});
        var controller = new ScrollMagic.Controller();
        var scene01 = new ScrollMagic.Scene({
            triggerElement: "#inAct",
            offset: 300,
            triggerHook: .5
        }).setTween([t1,t2])
        // debug用 不太重要 若要關掉 要連同cdn 一起關
        .addTo(controller);

        // inArti

    var t3 = TweenMax.to('.inBanner-circle', 2, {backgroundImage: "linear-gradient(135deg,  #e9defa, #fbfcdb)"});
    // 下面這個是大圈圈 因為有兩層 所以多寫一個css
    var t4 = TweenMax.to('.inBanner_bgImg>.inBanner-big_circle', 2, {backgroundImage: "linear-gradient(135deg, #fff, #fff), linear-gradient(135deg,  #e9defa, #fbfcdb)"});
        var scene02 = new ScrollMagic.Scene({
            triggerElement: "#inArti",
            offset: 0,
            triggerHook: .5
        }).setTween([t3,t4])
        // debug用 不太重要 若要關掉 要連同cdn 一起關
        .addTo(controller);

        // inCard

    var t5 = TweenMax.to('.inBanner-circle', 2, {backgroundImage: "linear-gradient(135deg,  #fff1eb,   #ace0f9)"});
    // 下面這個是大圈圈 因為有兩層 所以多寫一個css
    var t6 = TweenMax.to('.inBanner_bgImg>.inBanner-big_circle', 2, {backgroundImage: "linear-gradient(135deg, #fff, #fff), linear-gradient(135deg,  #fff1eb,   #ace0f9)"});
        var scene03 = new ScrollMagic.Scene({
            triggerElement: "#inCard",
            offset: 0,
            triggerHook: .5
        }).setTween([t5,t6])
        // debug用 不太重要 若要關掉 要連同cdn 一起關
        .addTo(controller);

    // inAbout
    
    var t7 = TweenMax.to('.inBanner-circle', 2, {backgroundImage: "linear-gradient(135deg,   #accbee,  #e7f0fd)"});
    // 下面這個是大圈圈 因為有兩層 所以多寫一個css
    var t8 = TweenMax.to('.inBanner_bgImg>.inBanner-big_circle', 2, {backgroundImage: "linear-gradient(135deg, #fff, #fff), linear-gradient(135deg,   #accbee,  #e7f0fd)"});
        var scene04 = new ScrollMagic.Scene({
            triggerElement: "#inAbout",
            offset: 0,
            triggerHook: .5
        }).setTween([t7,t8])
        // debug用 不太重要 若要關掉 要連同cdn 一起關
        .addTo(controller);


        // inCS
    
    var t9 = TweenMax.to('.inBanner-circle', 2, {backgroundImage: "linear-gradient(135deg,   #7DE2FC,  #B9B6E5)"});
    // 下面這個是大圈圈 因為有兩層 所以多寫一個css
    var t10 = TweenMax.to('.inBanner_bgImg>.inBanner-big_circle', 2, {backgroundImage: "linear-gradient(135deg, #fff, #fff), linear-gradient(135deg,   #7DE2FC,  #B9B6E5)"});
        var scene04 = new ScrollMagic.Scene({
            triggerElement: "#inCs",
            offset: 0,
            triggerHook: .5
        }).setTween([t9,t10])
        // debug用 不太重要 若要關掉 要連同cdn 一起關
        .addTo(controller);

        // 圈圈結束

    var card_t1 = new TimelineMax();

    card_t1.fromTo('.inCard_body>div', 1, {
        scale:0,
        rotationX: 200,
    },{scale:1,rotationX: 360,})
    // .fromTo('.inCard_body>div:nth-child(2)', .5, {
    //     scale:0,
    //     rotationX: 200,
    // },{scale:1,rotationX: 360,}).fromTo('.inCard_body>div:nth-child(3)', .5, {
    //     scale:0,
    //     rotationX: 200,
    // },{scale:1,rotationX: 360,}).fromTo('.inCard_body>div:nth-child(4)', .5, {
    //     scale:0,
    //     rotationX: 200,
    // },{scale:1,rotationX: 360,}).fromTo('.inCard_body>div:nth-child(5)', .5, {
    //     scale:0,
    //     rotationX: 200,
    // },{scale:1,rotationX: 360,});
    

    });