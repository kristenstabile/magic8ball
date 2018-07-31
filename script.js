$(document).ready(function () {

    var magic8Ball = {};

    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

    $("#answer").hide();

    magic8Ball.askQuestion = function (question) {
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text(answer);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

        console.log(question);
        console.log(answer);

    };

    var onClick = function () {
        setTimeout(
            function () {
                var question = prompt("Ask me a yes or no question!");
                $("#8ball").effect("shake");
                magic8Ball.askQuestion(question);
            }, 500);
        $("#answer").fadeIn(10000);
    };
    $("#questionButton").click(onClick);

});
