const insertActive = document.querySelector(".page--mattepainting");
const toggleShowcase = document.querySelector(".showcase");

insertActive.addEventListener("click", () => {
	toggleShowcase.classList.toggle("active");
});

export default toggleShowcase;
