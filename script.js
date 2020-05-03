// load document
$(document).ready(function() {
    event.preventDefault();
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
    
}
})










// check over time blocks