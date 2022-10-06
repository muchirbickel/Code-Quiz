var timer = 20;
var score = 0;
var questions = 0;

var header = document.querySelector("#header");
var time = document.querySelector("#time");
var highScore = document.querySelector("#high-score");
var finalScore = document.querySelector("#final-score");
var inputField = document.getElementById("initial");
var quizChallenge = document.querySelector("#main-screen");
var firstQuestion = document.querySelector("#first-question");
var secondQuestion = document.querySelector("#second-question");
var thirdQuestion = document.querySelector("#third-question");
var fourthQuestion = document.querySelector("#fourth-question");
var fifthQuestion = document.querySelector("#fifth-question");
var enterInitials = document.querySelector("#enter-initials");
var highScore = document.querySelector("#display-highScore");
var labelEl = document.querySelector("label");

/**
 * This function to start counting down and stops when 
 * questionnaire is finished or time is over.
 */
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      time.textContent = "Time: "+timer;
  
      if(timer === 0 || questions === 5) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
      else {timer === 0;   
      }
  
    }, 1000);
  }

  /**
   * This function changes the display property.
   * @param {*} element1 is to have display off
   * @param {*} element2 is to have display on
   */
  function switchScreen(element1, element2){
    element1.setAttribute("style", "display:none;");
    element2.setAttribute("style", "display:flex;");
  }

  /**
   * This function checks if the value from data set matches or not
   * @param {*} child 
   */
  function checkAnswer(child){
    var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=4;
        }
  }

  /**
   * Event listener function to respond for every click.
   */
document.addEventListener("click", function(event){
    var child = event.target;
    if(child.matches("#start-quiz")){
        setTime();
        switchScreen(quizChallenge, firstQuestion);
    }
    if(child.matches(".first-question")){
        questions++;
        checkAnswer(child);
        switchScreen(firstQuestion, secondQuestion);
    }
    if(child.matches(".second-question")){
        questions++;
        checkAnswer(child);
        switchScreen(secondQuestion, thirdQuestion);
    }
    if(child.matches(".third-question")){
        questions++;
        checkAnswer(child);
        switchScreen(thirdQuestion, fourthQuestion);
    }
    if(child.matches(".fourth-question")){
        questions++;
        checkAnswer(child);
        switchScreen(fourthQuestion, fifthQuestion);
    }
    if(child.matches(".fifth-question")){
        questions++;
        checkAnswer(child);
        switchScreen(fifthQuestion, enterInitials);
        finalScore.textContent = "Your final score is "+ score;
    }
    if(child.matches("#submit")){
        var value = inputField.value;
        labelEl.textContent = value + " " +score;
        switchScreen(enterInitials, highScore);
        time.setAttribute("style", "display:none;");
    }
    if(child.matches("#go-back")){
        timer = 20;
        time.textContent = "time: " +timer;
        questions = 0;
        score = 0;
        switchScreen(highScore, quizChallenge);
        time.setAttribute("style", "display:flex;");
    }
    if(child.matches("#clear")){
        labelEl.textContent = "";
    }

});
