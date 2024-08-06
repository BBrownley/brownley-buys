const currImageEl = document.getElementById("curr-image");
const prevImageEl = document.getElementById("prev-image");

const prevImageBtn = document.getElementById("prev-btn");
const nextImageBtn = document.getElementById("next-btn");

const imageUrlPaths = ["./img/DSC06884.JPG", "./img/DSC06885.JPG", "./img/DSC06886.JPG"];
let currentImg = 0;

const slideshowNextImg = () => {
  currentImg = (currentImg + 1) % imageUrlPaths.length;
  loadImg();
};

const slideshowPrevImg = () => {
  currentImg = (currentImg + imageUrlPaths.length - 1) % imageUrlPaths.length;
  loadImg();
};

const loadImg = () => {
  currImageEl.style.backgroundImage = `url(${imageUrlPaths[currentImg]})`;
};

prevImageBtn.addEventListener("click", slideshowPrevImg);
nextImageBtn.addEventListener("click", slideshowNextImg);

loadImg();
