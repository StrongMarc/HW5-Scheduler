$(document).ready(function() {
    
  // Add Today's date onto top of daily planner
  console.log(moment().format('LL'))
    var today = moment().format('LL');
    $("#currentDay").text(today)
  
    //get locale storage
  function render(Hour) {
    var get = localStorage.getItem('saved')
    eventBlock = JSON.parse(get)
    console.log(eventBlock.block)
    console.log(eventBlock.block[0].activity)

    // writeText (eventBlock.block[0].activity)
    // writeText (eventBlock.block[1].activity)
    // writeText (eventBlock.block[2].activity)
    if (eventBlock.block[0].hour == 9) {
      writeText (eventBlock.block[0].activity)
      console.log(eventBlock.block)
    }
    if (eventBlock.block[1].hour == 10) {
      writeText1 (eventBlock.block[1].activity)
      console.log(eventBlock.block)
    }
    if (eventBlock.block[2].hour == 11) {
      writeText2 (eventBlock.block[2].activity)
    }
  }

  //https://stackoverflow.com/questions/26346956/inserting-text-into-textarea-with-javascript-for-google-chrome-extension
  //function to write to text area
  function writeText (text){
      document.getElementById('activity').innerHTML = text
  }

  function writeText1 (text){
      document.getElementById('activity1').innerHTML = text
  }
  function writeText2 (text){
    document.getElementById('activity2').innerHTML = text
  }
  
  // figure how moment.js works, define current time
    var now = moment();
    console.log(now)
    console.log(now._locale)
    console.log(now._locale._calendar)
    var now1 = moment("1995-12-25");
    console.log(now1)
  // $("#currentDay").text(now1.format('LL'))

  
  //color 9am timeblock
    var firstHour = 9
    render(firstHour)
    var time9AM = moment({hour: firstHour});
    // $("#currentDay").text(event9AM.format('LT'))
    console.log(now.diff(time9AM, 'hours', 'minutes'))
    // localStorage.getItem('myJSON')
    // alert (myJSON)
    if (now.diff(time9AM, 'hours', 'minutes') > 1 ){
      $("#9AMevent").addClass("past");
    }
    else if (now.diff(time9AM, 'hours', 'minutes') > 0 && now.diff(time9AM, 'hours', 'minutes') < 1 ){
      $("#9AMevent").addClass("present");
    }
    else if (now.diff(time9AM, 'hours', 'minutes') < 0 ){
      $("#9AMevent").addClass("future");
    }
  
    //color 10am timeblock
    render(firstHour+1)
    var time10AM = moment({hour: firstHour+1});
    // $("#currentDay").text(event9AM.format('LT'))
    console.log(now.diff(time10AM, 'hours', 'minutes'))
    if (now.diff(time10AM, 'hours', 'minutes') > 1 ){
      $("#10AMevent").addClass("past");
    }
    else if (now.diff(time10AM, 'hours', 'minutes') > 0 && now.diff(time10AM, 'hours', 'minutes') < 1 ){
      $("#10AMevent").addClass("present");
    }
    else if (now.diff(time10AM, 'hours', 'minutes') < 0 ){
      $("#10AMevent").addClass("future");
    }

    //color 11am timeblock
    var time11AM = moment({hour: firstHour+2});
    // $("#currentDay").text(event9AM.format('LT'))
    console.log(now.diff(time11AM, 'hours', 'minutes'))
    if (now.diff(time11AM, 'hours', 'minutes') > 1 ){
      $("#11AMevent").addClass("past");
    }
    else if (now.diff(time11AM, 'hours', 'minutes') > 0 && now.diff(time11AM, 'hours', 'minutes') < 1 ){
      $("#11AMevent").addClass("present");
    }
    else if (now.diff(time11AM, 'hours', 'minutes') < 0 ){
      $("#11AMevent").addClass("future");
    }

    
    //color 12pm timeblock
    var time12PM = moment({hour: firstHour+3});
    // $("#currentDay").text(event9AM.format('LT'))
    if (now.diff(time12PM, 'hours', 'minutes') > 1 ){
      $("#12PMevent").addClass("past");
    }
    else if (now.diff(time12PM, 'hours', 'minutes') > 0 && now.diff(time12PM, 'hours', 'minutes') < 1 ){
      $("#12PMevent").addClass("present");
    }
    else if (now.diff(time12PM, 'hours', 'minutes') < 0 ){
      $("#12PMevent").addClass("future");
    }

    //color 1pm timeblock
    var time1PM = moment({hour: firstHour+4});
    // $("#currentDay").text(event9AM.format('LT'))
    if (now.diff(time1PM, 'hours', 'minutes') > 1 ){
      $("#1PMevent").addClass("past");
    }
    else if (now.diff(time1PM, 'hours', 'minutes') > 0 && now.diff(time1PM, 'hours', 'minutes') < 1 ){
      $("#1PMevent").addClass("present");
    }
    else if (now.diff(time1PM, 'hours', 'minutes') < 0 ){
      $("#1PMevent").addClass("future");
    }

    //color 2pm timeblock
    var time2PM = moment({hour: firstHour+5});
    // $("#currentDay").text(event9AM.format('LT'))
    if (now.diff(time2PM, 'hours', 'minutes') > 1 ){
      $("#2PMevent").addClass("past");
    }
    else if (now.diff(time2PM, 'hours', 'minutes') > 0 && now.diff(time2PM, 'hours', 'minutes') < 1 ){
      $("#2PMevent").addClass("present");
    }
    else if (now.diff(time2PM, 'hours', 'minutes') < 0 ){
      $("#2PMevent").addClass("future");
    }

    //color 3pm timeblock
    var time3PM = moment({hour: firstHour+6});
    // $("#currentDay").text(event9AM.format('LT')
    if (now.diff(time3PM, 'hours', 'minutes') > 1 ){
      $("#3PMevent").addClass("past");
    }
    else if (now.diff(time3PM, 'hours', 'minutes') > 0 && now.diff(time3PM, 'hours', 'minutes') < 1 ){
      $("#3PMevent").addClass("present");
    }
    else if (now.diff(time3PM, 'hours', 'minutes') < 0 ){
      $("#3PMevent").addClass("future");
    }

    //color 4pm timeblock
    var time4PM = moment({hour: firstHour+7});
    // $("#currentDay").text(event9AM.format('LT'))
    if (now.diff(time4PM, 'hours', 'minutes') > 1 ){
      $("#4PMevent").addClass("past");
    }
    else if (now.diff(time4PM, 'hours', 'minutes') > 0 && now.diff(time4PM, 'hours', 'minutes') < 1 ){
      $("#4PMevent").addClass("present");
    }
    else if (now.diff(time4PM, 'hours', 'minutes') < 0 ){
      $("#4PMevent").addClass("future");
    }

    //color 5pm timeblock
    var time5PM = moment({hour: firstHour+8});
    // $("#currentDay").text(event9AM.format('LT'))
    console.log(now.diff(time5PM, 'hours', 'minutes'))
    if (now.diff(time5PM, 'hours', 'minutes') > 1 ){
      $("#5PMevent").addClass("past");
    }
    else if (now.diff(time5PM, 'hours', 'minutes') > 0 && now.diff(time5PM, 'hours', 'minutes') < 1 ){
      $("#5PMevent").addClass("present");
    }
    else if (now.diff(time5PM, 'hours', 'minutes') < 0 ){
      $("#5PMevent").addClass("future");
    }

    
    // $("#btn9AM").on("click", function(e){
  //   var eventBlock = {
  //         block:  [{
  //           hour: "9",
  //           activity: "",
  //         }, {
  //           hour: "10",
  //           activity: "",
  //         }, {
  //           hour: "11",
  //           activity: "",
  //         }, {
  //           hour: "12",
  //           activity: "",
  //         }, {
  //           hour: "13",
  //           activity: "",
  //         }, {
  //           hour: "14",
  //           activity: "",
  //         }, {
  //           hour: "15",
  //           activity: "",
  //         }, {
  //           hour: "16",
  //           activity: "",
  //         }, {
  //           hour: "17",
  //           activity: "",
  //         }]
  //       }         
  //  console.log(eventBlock.block[1])

    //Save on 9AM button
      document.getElementsByTagName("button")[0].addEventListener("click", function() {
      
        var nine = document.getElementById('activity').value;
        eventBlock.block[0].activity = nine 
        var saved = JSON.stringify(eventBlock)
        alert (saved)
        localStorage.setItem('saved', saved)
        document.getElementById('activity').innerHTML = nine;
        console.log(eventBlock.block)
      })
      
      //Save on 10AM button
      document.getElementsByTagName("button")[1].addEventListener("click", function (){
        var ten = document.getElementById('activity1').value;
        eventBlock.block[1].activity = ten
        var saved = JSON.stringify(eventBlock)
        alert (saved)
        localStorage.setItem('saved', saved)
        document.getElementById('activity1').innerHTML = ten;
        console.log(eventBlock.block)
      })

      //Save on 11AM button
      document.getElementsByTagName("button")[2].addEventListener("click", function (){
        var eleven = document.getElementById('activity2').value;
        console.log((eventBlock.block[0]))
        console.log((eventBlock.block[2]))
        eventBlock.block[2].activity = eleven
        var saved = JSON.stringify(eventBlock)
        alert (saved)
        localStorage.setItem('saved', saved)
        document.getElementById('activity2').innerHTML = eleven;
        console.log(eventBlock.block)
      })

  });