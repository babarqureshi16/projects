
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize the Swiper instance for the auto-slider
    var autoSlider = new Swiper(".bg-slider", {
        loop: true,  // Enable infinite loop
        autoplay: {
            delay: 5000,  // Delay between slides in milliseconds
        },
        pagination: {
            el: ".swiper-pagination",  // Add pagination bullets
            clickable: true,  // Allow clicking on bullets to navigate to a slide
        },
        
    });
});


// // Set the date we're counting down to
var countDownDate = new Date("Oct 8, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

let 