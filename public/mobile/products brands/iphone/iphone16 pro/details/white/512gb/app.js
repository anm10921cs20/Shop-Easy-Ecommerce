//app nav bars container
//display change method

//display function event

var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
   window.history.back();
})


// page vidio open

const vidoplay = document.getElementById('video-play');

vidoplay.addEventListener('click', () => {
    const videoBlur = document.getElementById('blur-container');
    const videocontainer = document.querySelector('.video-container');

    videoBlur.classList.toggle('blur-container-active');
    videocontainer.style.display = "block";
    
})
const videoBlur = document.getElementById('blur-container');
videoBlur.addEventListener('click', () => {
    videoBlur.classList.remove('blur-container-active');
    const videocontainer = document.querySelector('.video-container');
    videocontainer.style.display = "none";
})