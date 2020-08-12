(function () {
    let ctx = document.getElementById("myChart").getContext("2d");
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
    let myChart = new Chart(ctx, {
        type: "radar",
        data: datas,
        options: option,
    });
})();

(function () {
    let jsList = document.getElementsByClassName('js-list-toggle');
    let jsItem = document.getElementsByClassName('js-item-toggle');
    for (let i = 0; i < jsList.length; i++) {
        jsList[i].addEventListener('click', function () {
            $(jsItem[i]).slideToggle();
        });
    }
})();