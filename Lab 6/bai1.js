window.addEventListener("load", function () {
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const next = document.querySelector(".slider-next");
    const prev = document.querySelector(".slider-prev");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let postionX = 0;
    let index = 0;
    next.addEventListener("click", function () {
      handleChangeSlide(1);
    });
    prev.addEventListener("click", function () {
      handleChangeSlide(-1);
    });
  
    function handleChangeSlide(direction) {
      index = Math.max(Math.min(index + direction, sliderLength - 1), 0);
      postionX = -index * sliderItemWidth;
      sliderMain.style.transform = `translateX(${postionX}px)`;
    }
  });