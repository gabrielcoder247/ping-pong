//Business logic
//var userInput;
var pingpong = function(userInput) {
  for (i = 1; i <= userInput; i++) {
    if (i % 3 === 0) {
      $("#result").append("ping <br/>");
    } else if (i % 5 === 0) {
      $("#result").append("pong <br/>");
    } else if (i % 15 === 0) {
      $("#result").append("pingpong <br/>");
    } else($("#result").append(i.toString() + "<br/>"));
  };
};


//user interface logic
$(document).ready(function() {
  $("#Pingpong").submit(function(event) {
      $("#result").text('');
     userInput = parseInt($("#userInput").val());
     var userInput;
     pingpong(userInput);
    event.preventDefault();
  });
});
