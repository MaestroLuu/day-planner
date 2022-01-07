var time = moment("1:23PM", "h:mmA");
var dateDisplay = $('#currentDay');
var saveBtn = $(".saveBtn");
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
var hourArray = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
var currentTime = time.format("k");

$(".time-block").each(function() {
    var hour = $(this).attr("id").split("-");
    var newId = $(this).attr("id", hour[1]);

    if (parseInt($(this).attr("id")) == currentTime) {
         $(this).addClass("present");
    }
    
    console.log(parseInt($(this).attr("id")));

    // 
    //all logic inside here using $(this)
});

// checking value type


// function test() {
//     for (i = 0; i < hourArray.length; i++) {
        
//         // remember to change out hourArray[4].text to testTime
//         if (hourArray[i].children().eq(0).text() === currentTime) {
//             hourArray[i].addClass("present");
//         } else if (hourArray[i] < hourArray[4].text()) {
//             hourArray[i].addClass("past");
//         } else {
//             hourArray[i].addClass("future");
//         }
//     }
// }

// test();
displayDate();
// displayTasks();

// just try one first
// assign a value to each hour
// designated assignedHour from moments
// if presentTime = assignedHour
// present class is appended
// ELSE if presentTime > than assignedHour

saveBtn.on("click", function(event) {
    var hour = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
});

function displayDate() {
    var date = time.format("dddd, MMMM Do");
    dateDisplay.text(date);
}





