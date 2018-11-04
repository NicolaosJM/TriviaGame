document.ready = function () {


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
    }]

//     var logic = {
//         questionsObject = questionsObject,
//         time = 30,
//         questionNumber: 0,
//         rightAnswers: 0,
//         wrongAnswers: 0,
//         determineQuestionNum: function() {
//             for(i=1; i <= this.questionDisplay.questionAnswers.legnth; i++) {
//                 this.questionNumber++;
//             }
//         },
//         pushQuestion: function() {
//             $("#videoHtml").html(this.questionDisplay[logic.questionNumber].questionVideo[logic.questionNumber]);
//             $("#quetionText").html(this.questionDisplay[logic.questionNumber].questionText);
//             $("#questionAnswerOption1").html(this.questionDisplay[logic.questionNumber].questionAnswers[logic.questionNumber]);
//             $("#questionAnswerOption2").html(this.questionDisplay[logic.questionNumber].questionAnswers[logic.questionNumber]);
//             $("#questionAnswerOption3").html(this.questionDisplay[logic.questionNumber].questionAnswers[logic.questionNumber]);
//             $("#questionAnswerOption4").html(this.questionDisplay[logic.questionNumber].questionAnswers[logic.questionNumber]);
//         },
//         count: function () {
//             logic.time--;
//             $("#countDownTime").html(logic.time);
//             if(logic.time<=0){
//                 logic.timeUp();
//             }

//         },
//         start: function () {
//             countDown = setInterval(logic.count, 1000);

//         },
//         timeUp: function() {
//             $("#startButton").html("Next Question!")
//             logic.questionNumber++;
        
        
//         }
//     }
// logic.pushQuestion();



newFunction();

function newFunction() {
    console.log(questionsObject);
}
}



