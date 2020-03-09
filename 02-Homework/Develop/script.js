$(document).ready(function() {
    
  // Add Today's date onto top of daily planner
  console.log(moment().format('LL'))
    var today = moment().format('LL');
    $("#currentDay").text(today)
    
  // figure how moment.js works, define current time
    var now = moment();
    console.log(now)
    console.log(now._locale)
    console.log(now._locale._calendar)
    var now1 = moment("1995-12-25");
    console.log(now1)
  // $("#currentDay").text(now1.format('LL'))

  //color 9am timeblock
    var firstHour = 23
    var event9AM = moment({hour: firstHour});
    // $("#currentDay").text(event9AM.format('LT'))
    console.log(now.diff(event9AM, 'hours', 'minutes'))
    if (now.diff(event9AM, 'hours', 'minutes') > 1 ){
      $("#9AMevent").addClass("past");
    }
    else if (now.diff(event9AM, 'hours', 'minutes') > 0 && now.diff(event9AM, 'hours', 'minutes') < 1 ){
      $("#9AMevent").addClass("present");
    }
    else if (now.diff(event9AM, 'hours', 'minutes') < 0 ){
      $("#9AMevent").addClass("future");
    }
  
    //color 10am timeblock
    var event10AM = moment({hour: firstHour+1});
    // $("#currentDay").text(event9AM.format('LT'))
    console.log(now.diff(event10AM, 'hours', 'minutes'))
    if (now.diff(event10AM, 'hours', 'minutes') > 1 ){
      $("#10AMevent").addClass("past");
    }
    else if (now.diff(event10AM, 'hours', 'minutes') > 0 && now.diff(event10AM, 'hours', 'minutes') < 1 ){
      $("#10AMevent").addClass("present");
    }
    else if (now.diff(event10AM, 'hours', 'minutes') < 0 ){
      $("#10AMevent").addClass("future");
    }
  });