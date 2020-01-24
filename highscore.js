var highScores = JSON.parse(localStorage.getItem("HighScores"));

highScores.forEach(function(d) {
    $("#hslist").append('<li>' + d.name + ' - ' + d.score + '%');
});