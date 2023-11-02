const slider = document.querySelector(".slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let currentIndex = 0;

updateSlider(); 

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slider.childElementCount;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slider.childElementCount) % slider.childElementCount;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;

    // Disable and Enable buttons at the beginniiing and end
    if (currentIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentIndex === slider.childElementCount - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}



const imageSlider = document.querySelector(".image-slider");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
let currentSliderIndex = 0;

updateSliderDisplay(); 

nextButton.addEventListener("click", () => {
    currentSliderIndex = (currentSliderIndex + 1) % imageSlider.childElementCount;
    updateSliderDisplay();
});

prevButton.addEventListener("click", () => {
    currentSliderIndex = (currentSliderIndex - 1 + imageSlider.childElementCount) % imageSlider.childElementCount;
    updateSliderDisplay();
});

function updateSliderDisplay() {
    const slideOffset = -currentSliderIndex * 100;
    imageSlider.style.transform = `translateX(${slideOffset}%)`;

    // Disable and Enable buttons at the beginniiing and end
    if (currentSliderIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentSliderIndex === imageSlider.childElementCount - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}



function scrollToHome() {
    document.querySelector('#scroll').scrollIntoView({
        behavior: 'smooth'
    });
}

// Attach the function to the link or button click event
document.querySelector('a[href="#scroll"]').addEventListener('click', scrollToHome);


const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

