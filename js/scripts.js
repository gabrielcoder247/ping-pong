//Business logic
var pingpong = function(userInput) {
  console.log(userInput);
  for (i = 0; i < userInput.length; i++) {
    if (userInput % 3 === 0) {
      $("#result").append("<li>ping</li>");
    } else if (userInput % 5 === 0) {
      $("#result").append("<li>pong</li>");
    } else if (userInput % 15 === 0) {
      $("#result").append("<li>pingpong</li>");
    } else($("#result").append(i.toString() + "<br/>"));
  };
};


//user interface logic
$(document).ready(function() {
  $("pingpong#submit").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());
    console.log(userInput);
    var result = pingpong(userInput);
    $("#result").text(result);
  });
});
