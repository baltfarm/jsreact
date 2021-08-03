'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabContant = document.querySelectorAll('.tabcontent'),
          tabHeaderAll = document.querySelector('.tabheader__items'),
          tabHeader = document.querySelectorAll('.tabheader__item');

    function hide() {
        tabContant.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show");
        });
    };

    function show(i=0) {
        tabContant[i].classList.remove("hide");
        tabContant[i].classList.add("show");
    };

    hide();
    show();

//console.log('work');

tabHeaderAll.addEventListener('click', (event) => {
    const target = event.target;    
    if(target && target.classList.contains('tabheader__item')) {
        tabHeader.forEach((item, i) => {
            if(target == item) {
                hide();
                show(i);
            }
        });
    };    
});

// Timer

// const deadLine = new Date('2021-08-25');
// let nowTime = new Date();
// let allTime = nowTime.getTime();
//     let   timer1, timer2, timer3, timer4;

//     const timerBlocks = document.querySelectorAll('.timer__block span');

//     function timer() {       
    
//         nowTime = new Date();
//         allTime = nowTime.getTime();
//         timer1 = Math.floor((deadLine-allTime) / (1000 * 60 * 60 * 24));
//         timer2 = Math.floor((deadLine-allTime) / 1000 / 60 / 60 % 24);
//         timer3 = Math.floor((deadLine-allTime) / 1000 / 60 % 60);
//         timer4 = Math.floor((deadLine-allTime) / 1000 % 60);

//     // timerBlocks.forEach((item, i) => {
//     // item.innerHTML = timer${i};
//     // console.log(item.innerHTML);
//     // })

//         timerBlocks[0].innerHTML = timer1;
//         timerBlocks[1].innerHTML = timer2;
//         timerBlocks[2].innerHTML = timer3;
//         timerBlocks[3].innerHTML = timer4;

//         //setTimeout(timer(), 1000);
//         setTimeout(function(){ 
//             timer();
//             setTimeout(timer(),1000);
//         }, 1000);
//     };

//     timer();

//-----timer 2 correct

const deadLine = '2021-08-21T18:11:12';
let   timeInterval;

function getTimeRemaining(endTime) {
    const time = (new Date(endTime) - new Date()) / 1000,
        timerDays = Math.floor(time / 60 / 60 / 24),
        timerHours = Math.floor(time / 60 / 60 % 24),
        timerMinuts = Math.floor(time / 60 % 60),
        timerSeconds = Math.floor(time % 60);
    return {
        'total': time,
        'days': timerDays,
        'hours': timerHours,
        'minuts': timerMinuts,
        'seconds': timerSeconds
    };
};

function setClock(selector=".timer__block span") {
    const timeCalculation = getTimeRemaining(deadLine),
        timerBlocks = document.querySelectorAll(selector); 
 
        function getZero(num) {
        if(num <= 9 && num >= 0) {
            return `0${num}`;            
        } else {
            return num;
        };
        };

        timerBlocks[0].innerHTML = getZero(timeCalculation.days);
        timerBlocks[1].innerHTML = getZero(timeCalculation.hours);
        timerBlocks[2].innerHTML = getZero(timeCalculation.minuts);
        timerBlocks[3].innerHTML = getZero(timeCalculation.seconds);
        if(timeCalculation.total <= 1) {
            clearInterval(timeInterval);
        };
        //console.log(timeCalculation.seconds);    

};
function work() { 
    timeInterval = setInterval(setClock, 1000);               
};

setClock();
work();


// Modal Window

const btn = document.querySelectorAll('[data-open]'),
    modalClose = document.querySelector('.modal__close'),
    modalWindow = document.querySelector('.modal');

    function modalOpen() {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(openModalByTime);
        document.removeEventListener('scroll', modalScrollOpen);
    };

    function modalWClose() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = "";
    };

    function modalScrollOpen() {
        if(document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
            modalOpen();
            document.removeEventListener('scroll', modalScrollOpen);
        };

    };


    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            modalOpen();
            console.log("work");
        });
    });

    modalClose.addEventListener('click', (e) => {
        modalWClose();
    });
    modalWindow.addEventListener('click', (e) => {
        console.log(e.target);
        if(e.target === modalWindow) {
            modalWClose();
        };
    });
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modalWindow.classList.contains('show')) {
            modalWClose();
        };
    });
    
    const openModalByTime = setInterval(modalOpen, 5000);

    document.addEventListener('scroll', modalScrollOpen);
 });