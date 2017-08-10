$(document).ready(function() {
  var height = parseInt(prompt("How tell are you in inches?"));


  if (height > 36) {
    $('#heightup').show();
  } else {
    $('#allrides').show();
  }
});
