const correctAnswers = 6;

const chartData = {
    labels: ['risposte sbagliate', 'risposte corrette'],
    data: (function inputData(correctAnswers) {
        let correct = correctAnswers;
        let uncorrect = 10 - correct;
        var result = [uncorrect, correct]

        document.getElementById('correct-percentual').innerHTML = `${correct * 10}%`
        document.getElementById('un-result').innerHTML = `${uncorrect * 10}%`

        document.getElementById('span-correct').innerHTML = `${correct}`
        document.getElementById('span-wrong').innerHTML = `${uncorrect}`

        if (correct >= 6) {
            document.getElementById('text-inner-chart').innerHTML =
            `
            <h1 class='headingText'>Congratulation!</h1>      
            <p class='subtitleText azzure'>You passed the exam.</p>
            <p class='descriptionText'>We'll send you the certificate in few minutes. Check you email (including promotions / spam folder)</p>    
            `
        }
        if (correct==5) {
            document.getElementById('text-inner-chart').innerHTML =
            `
            <h1 class='headingText'>Oh crap!</h1>      
            <p class='subtitleText azzure'>You almost did it.</p>
            <p class='descriptionText'>You probably deserve a 6 or major score, but that is not what happened.<br>Just try next time</p>    
            `
        }
        if (correct<5) {
            document.getElementById('text-inner-chart').innerHTML =
            `
            <h1 class='headingText'>What a mess bro!</h1>      
            <p class='subtitleText azzure'>You did not passed the exam.</p>
            <p class='descriptionText'>We'll send you a croissant in few minutes. Check you email (including promotions / spam folder)</p>    
            `
        }

        return result
    })(correctAnswers)
}

/*************************************  costruzione della chart (in questo caso 'doughnut')  *********************************************/
// setup block

const data = {

    labels: chartData.labels,
    datasets: [{
        data: chartData.data,
        hoverOffset: 40,
        borderWidth: 0,
        backgroundColor: ['rgba(194,18,141,255)', 'rgba(0,255,255,255)'],
    }
    ]
};

// config block

const config = {
    type: 'doughnut',
    data,
    options: {
        layout: {
            padding: 20
        },

        plugins: {
            legend: {
                display: false
            }
        },
        cutout: '70%'


    },


};

// render init block

const myChart = new Chart(
    document.getElementById('my-chart'),
    config
)
