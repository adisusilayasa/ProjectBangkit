var slide1 = 1;


function showSlide(indexslide) {
  const slides = document.getElementsByClassName('carousel-imgs');
  if (indexslide > slides.length) { slide1 = 1 }
  if (indexslide < 1) { slide1 = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slide1 - 1].style.display = 'flex'
}


function nextSlide() {
  showSlide(slide1 += 1);
}

function previousSlide() {
  showSlide(slide1 -= 1);
}

window.onload = function () {
  showSlide(slide1);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}

function myFunction() {
  document.getElementById("drop").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}