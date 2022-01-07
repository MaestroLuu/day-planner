var time = moment();
var dateDisplay = $('#currentDay');
var saveBtn = $(".saveBtn");
var currentTime = time.format("k");

displayDate();

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

    if (localStorage.getItem(newValue)) {
        $(this).class("description").text(localStorage.getItem(newValue));
    }
    

    // if (newValue == localStorage.key(newValue)) {
    //     $(this).children.eq(1).text(localStorage.getItem(newValue));
    // }


    // if newValue = key from localStorage
    // pull value and add the text to corresponding id

    // if (localStorage.key == newValue) {
    //     // $(this).text(localStorage.getItem(newValue));
        
    // }
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





