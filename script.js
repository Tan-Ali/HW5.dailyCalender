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
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));


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
        $(this).removeClass("future");
        $(this).removeClass("present");
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









