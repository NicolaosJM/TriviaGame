var x;
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


    var logic = {

        questionsObject: questionsObject,
        questionNumber: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        // answerSubmitted: "",
        timer: 30,


        // countdown: function () {
        //     logic.timer--;
        //     document.getElementById("timeLeft").innerHTML=logic.timer;
        //     if (logic.timer < 0) {
        //         clearInterval(x);
        //         logic.timesUp();
        //     }
        // },

        questionNumberFunc: function () {
            logic.questionNumber++;
            if (logic.questionNumber >= 9) {
                logic.endGame();
            }
        },

        loadQuestion: function () {
            logic.timer = 30;

            // console.log(questionsObject[logic.questionNumber].questionVideo);
            $("#videoSrcHtml").attr("src", questionsObject[logic.questionNumber].questionVideo);
            $("#videoTagHtml").get(0).load();
            $("#videoTagHtml").get(0);
            $("#questionText").html(questionsObject[logic.questionNumber].questionText);
            // for (i=0; i < questionsObject[this.questionNumber].questionAnswers.length; i++)    
            $("#questionAnswerOption1").html(questionsObject[logic.questionNumber].questionAnswers[0]);
            $("#questionAnswerOption2").html(questionsObject[logic.questionNumber].questionAnswers[1]);
            $("#questionAnswerOption3").html(questionsObject[logic.questionNumber].questionAnswers[2]);
            $("#questionAnswerOption4").html(questionsObject[logic.questionNumber].questionAnswers[3]);
            logic.checkAnswer();

        },

        startGame: function () {
            clearInterval(x);
            x = setInterval(function () {

                logic.timer--;
                document.getElementById("timeLeft").innerHTML = logic.timer;
                if (logic.timer <= 0) {
                    clearInterval(x);
                    logic.timesUp();
                }

            }, 1000);

            document.getElementById("startButton").style.visibility = "hidden";
            logic.loadQuestion();
        },

        timesUp: function () {
            // logic.wrongAnswers++;
            // $("#wrongAnswerNum").html(logic.wrongAnswers);
            // setInterval(logic.loadQuestion(), 5000);
            logic.wrongAnswerFunc();

        },

        checkAnswer: function () {
            $("#questionAnswerOption1").on("click", function () {
                if (questionsObject[logic.questionNumber].correctAnswer == questionsObject[logic.questionNumber].questionAnswers[0]) {
                    logic.correctAnswerFunc();
                } else {
                    logic.wrongAnswerFunc();
                }
            });
            $("#questionAnswerOption2").on("click", function () {
                if (questionsObject[logic.questionNumber].correctAnswer == questionsObject[logic.questionNumber].questionAnswers[1]) {
                    logic.correctAnswerFunc();
                } else {
                    logic.wrongAnswerFunc();
                }
            });
            $("#questionAnswerOption3").on("click", function () {
                if (questionsObject[logic.questionNumber].correctAnswer == questionsObject[logic.questionNumber].questionAnswers[2]) {
                    logic.correctAnswerFunc();
                } else {
                    logic.wrongAnswerFunc();
                }
            });
            $("#questionAnswerOption4").on("click", function () {
                if (questionsObject[logic.questionNumber].correctAnswer == questionsObject[logic.questionNumber].questionAnswers[3]) {
                    logic.correctAnswerFunc();
                } else {
                    logic.wrongAnswerFunc();
                }
            });
        },

        endGame: function () {
            $("#questionText").html("Thanks For Playing!");
            $("#questionAnswerOption1").html("A");
            $("#questionAnswerOption2").html("B");
            $("#questionAnswerOption3").html("C");
            $("#questionAnswerOption4").html("D");
            document.getElementById("startButton").style.visibility = "visible";

        },

        correctAnswerFunc: function () {
            $("#videoSrcHtml").attr("src", questionsObject[logic.questionNumber].answerVideo);
            $("#videoTagHtml").get(0).load();
            $("#videoTagHtml").get(0);
            clearInterval(x);
            logic.correctAnswers++;
            $("#questionText").html("<h2>" + "Correct! Click here for next question" + "</h2>");
            $("#rightAnswerNum").html(logic.correctAnswers);
            logic.questionNumberFunc();
            $("#questionText").on("click", function () {
                logic.loadQuestion();
            });

        },
        afterAnswer: function () {

        },

        wrongAnswerFunc: function () {
            $("#videoSrcHtml").attr("src", questionsObject[logic.questionNumber].answerVideo);
            $("#videoTagHtml").get(0).load();
            $("#videoTagHtml").get(0);
            clearInterval(x);
            logic.wrongAnswers++;
            $("#questionText").html("Wrong! Click here for next question");
            $("#wrongAnswerNum").html(logic.wrongAnswers);
            logic.questionNumberFunc();
            $("#questionText").on("click", function () {
                logic.loadQuestion();
            });
        },



    };
    // console.log(questionsObject[1].questionText);
    // setInterval(logic.countdown(), 1000);

    $(document).on("click", "#startButton", function () {

        logic.startGame();
    });
};