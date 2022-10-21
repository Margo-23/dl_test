window.onload = function() {

  const width = window.innerWidth;
  if (width > 450){
    let pageSwiper =  new Swiper('.page',{
      wrapperClass: 'page__wrapper',
      slideClass: 'page__screen',
      direction: 'vertical',
      sliderPerView: 'auto',
      parallax: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      watchOverflow: true,
      speed: 800,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'page__bullet'
      },
    })
  } 


let cloudItem = document.querySelector('#cloud');
let x = 0;
setTimeout(()=>{
  cloudItem.classList.add('show');
},3000)


let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger && burger.addEventListener('click', ()=>{
  burger.classList.toggle('open');
  menu.classList.toggle('open');
})

let tabsList = document.querySelectorAll('[data-show]');
let tabsInfoList = document.querySelectorAll('.screen__info');

if(true){
  for(let i =0; i< tabsList.length; i++){
    tabsList[i].addEventListener('click', ()=>{
      for(let j=0; j<tabsInfoList.length; j++){
        tabsInfoList[j].classList.remove('show');
      }
      let id = tabsList[i].getAttribute('data-show');
      document.getElementById(id).classList.add('show');
      console.log('ss');
    })
  }
}


const select1 = new ItcCustomSelect('#select-1');


};
