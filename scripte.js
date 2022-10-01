//cursor design proparties
var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = `${dets.x}px`
  cursor.style.top = `${dets.y}px`
})


//overlay proparties
var overlay = document.querySelectorAll(".overlay");
document.querySelectorAll(".image").forEach(function (ekDiv, idx) {
  ekDiv.addEventListener("mouseover", function () {
    overlay[idx].style.opacity = 1;
    overlay[idx].style.transform = "translateY(-10px)";
  })
  ekDiv.addEventListener("mouseleave", function () {
    overlay[idx].style.opacity = 0;
    overlay[idx].style.transform = "translateY(10px)";
  })
})



// var overlay1 = document.querySelectorAll(".overlay1");
// document.querySelectorAll(".nav h1").forEach(function (ekDiv, idx) {
//   ekDiv.addEventListener("mouseover", function () {
//     overlay[idx].style.opacity = 1;
//     overlay[idx].style.transform = "translateX(90px)";
//   })
//   ekDiv.addEventListener("mouseleave", function () {
//     overlay[idx].style.opacity = 0;
//     overlay[idx].style.transform = "translateY(10px)";
//   })
// })


//GSAP proparties
gsap.from(".nav", {
  delay: 0.4,
  optcity: 0,
  duration: 1,
  y: -60

})
gsap.from(".one h1", {
  delay: 0.4,
  optcity: 0,
  duration: 1,
  y: 60

})
gsap.from(".one p", {
  delay: 0.4,
  optcity: 0,
  duration: 1,
  y: 60

})
gsap.from(".one h5", {
  delay: 0.4,
  optcity: 0,
  duration: 1,
  y: 60

})
gsap.from(".one img", {
  delay: 0.4,
  optcity: 0,
  duration: 1,
  y: 60

})
gsap.from(".wine1", {
  delay: 1.5,
  optcity: 1,
  duration: 1,
  y: 60

})
gsap.from(".container2", {
  scale: 0,
  opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: ".container2",
    markers: false,
    start: "top 80%",
    end:"top 60%"
  }
})
gsap.from(".container3 h1", {
  delay: 0.5,
  optcity: 0,
  duration: 5,
  x: -800,
  scrollTrigger: {
    trigger: ".container3",
    markers: false,
    start: "top 80%",
      end:"  top 60%"
  }

})
gsap.from(".container3 p", {
  delay: 0,
  optcity: 0,
  duration: 5,
  x: -1200,
  scrollTrigger: {
    trigger: ".container3",
    markers: false,
    start: "top 80%",
      end:"  top 60%"
  }

})

gsap.from(".container3 button",{
  scale:0,
  opacity:0,
  duration:8,
  scrollTrigger: {
    trigger: ".container3",
    markers: false,
    start: "top 80%",
      end:"  top 60%"
  }

})
gsap.from(".first  ", {
  delay: 0.,
  optcity: 0,
  duration: 5,
  y: -800,
  scrollTrigger: {
    trigger: ".first",
    markers: false,
    start: "top 80%",
      end:"  top 60%"
  }


})


gsap.from(".details1 ", {
  delay: 0.,
  optcity: 0,
  duration: 3,
  x: -800,
  scrollTrigger: {
    trigger: ".details1",
    markers: false,
    start: "top 80%",
      end:"  top 60%"
  }


}) 
//Scrolltrigger propatrties
gsap.from(".details2 ", {
  delay: 0.,
  optcity: 0,
  duration: 3,
  x: 800,
  scrollTrigger: {
    trigger: ".details2",
    markers: false,
    start: "top 80%",
      end:"  top 60%"
  }
})


//How to scroll (swiper proparties)
var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  direction: 'horizontal',
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});






















