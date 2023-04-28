setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();



const showNext = document.getElementById("next"),
  showPrev = document.getElementById("prev"),
  sliders = document.querySelectorAll(".slider-item");

let activeIndex = 0;

function renderSlides() {
  sliders.forEach((el, i) => {
    if (i === activeIndex) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function nextSlide() {
  if (activeIndex === sliders.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  renderSlides();
}

function prevSlide() {
  if (activeIndex === 0) {
    activeIndex = sliders.length - 1;
  } else {
    activeIndex--;
  }
  renderSlides();
}

function initSlider() {
  showNext.addEventListener("click", nextSlide);
  showPrev.addEventListener("click", prevSlide);
  renderSlides();
}

initSlider();

let startSlider = document.querySelector(".start-slider"),
  stopSlider = document.querySelector(".stop-slider");

let autoslidingId = null,
  isImgsSliding = true;

function startSliding() {
  autoslidingId = setInterval(nextSlide, 4000);
  isImgsSliding = true;
}

function stopSliding() {
  clearInterval(autoslidingId);
  isImgsSliding = false;
}

startSlider.addEventListener("click", startSliding);
stopSlider.addEventListener("click", stopSliding);

initSlider();

const sliderImg = document.querySelector(".slider-item img");

sliderImg.addEventListener("mouseenter", function () {
  if (isImgsSliding === true) {
    stopSliding();
  }
});
sliderImg.addEventListener("mouseleave", function () {
  if (isImgsSliding === false) {
    startSliding;
  }
});


const dots = document.querySelectorAll(".dot");

function initDots() {
  dots.forEach((dot, i) => {
    activeIndex = i;
    renderSlides();
  });
}
dots.addEventListener("click", initDots);



