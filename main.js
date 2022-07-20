// navbar toggle
document.querySelector('.navbar-toggler').onclick = ()=>{
    document.querySelector('.navbar .links').classList.toggle('open');
};

// Make Navbar Fixed while scrolling and arrow-up

let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
    if(window.pageYOffset > '300'){
        navbar.classList.add('scrolling');
    }else{
        navbar.classList.remove('scrolling');
    } 
});

//Home Slider
function changeImg(){
    sliderItems = document.querySelectorAll('.slider-item');
    sliderItems.forEach(element => {
        element.classList.toggle('active');
    });
}
setInterval(changeImg, 4000);

//Testimony Carousel
var testimony =  document.querySelector('.testimony');
var active = document.querySelector('.carousel-item.active');

var carouselTtem = document.querySelectorAll('.carousel-item');
carouselTtem.forEach(item=>{
    
});
// add class ccarousel
for(let i = 0 ; i<carouselTtem.length ; i++){
    carouselTtem[i].classList.add('carousel'+(i+1));
}

//create bullets
var bullets = document.querySelector('.bullets');
for(let i = 0 ; i<carouselTtem.length ; i++){
    var bullet =  document.createElement('span');
    bullet.classList.add('bullet');
    bullet.appendChild(document.createElement('span'));
    bullet.setAttribute('data-carousel','carousel'+(i+1));
    bullets.appendChild(bullet);
    if(i == 0){
        bullet.classList.add('active');
    }
}

var bulletSpan = document.querySelectorAll('.bullet');
bulletSpan.forEach(bullet=>{
    bullet.addEventListener('click', ()=>{
        bulletSpan.forEach(el=>{
            el.classList.remove('active');
        });
        bullet.classList.add('active');
        carouselTtem.forEach(item=>{
            item.classList.remove('active');
            if(item.classList.contains(bullet.dataset.carousel)){
                item.classList.add('active');
            }
        });
    });
});

// Scroll Animation

const scrollElements = document.querySelectorAll(".js-scroll");
window.addEventListener('scroll', ()=>{
    scrollElements.forEach(el=>{
        if(el.getBoundingClientRect().top <= window.innerHeight){
            console.log(el);
            el.classList.add('scrolled');
        }
    })
})


