var startEl = document.getElementById("start");
var commit1El = document.getElementById("commit1");
var commit2El = document.getElementById("commit2");
var commit3El = document.getElementById("commit3");
var commit4El = document.getElementById("commit4");
var commit5El = document.getElementById("commit5");
var firstOptEl = document.getElementById("firstOpt");
var secondOptEl = document.getElementById("secondOpt");
var thirdOptEl = document.getElementById("thirdOpt");
var fourthOptEl = document.getElementById("fourthOpt");
var fifthOptEl = document.getElementById("fifthOpt");
var answers1El = document.getElementById("answers1");
var answers2El = document.getElementById("answers2");
var answers3El = document.getElementById("answers3");
var answers4El = document.getElementById("answers4");
var answers5El = document.getElementById("answers5");

var timerTest = null;
var name = null;
var numberCorrect = 0;

var count=80;

var ansArr1 = ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"];
var ansArr2 = ["ReadMe.md", "Javascript.js", "Style.css", "Index.html"];
var ansArr3 = ["Content Delivery Network", "A system of distributed servers that deliver that deliver pages/web content to a user.", "Is based on location, origin of the webpage, and the content delivery server.", "All of the Above"];
var ansArr4 = ["Boolean, String, Number", "Null, Symbol, Undefined, Boolean, Number, String", "Null, Number, String", "Boolean, String, Number, Undefined"];
var ansArr5 = ["To Read HTML Documents and Display Them", "To Interpret Data", "To Log All Interactions", "To Connect to the Internet"];

//var ansArr1[2] = true;
//var ansArr2[3] = true;
//var ansArr3[3] = true;
//var ansArr4[1] = true;
//var ansArr5[0] = true;

function timer()
   {
     count=count-1;
     document.getElementById("timer").innerHTML="Timer: " + count + " secs"; 
      
     if (count <= 0)
       {
          document.getElementById("timer").innerHTML="TIME IS UP!";
          clearInterval(timerTest);
          populateHighScores();
          window.location.href="hs.html";
       }
   }

startEl.addEventListener('click', function() {

    // Pull Name
    name = $("#nameBox").val();

    if (name == "") {
      name = "Anonymous";
    }

    timerTest = setInterval(timer, 1000); //1000 will  run it every 1 second
    //upon click start, 1st question appears, opening block disappears

    // Hide Opening Dialog
    $("#nameBox").val("");
    $("#openingMenu").css("display", "none");
    $("#firstOpt").css("display", "block");
});

commit1El.addEventListener('click', function() {
  var answer1 = $("input[name=customRadio]:checked").val();
  if (!answer1) {
    $("#nr1").css("display", "block");
  } else {
    if (answer1 == ansArr1[2]) {
      numberCorrect += 1;
    } else {
      // Reduce timer by 10 seconds
      count = count - 10;
    }
    console.log(name + " Number correct: " + numberCorrect);
    $("input[name=customRadio]").prop("checked", false);
    $("#nr1").css("display", "none"); // if nothing checked, non-responsive message appears
    $("#firstOpt").css("display", "none"); // ?1 closes
    $("#secondOpt").css("display", "block"); // ?2 opens
  }
});

commit2El.addEventListener('click', function() {
  var answer2 = $("input[name=customRadio2]:checked").val();
  if (!answer2) {
    $("#nr2").css("display", "block");
  } else {
    if (answer2 == ansArr2[3]) {
      numberCorrect += 1;
    } else {
      // Reduce timer by 10 seconds
      count = count - 10;
    }
    console.log(name + " Number correct: " + numberCorrect);
    $("input[name=customRadio2]").prop("checked", false);
    $("#nr2").css("display", "none"); // if nothing checked, non-responsive message appears
    $("#secondOpt").css("display", "none"); // ?2 closes
    $("#thirdOpt").css("display", "block"); // ?3 opens
  }
});

commit3El.addEventListener('click', function() {
  var answer3 = $("input[name=customRadio3]:checked").val();
 
  if (!answer3) {
    $("#nr3").css("display", "block");
  } else {
    if (answer3 == ansArr3[3]) {
      numberCorrect += 1;
    } else {
      // Reduce timer by 10 seconds
      count = count - 10;
    }
    console.log(name + " Number correct: " + numberCorrect);
    $("input[name=customRadio3]").prop("checked", false);
    $("#nr3").css("display", "none"); // if nothing checked, non-responsive message appears
    $("#thirdOpt").css("display", "none"); // ?3 closes
    $("#fourthOpt").css("display", "block"); // ?4 opens
  }
});

commit4El.addEventListener('click', function() {
  var answer4 = $("input[name=customRadio4]:checked").val();
  
  if (!answer4) {
    $("#nr4").css("display", "block");
  } else {
    if (answer4 == ansArr4[1]) {
      numberCorrect += 1;
    } else {
      // Reduce timer by 10 seconds
      count = count - 10;
    }
    console.log(name + " Number correct: " + numberCorrect);
    $("input[name=customRadio4]").prop("checked", false);
    $("#nr4").css("display", "none"); // if nothing checked, non-responsive message appears
    $("#fourthOpt").css("display", "none"); // ?4 closes
    $("#fifthOpt").css("display", "block"); // ?5 opens
  }
});

commit5El.addEventListener('click', function() {
  var answer5 = $("input[name=customRadio5]:checked").val();
 
  if (!answer5) {
    $("#nr5").css("display", "block");
  } else {
    if (answer5 == ansArr5[0]) {
      numberCorrect += 1;
    } else {
      // Reduce timer by 10 seconds
      count = count - 10;
    }
    console.log(name + " Number correct: " + numberCorrect);
    $("#fifthOpt").css("display", "none"); // ?5 closes

    populateHighScores(); //upon completion score is pulled from local storage and added to list in appropriate position

    $("input[name=customRadio5]").prop("checked", false);
    $("#nr5").css("display", "none"); // if nothing checked, non-responsive message appears
    window.location.href="hs.html";  // sends player to High Score page
  }
});

function populateHighScores() {
  var itemToAdd = {"name": name, "score": (numberCorrect/5)*100};
  if (localStorage.getItem("HighScores") === null) {
    var highScores = [];
    highScores.push(itemToAdd);

    localStorage.setItem("HighScores", JSON.stringify(highScores));
  } else {
    var highScores = JSON.parse(localStorage.getItem("HighScores"));
    highScores.push(itemToAdd);

    highScores.sort(function(a,b) {
      return b.score - a.score;
    });  //sorts position high -> low

    localStorage.setItem("HighScores", JSON.stringify(highScores));
  }
}



