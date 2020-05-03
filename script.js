// load document
$(document).ready(function() {
    
    // display current time and date from moments
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // save user input for certain time
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
// save items to local storage
        localStorage.setItem(time, text);
    })
// load data from local storage?
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));



// track hour/know what time it is

function trackHour () {
    var currentHour = moment().hour();
// loop through time blocks using each function
    $(".time-block").each(function() {
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

        console.log(hourBlock, currentHour)

        // check over time blocks
    if (hourBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else if (hourBlock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
        }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        }
    })

}
trackHour();
})









