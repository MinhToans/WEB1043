const img = document.querySelector(".img");

img.addEventListener("mouseover", () => {
  img.style.border = "5px solid #ccc";
  img.style.opacity = "1";
  img.style.scale = "none";
});

img.addEventListener("mouseout", () => {
  img.style.border = "none";
  img.style.opacity = "0.7";
  img.style.scale = "0.7";
});