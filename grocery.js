let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click',() =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}

let countdate = new Date('september 20 ,2024 00:00:00').getTime();

function countdown(){

    let now = new Date().getTime();
    gap = countdate-now;

    let second = 1000;
    let minute = second*60;
    let hour = minute*60;
    let day = hour*24;

    let d = math.floor(gap / (day));
    let h = math.floor((gap % (day)) / (hour));
    let m = math.floor((gap % (hour)) / (minute));
    let s = math.floor((gap % (minute)) /(second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    countdown();
},1000)