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

})










// check over time blocks