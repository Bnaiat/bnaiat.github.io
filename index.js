document.addEventListener('DOMContentLoaded', function() {
  var app = new onePageScroll({
    el: document.querySelectorAll('.navigate'),
    time: 500,
    loop: false
  })
  
  var menuButtons = document.querySelectorAll(".menu-button")
  let element = document.querySelectorAll('.navigate');

  menuButtons.forEach(function (item, index){
    item.addEventListener("click", function(e){
      app.goto(index+1);
    })
  })

  element.forEach(function(item,index) {
    item.addEventListener("inview", function(){
      switch(index){
        case 0:
          menuButtons.forEach(function(item){
            item.classList.remove("color-drum","color-calc","color-clock", "color-black")
            item.classList.add("color-white")
          })
        break;
        case 1:
          menuButtons.forEach(function(item){
            item.classList.remove("color-white","color-calc","color-clock", "color-black")
            item.classList.add("color-drum")
          })
        break;
        case 2:
          menuButtons.forEach(function(item){
            item.classList.remove("color-white","color-drum","color-clock", "color-black")
            item.classList.add("color-calc")
          })
        break;
        case 3:
          menuButtons.forEach(function(item){
            item.classList.remove("color-white","color-drum","color-calc", "color-black")
            item.classList.add("color-clock")
          })
        break;
        default:
          menuButtons.forEach(function(item){
            item.classList.remove("color-white")
            item.classList.add("color-black")
          })
        break;
      }
      menuButtons[index].classList.add("active");
    })
    item.addEventListener("outview", function(){
      menuButtons[index].classList.remove("active");
    })
  });


  const projects = document.querySelectorAll('.animate');
  const aboutDrum = document.querySelector('#drum-about');
  const aboutCalc = document.querySelector('#calc-about');
  const aboutClock = document.querySelector('#clock-about');
  const aboutMe = document.querySelector('#about-me-text');
  const mail = document.querySelector('.fa-envelope');
  const git = document.querySelector('.fa-github');
  const fb = document.querySelector('.fa-facebook');
  const ln = document.querySelector('.fa-linkedin');
  const icons = document.querySelectorAll('.contact');


  projects.forEach(function(item,index){
    item.addEventListener('inview', function(){
      switch(index){
        case 0:
          aboutDrum.classList.remove('out-to-left');
          aboutDrum.classList.add('in-from-left');
        break;
        case 1:
          aboutCalc.classList.remove('out-to-right')
          aboutCalc.classList.add('in-from-right');
        break;
        case 2:
          aboutClock.classList.remove('out-to-left');
          aboutClock.classList.add('in-from-left');
        break;
        case 3:
          aboutMe.classList.remove('out-to-left');
          aboutMe.classList.add('in-from-left');
          mail.classList.add('in-from-top');
          git.classList.add('in-from-top-d1');
          fb.classList.add('in-from-top-d2');
          ln.classList.add('in-from-top-d3');
          icons.forEach(function(item){
            item.classList.remove('out-to-right')
          })
        default: 
        break;
      }
    })
    item.addEventListener('outview', function(){
      switch(index){
        case 0:
          aboutDrum.classList.remove('in-from-left');
          aboutDrum.classList.add('out-to-left');
        break;
        case 1:
          aboutCalc.classList.remove('in-from-right');
          aboutCalc.classList.add('out-to-right');
        break;
        case 2:
          aboutClock.classList.remove('in-from-left');
          aboutClock.classList.add('out-to-left');
        break;
        case 3:
          aboutMe.classList.remove('in-from-left');
          aboutMe.classList.add('out-to-left');
          mail.classList.remove('in-from-top');
          git.classList.remove('in-from-top-d1');
          fb.classList.remove('in-from-top-d2');
          ln.classList.remove('in-from-top-d3');
          icons.forEach(function(item){
            item.classList.add('out-to-right')
          })
        default: 
        break;
      }
    })
  })


})

console.log(window.innerWidth)