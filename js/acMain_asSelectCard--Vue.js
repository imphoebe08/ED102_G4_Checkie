new Vue({
    el:"#acSelect",

    data: { 
        nums:6,
    },
    methods: {
        
    },
    
    computed: {
        addNum(){
            return this.nums;
        }
    },
    components:{
        "acSelectCard":{
            template: `
        <div class="acSelectCard">
                <a href="./acSelf.html">
                    <img src="./img/acMain/acCard.jpg">
                </a>
            <!-- 卡片時間 -->
            <div class="acSelectCard_text">
                <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                <p class="acSelectCard_time">2020-08-15（六）</p>
                <img class="acSelectCard-share_icon"src="./img/icon/share.png" alt="">
                <img class="acSelectCard-bookmark_icon"src="./img/icon/bookmark.png" alt="">
            </div>
            
            <!-- 卡片文字 -->
            <h6 class="acSelectCard_title"><a href="./ac_content.html">信念探索團：親密關係</a></h6>
            <p class="acSelectCard_category">#親密關係</p>
        </div>
            `,
        },
    },
})