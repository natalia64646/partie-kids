function updateClock() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerHTML = new Date().toLocaleTimeString('uk');
}
setInterval(updateClock, 1000);

const dateContainer = document.querySelector('.date');
dateContainer.innerHTML = new Date().toLocaleDateString() ;
