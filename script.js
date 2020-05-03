// load document
$(document).ready(function() {
    event.preventDefault();
    // display current time and date from moments
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // save user input for certain time
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    

})






// save items to local storage

// load data from local storage?

// check over time blocks