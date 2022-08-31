const rates = document.querySelectorAll(".rate");
const submitBtn = document.querySelector("button");
const intro = document.querySelector(".intro");
const modal = document.querySelector(".modal");
const choice = document.querySelector(".rate-choice");

const highlightActive = (e) => {
	rates.forEach((rate) => rate.classList.remove("active"));
	e.target.classList.add("active");
};

const proceed = () => {
	intro.style.display = "none";
	modal.style.display = "flex";
	choice.innerHTML = document.querySelector(".active").innerHTML;
};

rates.forEach((rate) => {
	rate.addEventListener("click", highlightActive);
});

submitBtn.addEventListener("click", proceed);
