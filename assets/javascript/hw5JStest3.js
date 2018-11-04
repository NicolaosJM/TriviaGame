var questionNumber =0;
var correctAnswers =0;
var wrongAnswers =0;
var answerSubmitted= "";
var timer = 0;


var questionsObject = [{
    questionVideo: "assets/images/question01.mp4",
    questionText: "What is the name of the missing element in the video question?",
    questionAnswers: ["Sn (Tin)", "Ti (Titanium)", "Ge (Germanium)", "I (Iodine)"],
    correctAnswer: "Ge (Germanium)",
    answerVideo: "assets/images/answer01.mp4"
}, {
    questionVideo: "assets/images/question02.mp4",
    questionText: "Part of the Manhattan Project, Chien-Shiung Wu helped develop methods to seperate which two isotopes of uranium?",
    questionAnswers: ["U-232 and U-237", "U-235 and U-238", "U-233 and U-235", "U-234 and U-239"],
    correctAnswer: "U-235 and U-238",
    answerVideo: "assets/images/answer02.mp4"
}, {
    questionVideo: "assets/images/question03.mp4",
    questionText: "The Glomma is the longest river in which European country?",
    questionAnswers: ["Ukraine", "Sweden", "Norway", "Germany"],
    correctAnswer: "Norway",
    answerVideo: "assets/images/answer03.mp4"

}, {
    questionVideo: "assets/images/question04.mp4",
    questionText: 'Which sea fish has its name derived from the Greek for "hollow spine"?',
    questionAnswers: ["Coelacanth", "Osteolepiforms", "Rhizodonts", "Panderichthys"],
    correctAnswer: "Coelacanth",
    answerVideo: "assets/images/answer04.mp4"
}, {
    questionVideo: "assets/images/question05.mp4",
    questionText: "Iodine-131 can be used for diagnosing and treating conditions associated with which gland that secretes hormones?",
    questionAnswers: ["Hypothalamus", "Thymus", "Pancreas", "Thyroid"],
    correctAnswer: "Thyroid",
    answerVideo: "assets/images/answer05.mp4"
}, {
    questionVideo: "assets/images/question06.mp4",
    questionText: "What is the short title by which the above painting is usually known?",
    questionAnswers: ["The Last Judgement", "The Creation of Adam", "Quis ut Deus?", "Saint Michael"],
    correctAnswer: "The Last Judgement",
    answerVideo: "assets/images/answer06.mp4"
}, {
    questionVideo: "assets/images/question07.mp4",
    questionText: "What is the short title by which the above painting is usually known?",
    questionAnswers: ["The Last Judgement", "The Creation of Adam", "Quis ut Deus?", "Saint Michael"],
    correctAnswer: "The Last Judgement",
    answerVideo: "assets/images/answer07.mp4"
}, {
    questionVideo: "assets/images/question08.mp4",
    questionText: "What is the short title by which the above painting is usually known?",
    questionAnswers: ["The Last Judgement", "The Creation of Adam", "Quis ut Deus?", "Saint Michael"],
    correctAnswer: "The Last Judgement",
    answerVideo: "assets/images/answer08.mp4"
}];

// $(document).ready(function () {
window.onload = function () {


    console.log(questionsObject);

    // $("#questionText").html(questionsObject[0].questionText);
    // document.getElementById("questionText").innerHTML = questionsObject[0].questionText;





    function countdown() {
        timer--;
        if (timer == 0) {
            timesUp();
        }
    };

    function questionNumberFunc() {
        questionNumber++;
        if (questionNumber >= 9) {
            endGame();
        }
    };

    function loadQuestion() {
        timer = 30;
        setInterval(countdown(), 1000);


        console.log(questionsObject[questionNumber].questionVideo);
        $("#videoSrcHtml").attr("src", questionsObject[questionNumber].questionVideo);
        $("#videoTagHtml").get(0).load();
        $("#videoTagHtml").get(0);
        $("#questionText").html(questionsObject[questionNumber].questionText);
        // for (i=0; i < questionsObject[this.questionNumber].questionAnswers.length; i++)    
        $("#questionAnswerOption1").html(questionsObject[questionNumber].questionAnswers[0]);
        $("#questionAnswerOption2").html(questionsObject[questionNumber].questionAnswers[1]);
        $("#questionAnswerOption3").html(questionsObject[questionNumber].questionAnswers[2]);
        $("#questionAnswerOption4").html(questionsObject[questionNumber].questionAnswers[3]);
        $("questionAnswerOption1").on("click", function () {
            if (questionsObject[questionNumber].questionAnswer == questionsObject[questionNumber].questionAnswers[0]) {
                correctAnswerFunc();
            } else {
                wrongAnswerFunc();
            }
        });

    };

    function startGame() {
        $("#startButton").on("click", loadQuestion());
    };

    function timesUp() {
        wrongAnswers++;
        
    };

    function checkAnswer() {
        $("questionAnswerOption1").on("click", function () {
            if (questionsObject[questionNumber].questionAnswer == questionsObject[questionNumber].questionAnswers[0]) {
               correctAnswerFunc();
            } else {
               wrongAnswerFunc();
            }
        });
        $("questionAnswerOption2").on("click", function () {
            if (questionsObject[questionNumber].questionAnswer == questionsObject[questionNumber].questionAnswers[1]) {
                correctAnswerFunc();
            } else {
                wrongAnswerFunc();
            }
        });
        $("questionAnswerOption3").on("click", function () {
            if (questionsObject[questionNumber].questionAnswer == questionsObject[questionNumber].questionAnswers[2]) {
                correctAnswerFunc();
            } else {
                wrongAnswerFunc();
            }
        });
        $("questionAnswerOption4").on("click", function () {
            if (questionsObject[questionNumber].questionAnswer == questionsObject[questionNumber].questionAnswers[3]) {
                correctAnswerFunc();
            } else {
                wrongAnswerFunc();
            }
        });
    };

    function endGame() {
        $("#questionText").html("Thanks For Playing!");
        $("#questionAnswerOption1").html("A");
        $("#questionAnswerOption2").html("B");
        $("#questionAnswerOption3").html("C");
        $("#questionAnswerOption4").html("D");
    };

    function correctAnswerFunc() {
        $("#videoSrcHtml").attr("src", questionsObject[questionNumber].answerVideo);
        $("#videoTagHtml").get(0).load();
        $("#videoTagHtml").get(0);
        correctAnswers++;
        $("#rightAnswerNum").html(correctAnswers);
        qestionNumberFunc();
        sartGame();

    };

    function wrongAnswerFunc() {
        $("#videoSrcHtml").attr("src", questionsObject[questionNumber].answerVideo);
        $("#videoTagHtml").get(0).load();
        $("#videoTagHtml").get(0);
        wrongAnswers++;
        console.log(wrongAnswers);
        questionNumberFunc();
        startGame();
    };




    // console.log(questionsObject[1].questionText);

    startGame();
};