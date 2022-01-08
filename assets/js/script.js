var time = moment();
var dateDisplay = $('#currentDay');
var saveBtn = $(".saveBtn");
var currentTime = time.format("k");

displayDate();

// runs through each div with ".time-block" and reassigns id to numeric value
$(".time-block").each(function() {
    var hour = $(this).attr("id").split("-");
    var newId = $(this).attr("id", hour[1]);
    var newValue = parseInt($(this).attr("id"));

    if (newValue == currentTime) {
         $(this).addClass("present");
    } else if (newValue < currentTime) {
        $(this).addClass("past");
    } else {
        $(this).addClass("future");
    }
    
    // retrieves text from prior entry and displays them on web application
    var textValue = localStorage.getItem($(this).attr("id"));
    $(this).children().eq(1).text(textValue);
});

saveBtn.on("click", function(event) {
    var hour = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
});

function displayDate() {
    var date = time.format("dddd, MMMM Do");
    dateDisplay.text(date);
}