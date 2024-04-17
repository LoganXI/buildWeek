const correctAnswers = 6;

function resultPerc (correctAnswers) {
    let correct = correctAnswers ;
    let uncorrect = 6 - correct ;

    const correctDiv = document.getElementsByClassName('.correctDiv');
    const wrongDiv = document.getElementsByClassName('.wrongDiv');


}

const chartData = {
    labels: ['risposte sbagliate', 'risposte corrette'],
    data: (function inputData(correctAnswers) {
        // var del tot di risposte
        
        let correct = correctAnswers ;
        let uncorrect = 6 - correct ;
        var result = [uncorrect, correct]
        return result
    })(correctAnswers)
}

/*  costruzione della chart (in questo caso a ciambella, ovvero, 'doughnut') */
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






/* 
Congratulations!
you passed the exam.

we'll send you the certificate
in few minutes.
Check you email (including
promotions / spam folder)
*/

