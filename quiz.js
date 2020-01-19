// var highScoreEl = getElementById("highScore");
var startEl = document.getElementById("start");

var count=80;

function timer()
{
  count=count-1;
  document.getElementById("timer").innerHTML="Timer: " + count + " secs"; 
  if (count <= 0)
  {
    document.getElementById("timer").innerHtml="TIME IS UP!";
    $("#start").prop("disabled", false);
    return;
  }
}
/*
function countdown() {
    setTimeout('Decrement()', 80);
}
*/

startEl.addEventListener('click', function() {
    $(this).prop("disabled", true);
    setInterval(timer, 1000); //1000 will  run it every 1 second
});
