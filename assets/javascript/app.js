alert("Connect!");

//function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
//
//	function showQuestions(questions, quizContainer){
//		// code will go here
//	}
//
//	function showResults(questions, quizContainer, resultsContainer){
//		// code will go here
//	}
//
//	// show the questions
//	showQuestions(questions, quizContainer);
//
//	// when user clicks submit, show results
//	submitButton.onclick = function(){
//		showResults(questions, quizContainer, resultsContainer);
//	}
//}
//
var myQuestions = [
    {
        question: "Which ocean lies between North America and Asia?",
        answers: {
            a: 'Pacific',
            b: 'Oceania',
            c: 'Indian',
            d: 'Altantic'
        },
        correctAnswer: 'a'
	},
    {
        question: "Which continent is the largest by size?",
        answers: {
            a: 'North America',
            b: 'South America',
            c: 'Africa',
            d: 'Asia',
        },
        correctAnswer: 'd'
	},
    {
        question: "How many earths could fit inside the sun?",
        answers: {
            a: '1 Thousand',
            b: '100 Thousand',
            c: '1 Million',
            d: '10 Million',
        },
        correctAnswer: 'c'
	},
    {
        question: "Which of these are not an Ocean?",
        answers: {
            a: 'Arctic',
            b: 'Northern',
            c: 'Indian',
            d: 'Antarctic/Southern Ocean',
        },
        correctAnswer: 'b'
	},
    {
        question: "Which is the largest planet in our solar system?",
        answers: {
            a: 'Jupiter',
            b: 'Mars',
            c: 'Saturn',
            d: 'Neptune',
        },
        correctAnswer: 'a'
	},
    {
        question: "How many oceans are in the world?",
        answers: {
            a: '6',
            b: '5',
            c: '4',
            d: '7',
        },
        correctAnswer: '5'
	}
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var number = 100;


  

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var number = 60;

    $("#start").on("click", run);
    //  When the stop button gets clicked, run the stop function.
    $("#submit").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
 

    //  The run function sets an interval
    //  that runs the decrement function once a second.
 

   run();

    function run() {
      intervalId = setInterval(decrement, 1000);
    
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

  

//// Function generate Quiz ////



generateQuiz(myQuestions, quizContainer);
function generateQuiz(myQuestions, quizContainer) {

    function showQuestions(myQuestions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];


        // for each question...
        for (var i = 0; i < myQuestions.length; i++) {
            var answers = [];
            // for each available answer...
            for (letter in myQuestions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<label>' + " " +
                    '<input type="radio" name="question' + i + '" value="' + " "+ letter + '">' + ' '+
                    letter + ': ' +
                    myQuestions[i].answers[letter] +
                    '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + myQuestions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join(' ');

    };
    showQuestions(myQuestions, quizContainer);

};


//
//  // keep track of user's answers
var userAnswer = '';
var numCorrect = 0;
//
//showResults (resultsContainer, submitButton);
//function showResults(questions, quizContainer, resultsContainer) {
//
//    // gather answer containers from our quiz
//    var answerContainers = quizContainer.querySelectorAll('.answers');
//
//    // keep track of user's answers
//   
//
//    // for each question...
//    for (var i = 0; i < questions.length; i++) {
//
//        // find selected answer
//        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
//
//        // if answer is correct
//        if (userAnswer === questions[i].correctAnswer) {
//            // add to the number of correct answers
//            numCorrect++;
//
//            // color the answers green
//            answerContainers[i].style.color = 'lightgreen';
//        }
//        // if answer is wrong or blank
//        else {
//            // color the answers red
//            answerContainers[i].style.color = 'red';
//        }
//    }
//
//    // show number of correct answers out of total
//    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//};
//submitButton.onclick = function () {
//    showResults(questions, quizContainer, resultsContainer);
//}
