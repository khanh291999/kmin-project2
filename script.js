//navbar event scroll
var scrollTemp = 0;
var navdown = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function(event) {
  //console.log(document.documentElement.scrollTop);
  var scrollY = document.documentElement.scrollTop;
  if (scrollY > scrollTemp) {
    console.log("Di xuong");
    navdown.style.top = "-10%";
  } else {
    console.log("Di len");
    navdown.style.top = "10px";
  }
  scrollTemp = scrollY;
});

//navbar screen animation
var slidesindex = 0;
var slides = document.getElementsByClassName("slides");

function appearslide() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[slidesindex].style.opacity = 1;
}
appearslide();

function nextslide(number) {
  if (slidesindex >= slides.length - 1) {
    slidesindex = 0;
  } else {
    slidesindex++;
  }
  appearslide();
}

setInterval(nextslide, 4000);

//tab slide header
var tabContents = document.querySelectorAll(".tab-content div");
var tabHeaders = document.querySelectorAll(".tab-header h5");
tabHeaders[0].addEventListener("click", function() {
  showTab(0);
});
tabHeaders[1].addEventListener("click", function() {
  showTab(1);
});
function showTab(index) {
  tabContents.forEach(function(tab) {
    tab.style.display = "none";
  });
  tabContents[index].style.display = "block";
}
showTab(0);
