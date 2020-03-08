$(document).ready(function() {
    console.log(moment().format('LL'))
    var today = moment().format('LL');
    $("#currentDay").text(today)
    
    
  });