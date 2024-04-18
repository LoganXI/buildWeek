// QUIZ GAME!
/*
REGOLE:
/ L'utente dovrà indovinare un certo numero di domandeThe player must guess correctly a certain amount of questions
/ Ogni risposta corretta gli darà 1 punto
/ Le domande possono avere risposte multiple o singole (true/false)
/ Al termine del quiz l'utente dovrà poter vedere il suo punteggi
DOMANDE:
/ Le domande possono essere ottenute da questo URL ( http://bit.ly/strive_QUIZZ ) o puoi scriverne di tue
/ Possono essere composte di boolean multipli (true / false
TIPS:
/ Usa una variabile globale per registrare il punteggio dell'utente
/ Crea una variabile "questionNumber" per tenere traccia del numero (o posizione) della domanda presentata all'utente
/ Quando "questionNumber" è maggiore delle domande disponibili, a quel punto l'applicazione dovrà mostrare il punteggio
/ Comincia salvando le domande in una variabile (o reperiscile dall'URL fornito usando AJAX e fetch)
/ Parti con l'implementazione semplice, poi passa agli extra e ad abbellire l'interfaccia 
/ Fai test completi: controlla la console periodicamente per verificare che non ci siano errori e che il flusso di dati sia quello che ti aspett
EXTRA:
/ Dai un feedback sulla risposta al momento del click (corretta o sbagliata)
/ Visualizza una domanda alla volta in sequenza piuttosto che tutte assieme in forma di lista
/ Permetti all'utente di selezionare la difficoltà del quiz prima di iniziare e il numero di domande che desidera ricevere.
( Se hai implementato l'applicazione usando l'URL fornito, puoi ottenere i dati che ti servono in modo semplice, 
usando query parameters in questo modo: https://opentdb.com/api.php?amount=10&category=18&difficulty=easy e modificarne il numero di domande e difficoltà )
*/
/* NON DIMENTICARE...
  di fare commit & push del codice regolarmente sulla tua repository GitHub e di condividerla con i tuoi colleghi
*/
const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

// TIPS:
// SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
// Per ogni domanda, crea un container e incorporale tutte all'interno. 
// Crea poi dei radio button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// con le risposte corrette e incorrette come opzioni
// (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale) 
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile
// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀

// window.onload = function () {
//     document.getElementById("foot").innerHTML = `<p>QUESTION <span id="index">1</span> <span class="purple"> / 10</span></p>`;
//     renderQuestionAndAnswers(1);


// };
window.onload = function () {
    // Get the current URL
    const currentUrl = window.location.href;

    // Check which HTML file is loaded based on the URL
    if (currentUrl.includes("pagina2.html")) {
        // Code specific to index.html
        document.getElementById("foot").innerHTML = `<p>QUESTION <span id="index">1</span> <span class="purple"> / 10</span></p>`;
        renderQuestionAndAnswers(1);
        updateTimer();
    } else if (currentUrl.includes("pagina3.html")) {
        clearInterval(timerInterval);

    } else if (currentUrl.includes("pagina4.html")) {
        clearInterval(timerInterval);

        const stars = document.querySelectorAll(" #stars ion-icon"); // Seleziona tutti gli elementi <ion-icon> con l'id "stars" e li assegna alla variabile stars

        console.log(stars);

        stars.forEach((star, index1) => {  // Per ogni stella nell'array stars, aggiunge un listener per l'evento di click

            star.addEventListener("click", () => {
                console.log(index1);
                stars.forEach((star, index2) => {          // Per ogni stella nell'array stars, esegue le seguenti operazioni
                    console.log(index2)
                    index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")  // Verifica se l'indice della stella cliccata è maggiore o uguale all'indice della stella corrente
                    // Se vero, aggiunge la classe "active" alla stella, altrimenti rimuove la classe "active"
                })
            })
        });

    }
    // Add more conditions for other HTML files as needed...
};
/* Timer! */

const totalTime = 30; // Ad esempio, 30 seconds
const progress = document.querySelector('.timer-circle-progress');
const label = document.querySelector('.secondi');
const updateInterval = 1000;
let totalRadius = 360;
let circ = (46 * 2) * Math.PI;// utilizzo il raggio preso dal html e sommo meta dello spessore del circle per avere un totale dello spazio
const increment = circ / totalTime;
let timeLeft = totalTime;

