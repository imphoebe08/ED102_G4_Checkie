let vm = new Vue({
    el: "#app",
    data: {
        screenWidth: window.innerWidth,
        csGender: [],
        csPosition: [],
        csProblem: [],
        slideBool: true,
        countCards: 10,
    },
    mounted() {
        window.onresize = () => {
            this.screenWidth = window.innerWidth;
        };
    },
    methods: {
        cleanSelect() {
            this.csGender = [];
            this.csPosition = [];
            this.csProblem = [];
        },
        slideToggle() {
            let csMain = document.getElementsByClassName("csMain")[0];
            if (this.slideBool) {
                csMain.classList.add("slideIn");
                csMain.classList.remove("slideOut");
                this.slideBool = !this.slideBool;
            } else {
                csMain.classList.remove("slideIn");
                csMain.classList.add("slideOut");
                this.slideBool = !this.slideBool;
            }
        }
    }
});


(function () {

    let ctx = document.getElementsByClassName("myChart");

    let datas = {
        labels: ["Coding", "Swimming", "Eating", "Cycling", "Sleeping"],
        datasets: [{
            label: "分數",
            data: [60, 40, 50, 52, 75],
        }]
    };

    let option = {
        legend: {
            display: 0,
            labels: {
                fontColor: "rgb(255, 99, 132)"
            }
        },
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    };

    for (let i = 0; i < ctx.length; i++) {
        new Chart(ctx[i].getContext("2d"), {
            type: "radar",
            data: datas,
            options: option,
        });
    }

})();

$(document).ready(function () {
    let divWith = $(".csCounselor-cards").width();
    let liWidth = $("li.csCounselor-card").width() + 102;
    let liLength = $("li.csCounselor-card").length;
    $("ul.csCounselor-gallery").width(`${liWidth * liLength}`);
    let ulWidth = $("ul.csCounselor-gallery").width();
    let centerChild = Math.ceil(liLength / 2);
    $(`li.csCounselor-card:nth-child(${centerChild})`).addClass("bigger");

    function resetGallery() {
        if (liLength % 2 == 0) {
            $("ul.csCounselor-gallery").stop().animate({
                left: `${-0.5 * ulWidth + 0.5 * divWith + 0.5 * liWidth}`
            });
        } else {
            $("ul.csCounselor-gallery").stop().animate({
                left: `${-0.5 * ulWidth + 0.5 * divWith}`
            });
        }

        $('li.csCounselor-card').removeClass("bigger");
        $(`li.csCounselor-card:nth-child(${centerChild})`).addClass("bigger");
    }
    resetGallery();

    $(window).resize(function () {
        divWith = $(".csCounselor-cards").width();
        liWidth = $("li.csCounselor-card").width() + 102;
        $("ul.csCounselor-gallery").width(`${liWidth * liLength}`);
        ulWidth = $("ul.csCounselor-gallery").width();
        resetGallery();
    });

    $("#pre").click(function () {
        currentLeft = $(".csCounselor-gallery").css("left");
        currentLeft = parseInt(currentLeft);
        if (-currentLeft < 0) {
            $(".csCounselor-gallery").animate({
                left: 0.5 * divWith - 0.5 * liWidth
            });
            $('li.csCounselor-card').removeClass("bigger");
            $('li.csCounselor-card:first-child').addClass("bigger");
        } else {
            $(".csCounselor-gallery").animate({
                left: currentLeft + liWidth
            });
            $(".bigger").prev().addClass("bigger");
            $(".bigger").next().removeClass("bigger");
        }
    });
    $("#next").click(function () {
        currentLeft = $(".csCounselor-gallery").css("left");
        currentLeft = parseInt(currentLeft);
        if (ulWidth + currentLeft < divWith) {
            $(".csCounselor-gallery").animate({
                left: -ulWidth + 0.5 * divWith + 0.5 * liWidth
            });
            $('li.csCounselor-card').removeClass("bigger");
            $('li.csCounselor-card:last-child').addClass("bigger");
        } else {
            $(".csCounselor-gallery").animate({
                left: currentLeft - liWidth
            });
            $(".bigger").next().addClass("bigger");
            $(".bigger").prev().removeClass("bigger");
        }
    });
});


(function () {
    let jsList = document.getElementsByClassName('js-list-toggle');
    let jsItem = document.getElementsByClassName('js-item-toggle');
    for (let i = 0; i < jsList.length; i++) {
        jsList[i].addEventListener('click', function () {
            $(jsItem[i]).slideToggle();
        });
    }
})();