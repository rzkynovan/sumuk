// Feature
const FaktorContent = document.getElementsByClassName('faktor-content'),
FaktorHeader = document.querySelectorAll('.faktor-header')
function toggleFaktor(){
    let itemClass = this.parentNode.className 
    for (i=0; i < FaktorContent.length; i++){
        FaktorContent[i].className = 'faktor-content faktor-close'
    }
    if(itemClass === 'faktor-content faktor-close'){
        this.parentNode.className = 'faktor-content faktor-open'
    }
}
FaktorHeader.forEach((el)=>{
    el.addEventListener('click', toggleFaktor)
})

var swiper = new Swiper(".pencegahan-container", {

    loop:true,
    
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        568:{
            slidesPerView: 3,
            spaceBetween:32,
        }
    },
  });