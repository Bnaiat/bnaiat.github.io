document.addEventListener('DOMContentLoaded', function() {
  var app = new onePageScroll({
    el: document.querySelectorAll('.navigate'),
    time: 500,
    loop: false
  })
  
  const menuButtons = document.querySelectorAll(".menu-button")
  const pages = document.querySelectorAll('.navigate');
  const colors = ["color-white","color-drum","color-calc","color-clock", "color-black"]

  menuButtons.forEach(function (item, index){
    item.addEventListener("click", function(e){
      app.goto(index+1);
    })
  })

  pages.forEach(function(item,index) {
    item.addEventListener("inview", function(){
      menuButtons.forEach(function(el){
        for(let i=0; i<colors.length; i++){
          el.classList.remove(colors[i])
        }
        el.classList.add(colors[index]);
      })
      menuButtons[index].classList.add("active");
    })
    item.addEventListener("outview", function(){
      menuButtons[index].classList.remove("active");
    })
  });

  const projPages = document.querySelectorAll('.animate');
  const content = document.querySelectorAll('.content-in');
  const icons = document.querySelectorAll('.contact');

  projPages.forEach((element,index) => {
    element.addEventListener('inview',function(){
      content[index].classList.remove('out-to-left','out-to-right');
      if(index%2==0){
        content[index].classList.add('in-from-left')
      }else{
        content[index].classList.add('in-from-right')
      }
      if(element.id==="about-page"){
        for(let i=0; i<icons.length; i++){
          icons[i].classList.add('in-from-top-d' + i);
        }
      }
    })
    element.addEventListener('outview', function(){
      content[index].classList.remove('in-from-left','in-from-right');
      if(index%2==0){
        content[index].classList.add('out-to-left')
      }else{
        content[index].classList.add('out-to-right')
      }
      if(element.id==="about-page"){
        for(let i=0; i<icons.length; i++){
          icons[i].classList.remove('in-from-top-d' + i);
        }
        icons.forEach(item => {
          item.classList.add('out-to-left')
        })
      }
    })
  });
})