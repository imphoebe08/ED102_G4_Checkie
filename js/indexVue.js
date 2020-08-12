    // vue
        
        // 關於我們
        new Vue({
            el:"#inAbout",
            
            data:{
                imgUrl:"./img/index/inAbout/rock.jpg",
                select: false,
                about_nowNum:0,
                about_Num2:1,
                about_Num3:2,
                about:[
                {area: '北', place: '臺北市大安區忠孝東路三段5樓之2',Weekdays:"星期一-星期五 10AM-10PM",Weekend:"星期六-星期日 10AM-9PM",tel:"02-1109-8885"},
                {area: '中', place: '台中',Weekdays:"星期二-星期五 11AM-10PM",Weekend:"星期六 10AM-9PM",tel:"04-1109-8885"},
                {area: '南', place: '高雄',Weekdays:"星期一-星期五 11AM-10PM",Weekend:"星期六-星期日 10AM-9PM",tel:"07-1109-8885"},
            ],
                    
                    
                
            },
            components:{
                "inabout-grid-line":{
                    template:`
                    <div class="inAbout-grid_line">
                        <div class="inAbout-line_1"></div>
                        <div class="inAbout-line_2"></div>
                    </div>
                    `,

                },
                "inabout-slide-grid":{
                    template:`
                    <div class="inAbout-slide_grid">
                    <a href="javascipr:void(0)" class="inAbout-grid_block">
                        <img src="./img/index/inAbout/rock.jpg" class="inAbout-grid_pic_1">
                    </a>
                    </div>
                    `,
                },
            },
            methods:{
                list(){
                    this.select=true;
                },
                changeAboutNum2(){
                    let nowNum = this.about_nowNum;
                    this.about_nowNum = this.about_Num2;
                    this.about_Num2 = nowNum;
                },
                changeAboutNum3(){
                    let nowNum = this.about_nowNum;
                    this.about_nowNum = this.about_Num3;
                    this.about_Num3 = nowNum;
                },
            }
        })
        // 活動
        new Vue({
            el:"#inAct",

            data: { 
                date: "",
            },
            methods: {
                
            },
            components:{
                "inact-item":{
                    template: `
                    <div class="inAct_item">
                                    <!-- 帶資料 -->
                        <a href="javascript:void(0)">
                            <img src="./img/index/inAct/image_1.jpg">
                        </a>
                        <div class="inAct_text">
                            <div class="inAct-top_text">
                                <div class="inAct-left_date">
                                    <div class="inAct-date_icon"></div>
                                    <!-- 帶資料 -->
                                    <div class="inAct-date_text">2020-08-14(五) ~ 2020-08-16(日)</div>  
                                </div>
                                <div class="inAct-icon_block">
                                    <a href="javascript:void(0)" class="inAct-icon_1"></a>
                                    <a href="javascript:void(0)" class="inAct-icon_2"></a>
                                </div>
                            </div>
                                    <!-- 帶資料 -->
                            <div class="inAct_title"><a href="javascript:void(0)">從陌生人到貴人，打造職涯路上的黃金人脈法則</a> </div>
    
                            <div class="inAct_location">
                                <div class="inAct-location_icon"></div>
                                    <!-- 帶資料 -->
                                <div class="inAct-location_text">台灣文創教育中心</div>
                            </div>
                        </div>
                    </div>
                         `,
                },
            },
        })