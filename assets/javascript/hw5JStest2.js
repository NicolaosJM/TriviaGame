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



        loadQuestion: function () {
            logic.timer = 30;
            clearInterval(x);
            x = setInterval(function () {

                logic.timer--;
                document.getElementById("timeLeft").innerHTML = logic.timer;
                if (logic.timer <= 0) {
                    clearInterval(x);
                    logic.timesUp();
                }

            }, 1000);
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
            logic.loadQuestion();
        },

        timesUp: function () {
            
            clearInterval(x)
            setInterval(function () {
                $("#questionText").html("Times up! Next question loading...")
                logic.loadQuestion()

            }, 5000);

            return;
        },

        checkAnswer: function () {
            // this is my problem function I believe, it seems to call both correct and wrong answer functions regardless of the changes I make.  
            
            console.log(logic.questionNumber + "checkan1");

            function qB1Func() {
                var userAnswer = questionsObject[logic.questionNumber].questionAnswers[0];

                if (userAnswer === questionsObject[logic.questionNumber].correctAnswer) {
                    logic.correctAnswerFunc();
                    console.log("qb1c");
                    return;
                } else {
                    logic.wrongAnswerFunc();
                    console.log("qb1w");
                    return;
                }
            };

            function qB2Func() {
                if (questionsObject[logic.questionNumber].questionAnswers[1] === questionsObject[logic.questionNumber].correctAnswer) {
                    logic.correctAnswerFunc();
                    console.log("qb2c");
                    return;
                } else if (questionsObject[logic.questionNumber].questionAnswers[1] != questionsObject[logic.questionNumber].correctAnswer) {
                    logic.wrongAnswerFunc();
                    console.log("qb2w");
                    return;
                }
            };

            function qB3Func() {
                if (questionsObject[logic.questionNumber].questionAnswers[2] === questionsObject[logic.questionNumber].correctAnswer) {
                    logic.correctAnswerFunc();
                    console.log("qb3c");
                    return;
                } else if (questionsObject[logic.questionNumber].questionAnswers[2] != questionsObject[logic.questionNumber].correctAnswer) {
                    logic.wrongAnswerFunc();
                    console.log("qb3r");
                    return;
                }
            };

            function qB4Func() {
                if (questionsObject[logic.questionNumber].questionAnswers[3] === questionsObject[logic.questionNumber].correctAnswer) {
                    logic.correctAnswerFunc();
                    console.log("qb4c");
                    return;
                } else if (questionsObject[logic.questionNumber].questionAnswers[3] != questionsObject[logic.questionNumber].correctAnswer) {
                    logic.wrongAnswerFunc();
                    console.log("qb4w");
                    return;
                }
            };

            document.getElementById("questionAnswerOption1").addEventListener("click", qB1Func);
            document.getElementById("questionAnswerOption2").addEventListener("click", qB2Func);
            document.getElementById("questionAnswerOption3").addEventListener("click", qB3Func);
            document.getElementById("questionAnswerOption4").addEventListener("click", qB4Func);
            
            
        },

        endGame: function () {
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

        correctAnswerFunc: function () {
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
            
        },

        wrongAnswerFunc: function () {
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
            

        },


    };
    
    $(document).on("click", "#startButton", function () {

        logic.startGame();
    });
};