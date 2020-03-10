$(document).ready(function() {
    
  // Add Today's date onto top of daily planner
  console.log(moment().format('LL'))
    var today = moment().format('LL');
    $("#currentDay").text(today)
  
  //   var event9AM = document.querySelector("#event9AM")
  //   console.log(localStorage.getItem('event9AM'))
  // if (!localStorage.getItem('event9AM')) {
  //   return
  // }
  // else {
  //   event9AM.textContent = localStorage.getItem('event9AM').text
  // }
 
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

    // $("#btn9AM").on("click", function(e){
    var eventBlock = {
          block:  [{
            hour: "9",
            activity: "xx",
          }, {
            hour: "10",
            activity: "",
          },]
        } 

        
    console.log(eventBlock.block[0].activity)

      document.getElementsByTagName("button")[0].addEventListener("click", change);
      function change(event){
        // document.getElementsByTagName("button")[0].innerHTML = "YOU!"
        // console.log(event)
        // $(this).val()
        // alert($(this).val())
        // console.log($(this).val())
        var x = document.getElementById('activity').value;
        eventBlock.block[0].activity = x 
        myJSON = JSON.stringify(eventBlock)
        alert (myJSON)
        localStorage.setItem('myJSON', myJSON)
        document.getElementById('activity').innerHTML = x;
        alert (myJSON)
        // localStorage.setItem('x', x)
        // console.log(activity)
      }
      
      // x = div.textarea.val
      // console.log(x)
      // console.log($("p:nth-child(1)").value)
      // localStorage.setItem('event9AM', event9AM)
    // })

  });