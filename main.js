//Vivald JS Example

//When Summer Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSummer);

//Event Functions
function setSummer() {
    console.log('set summer');
    // - change concerto text
    document.getElementById('season-text').innerHTML = 'Summer';
    // - change main image
    Document.getElementById('main-img').src = "images/summer.jpg";
    // - change page background
    document.body.style.backgroundColor = '#1BA848';
    // - change audio source
    // - update active border on buttons 
}
