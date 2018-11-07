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
    questionText: "The Anglo-German Agreement of 1890 exchanged the island of Heligoland for which portion of the East Africa Protectorate?",
    questionAnswers: ["Zanzibar", "Mombasa", "Kilimanjaro ", "East Kenya"],
    correctAnswer: "Zanzibar",
    answerVideo: "assets/images/answer07.mp4"
}, {
    questionVideo: "assets/images/question08.mp4",
    questionText: "From the Greek word for change, what noun means the sum of the chemical reactions that occur within a living organism to maintain life?",
    questionAnswers: ["Endocrine", "Diaphoresis ", "Metabolism", "Myelo"],
    correctAnswer: "Metabolism",
    answerVideo: "assets/images/answer08.mp4"
}];

// $(document).ready(function () {
window.onload = function () {


    console.log(questionsObject);




    var logic = {

        questionsObject: questionsObject,
        questionNumber: 0,
        correctAnswers: 0,
        wrongAnswers: 0,

        timer: 30,

        timer1: function () {
            clearInterval(x);
            x = setInterval(function () {

                logic.timer--;
                document.getElementById("timeLeft").innerHTML = logic.timer;
                if (logic.timer <= 0) {
                    clearInterval(x);
                    logic.timesUp();
                }

            }, 1000);
        },

        loadQuestion: function () {
            
            logic.timer = 30;
            logic.timer1();
            if (logic.questionNumber >= 9) {
                logic.endGame();
                return;
            } else {
                $("#videoSrcHtml").attr("src", questionsObject[logic.questionNumber].questionVideo);
                $("#videoTagHtml").get(0).load();
                $("#videoTagHtml").get(0);
                $("#questionText").html(questionsObject[logic.questionNumber].questionText);
                $("#questionAnswerOption1").html(questionsObject[logic.questionNumber].questionAnswers[0]);
                $("#questionAnswerOption2").html(questionsObject[logic.questionNumber].questionAnswers[1]);
                $("#questionAnswerOption3").html(questionsObject[logic.questionNumber].questionAnswers[2]);
                $("#questionAnswerOption4").html(questionsObject[logic.questionNumber].questionAnswers[3]);
                logic.checkAnswer();
                return;
            }
        },

        startGame: function () {


            document.getElementById("startButton").style.visibility = "hidden";
            logic.questionNumber = 0;
            
            logic.correctAnswers = 0;
            $("#rightAnswerNum").html(logic.correctAnswers);
            logic.wrongAnswers = 0;
            $("#wrongAnswerNum").html(logic.wrongAnswers);
            logic.loadQuestion();
        },

        timesUp: function () {

            clearInterval(x)
            logic.wrongAnswers++;
            $("#wrongAnswerNum").html(logic.wrongAnswers);
            $("#questionText").html("Times up! Next question loading...");
            var timesUpInt = setInterval(function () {
                logic.questionNumber++;
                logic.loadQuestion()
                clearInterval(timesUpInt);
            }, 5000);
            
            return;
        },
        wrongAnswerFunc: function () {
            if ((logic.wrongAnswers + logic.correctAnswers) >= 8) {
                logic.endGame();
                return;
            } else {
                $("#videoSrcHtml").attr("src", questionsObject[logic.questionNumber].answerVideo);
                $("#videoTagHtml").get(0).load();
                $("#videoTagHtml").get(0);
                clearInterval(x);
                console.log(logic.questionNumber + "w1");
                logic.wrongAnswers++;

                $("#questionText").html("Wrong! Watch the answer above while the next question loads.");
                $("#wrongAnswerNum").html(logic.wrongAnswers);

                setTimeout(function () {
                    logic.afterAnswer();
                    return;
                }, 10 * 1000);
                return;

            }
        },
        
        correctAnswerFunc: function () {
            if ((logic.wrongAnswers + logic.correctAnswers) >= 8) {
                logic.endGame();
                return;
            } else {
                $("#videoSrcHtml").attr("src", questionsObject[logic.questionNumber].answerVideo);
                $("#videoTagHtml").get(0).load();
                $("#videoTagHtml").get(0);
                clearInterval(x);
                console.log(logic.questionNumber + "c1");
                logic.correctAnswers++;
                $("#questionText").html("<h2>" + "Correct! Watch the answer above while the next question loads." + "</h2>");
                $("#rightAnswerNum").html(logic.correctAnswers);

                setTimeout(function () {
                    logic.afterAnswer();
                    return;
                }, 10 * 1000);
                return;
            }
        },
        checkAnswer: function () {
             

            $("#questionAnswerOption1").unbind().click(function () {
                if (questionsObject[logic.questionNumber].correctAnswer === questionsObject[logic.questionNumber].questionAnswers[0]) {
                    logic.correctAnswerFunc();
                } else {
                    logic.wrongAnswerFunc();
                }
            });
            $("#questionAnswerOption2").unbind().click(function () {
                if (questionsObject[logic.questionNumber].correctAnswer === questionsObject[logic.questionNumber].questionAnswers[1]) {
                    logic.correctAnswerFunc();
                } else {
                    logic.wrongAnswerFunc();
                }
            });
            $("#questionAnswerOption3").unbind().click(function () {
                if (questionsObject[logic.questionNumber].correctAnswer === questionsObject[logic.questionNumber].questionAnswers[2]) {
                    logic.correctAnswerFunc();
                } else {
                    logic.wrongAnswerFunc();
                }
            });
            $("#questionAnswerOption4").unbind().click(function () {
                if (questionsObject[logic.questionNumber].correctAnswer === questionsObject[logic.questionNumber].questionAnswers[3]) {
                    logic.correctAnswerFunc();
                } else {
                    logic.wrongAnswerFunc();
                }
            });
            
        },

        endGame: function () {
            clearInterval(x);
            $("#questionText").html("Thanks For Playing!");
            $("#questionAnswerOption1").html("A");
            $("#questionAnswerOption2").html("B");
            $("#questionAnswerOption3").html("C");
            $("#questionAnswerOption4").html("D");
            document.getElementById("startButton").style.visibility = "visible";
            $(document).on("click", "#startButton", function () {

                logic.startGame();
            });

        },

        afterAnswer: function () {
            logic.questionNumber++;

            logic.loadQuestion();
            return;
        },






    };
    document.getElementById("questionText").style.visibility = "hidden";
    $(document).on("click", "#startButton", function () {
        document.getElementById("questionText").style.visibility = "visible";
        logic.startGame();
    });
};