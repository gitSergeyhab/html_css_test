const slide = document.querySelector('img.slider');
const sliderImgSrc = ["img/slider_perforators.jpg", "img/slider_drill.jpg"];
let slide_id = 0

slide.addEventListener('click', () => {
    if (slide_id < sliderImgSrc.length-1) {
        slide_id++;
    } else {
        slide_id = 0
    };
    slide.setAttribute('src', sliderImgSrc[slide_id]);
})