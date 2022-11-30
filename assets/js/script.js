//get elements from local storeage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

//set today's date
var todayDate = dayjs().format("dddd, MMMM D");
$("#currentDay").html(todayDate);

// saveBtn click listener
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  // Save in local storage
  localStorage.setItem(time, text);
  feedback();
});

function colorTask() {
  // get current hour
  var currentHour = dayjs().format("HH");

  // loop over each time-block
  $(".time-block").each(function () {
    var timeId = parseInt($(this).attr("id").split("hour-")[1]);
    console.log(timeId);
    console.log(currentHour);

    //less than current time add "past"
    if (timeId < currentHour) {
      $(this).addClass("past");
    } //equal to current time add "present"
    else if (timeId == currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } //greater than current time add "future"
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

colorTask();

function feedback() {
  var feedbackEl = document.getElementById("feedback");
  var hearp = document.createElement("p");
  feedbackEl.innerHTML = "Appointment Added to local Storage &#10004;&#65039;";
}
