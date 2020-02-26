//Vivald JS Example

//When season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);
document.getElementById('springBtn').addEventListener('click', setSpring);

//Event Functions
function setSummer() {
    // - change concerto text
    document.getElementById('season-text').innerHTML = 'Summer';

    // - change main image
    document.getElementById('main-img').src = "images/summer.jpg";

    // - change page background
    document.body.style.backgroundColor = '#1BA848';

    // - change audio source
    document.getElementById('song').src = 'songs/vivaldi-summer.mp3';

    // - update active border on buttons 
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');

    document.getElementById('summerBtn').classList.add('activeBtn')
}

//Event Functions
function setAutumn() {
    // - change concerto text
    document.getElementById('season-text').innerHTML = 'Autumn';

    // - change main image
    document.getElementById('main-img').src = "images/autumn.jpg";

    // - change page background
    document.body.style.backgroundColor = '#FE6732';

    // - change audio source
    document.getElementById('song').src = 'songs/vivaldi-summer.mp3';

    // - update active border on buttons 
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');

    document.getElementById('autumnBtn').classList.add('activeBtn')
}

//Event Functions
function setWinter() {
    // - change concerto text
    document.getElementById('season-text').innerHTML = 'Winter';

    // - change main image
    document.getElementById('main-img').src = "images/winter.jpg";

    // - change page background
    document.body.style.backgroundColor = '#1C64B9';

    // - change audio source
    document.getElementById('song').src = 'songs/vivaldi-winter.mp3';

    // - update active border on buttons 
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');

    document.getElementById('winterBtn').classList.add('activeBtn')
}

//Event Functions
function setSpring() {
    // - change concerto text
    document.getElementById('season-text').innerHTML = 'Spring';

    // - change main image
    document.getElementById('main-img').src = "images/spring.jpg";

    // - change page background
    document.body.style.backgroundColor = '#1C64B9';

    // - change audio source
    document.getElementById('song').src = 'songs/vivaldi-spring.mp3';

    // - update active border on buttons 
    document.getElementById('winterBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');

    document.getElementById('springBtn').classList.add('activeBtn')
}
