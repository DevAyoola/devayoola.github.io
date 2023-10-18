const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

const profileCard = document.querySelector(".profile-card");
const overlay = document.querySelector(".overlay");
const btnCloseProfile = document.querySelector(".close-profile");

if (navbarToggler.collapse === false) {
	navbarCollapse.insertAdjacentHTML(
		"afterend",
		`<button class="face-icon show-profile"><img src="./img/face_FILL0_wght400_GRAD0_opsz24.svg" class="me-2" /></button>`
	);
} else {
	navbarCollapse.insertAdjacentHTML(
		"beforeend",
		`<button class="face-icon show-profile"><img src="./img/face_FILL0_wght400_GRAD0_opsz24.svg" class="me-2 pt-2" /></button>`
	);
}

const btnOpenProfile = document.querySelector(".show-profile");

const openProfile = function () {
	profileCard.classList.remove("hidden");
	overlay.classList.remove("hidden");
	navbar.classList.remove("fixed-top");
	document.onscroll = false;
};

const closeProfile = function () {
	profileCard.classList.add("hidden");
	overlay.classList.add("hidden");
	navbar.classList.add("fixed-top");
};

btnOpenProfile.addEventListener("click", openProfile);

btnCloseProfile.addEventListener("click", closeProfile);

overlay.addEventListener("click", closeProfile);

/*document.addEventListener("keydown", function (e) {
	console.log(e);
	if (e.key === "Enter" && !profileCard.classList.contains("hidden")) {
		closeProfile();
	}
});
*/
