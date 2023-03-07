const playOnHover = document.querySelectorAll(".showcase__mattepainting");

playOnHover.forEach((mattepainting) => {
  mattepainting.addEventListener("mouseover", () => {
    mattepainting.play();
  });

  mattepainting.addEventListener("mouseout", () => {
    mattepainting.pause();
    mattepainting.currentTime = 0.99;
  });
});

export default playOnHover;