function updateTimer() {
    progress.style.strokeDashoffset = totalRadius;

    // circ = circ - increment;
    totalRadius = totalRadius - increment;
    label.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        label.textContent = 'Tempo scaduto';
        if (domandaAtt === quanty) {
            setTimeout(() => {

                window.location.href = "pagina3.html";
                clearInterval(timerInterval);

                // Avvia il nuovo timer
            }, 1000);
        } else {
            setTimeout(() => {
                domandaAtt++;
                renderQuestionAndAnswers(domandaAtt);
                timeLeft = totalTime; // Reimposta il tempo per la nuova domanda
                timerInterval = setInterval(updateTimer, updateInterval); // Avvia il nuovo timer
                totalRadius = 360;
                progress.style.strokeDashoffset = totalRadius;
            }, 1000);
        }
    }
}



// Aggiorna il timer iniziale
//updateTimer();

// Avvia il timer
var timerInterval = setInterval(updateTimer, updateInterval);

/* Domande */

function pickRandomQuestion() {
    const indice = Math.floor(Math.random() * questions.length);

    const question = questions[indice];
    questions.splice(indice, 1);
    return question;
}
const quanty = questions.length
localStorage.setItem('domande', quanty);
var corrette = 0;
var domandaAtt = 1;
// Function to render question and answers
function renderQuestionAndAnswers(numDomanda) {
    domandaAtt = numDomanda;
    document.getElementById("foot").innerHTML = `<p>QUESTION <span id="index">${numDomanda}</span> <span class="purple"> / 10</span></p>`;
    const questionContainer = document.getElementById("question");
    const answersContainer = document.getElementById("answers");
    const question = pickRandomQuestion();
    // Display question
    questionContainer.textContent = question.question;
    // Display answers
    answersContainer.innerHTML = "";

    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    allAnswers.sort(() => Math.random() - 0.5); // Shuffle answers
    allAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn")
        button.textContent = answer;
        button.addEventListener("click", () => {
            clearInterval(timerInterval);
            if (answer === question.correct_answer) {
                alert("Correct!");
                corrette++;
                console.log(corrette);
            } else {
                alert("Incorrect!");
            }
            if (numDomanda === quanty) {
                localStorage.setItem('correct', corrette);
                window.location.href = "pagina3.html";

            } else {

                renderQuestionAndAnswers(numDomanda + 1);
            }
            setTimeout(() => {
                timerInterval = setInterval(updateTimer, updateInterval); // Avvia il nuovo timer
                
                totalRadius = 360;
                progress.style.strokeDashoffset = totalRadius;
                timeLeft = 30;
            },30);

             // Render next question after answering
        });
        answersContainer.appendChild(button);
    });
}

// Initial rendering


//******************************************************  script pagina 2 end inizio*/
var correctAnswers = localStorage.getItem('correct');

const chartData = {
    labels: ['risposte sbagliate', 'risposte corrette'],
    data: (function inputData(correctAnswers) {
        let tot = localStorage.getItem('domande')
        let correct = correctAnswers;
        let uncorrect = tot - correct;
        var result = [uncorrect, correct]

        document.getElementById('correct-percentual').innerHTML = `${correct * 100 / tot}%`
        document.getElementById('un-result').innerHTML = `${uncorrect * 100 / tot}%`

        document.getElementById('span-correct').innerHTML = `${correct}`

        document.getElementById('span-totw').innerHTML = `${tot}`

        document.getElementById('span-wrong').innerHTML = `${uncorrect}`

        document.getElementById('span-totc').innerHTML = `${tot}`

        if (correct >= 6) {
            document.getElementById('text-inner-chart').innerHTML =
                `
            <h1 class='headingText'>Congratulation!</h1>      
            <p class='subtitleText azzure'>You passed the exam.</p>
            <p class='descriptionText'>We'll send you the certificate in few minutes. Check you email (including promotions / spam folder)</p>    
            `
        }
        if (correct == 5) {
            document.getElementById('text-inner-chart').innerHTML =
                `
            <h1 class='headingText'>Oh crap!</h1>      
            <p class='subtitleText azzure'>You almost did it.</p>
            <p class='descriptionText'>You probably deserve a 6 or major score, but that is not what happened.<br>Just try next time</p>    
            `
        }
        if (correct < 5) {
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


//****************************************** fine pagina 3 inizio pagina 4 */

