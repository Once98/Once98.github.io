// get the carousel and its elements
const carousel = document.querySelector('[data-carousel]');
const slides = document.querySelector('[data-slides]');
const prevButton = document.querySelector('[data-carousel-button="prev"]');
const nextButton = document.querySelector('[data-carousel-button="next"]');

// set the initial active slide index
let activeSlideIndex = 0;

// update the active slide
const setActiveSlide = (index) => {
    // set the previous active slide to inactive
    slides.querySelector('[data-active]').removeAttribute('data-active');
    // set the new active slide to active
    slides.querySelectorAll('.slide')[index].setAttribute('data-active', '');
    // update the active slide index
    activeSlideIndex = index;
}

// move to the previous slide
const prevSlide = () => {
    // get the index of the previous slide
    const prevIndex = activeSlideIndex === 0 ? slides.children.length - 1 : activeSlideIndex - 1;
    // set the previous slide to active
    setActiveSlide(prevIndex);
}

// move to the next slide
const nextSlide = () => {
    // get the index of the next slide
    const nextIndex = activeSlideIndex === slides.children.length - 1 ? 0 : activeSlideIndex + 1;
    // set the next slide to active
    setActiveSlide(nextIndex);
}

// add event listeners for the previous and next buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// set the initial active slide
setActiveSlide(activeSlideIndex);
