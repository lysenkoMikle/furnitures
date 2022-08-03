// Custom Scripts
// Custom scripts
import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

window.addEventListener("click", (e) => {
	let el = e.target;

	if (
		el.classList.contains("drop") ||
		el.classList.contains("dropdown-arrow")
	) {
		dropdown(el.closest(".dropdown"));
	} else if (
		el.classList.value !== "dropdown-arrow" ||
		el.classList.value !== "drop"
	) {
		dropdownRemove();
	}
});
function dropdown(item) {
	item.classList.toggle("active");
}
function dropdownRemove() {
	let menu = document.querySelector(".dropdown");
	menu.classList.remove("active");
}
// ====burgerMenu====
function burgerMenu() {
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".menu");
	const body = document.querySelector("body");
	burger.addEventListener("click", () => {
		if (!menu.classList.contains("active")) {
			menu.classList.add("active");
			burger.classList.add("active-burger");
			body.classList.add("locked");
		} else {
			menu.classList.remove("active");
			burger.classList.remove("active-burger");
			body.classList.remove("locked");
		}
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 1209.98) {
			menu.classList.remove("active");
			burger.classList.remove("active-burger");
			body.classList.remove("locked");
		}
	});
}
burgerMenu();

function addZero(num) {
	return num > 9 ? num : " 0" + num;
}
const swiper = new Swiper(".swiper", {
	loop: true,
	// If we need pagination
	pagination: {
		el: ".hero__counter",
		type: "fraction",
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero,
	},
	// Navigation arrows
	navigation: {
		nextEl: ".button-next",
		prevEl: ".button-prev",
	},

	slidesPerView: 1,
});

const swiperAdv = new Swiper(".advantages__swiper", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,

	// Navigation arrows
	navigation: {
		nextEl: ".button-next-advantages",
		prevEl: ".button-prev-advantages",
	},

	//   // Responsive breakpoints
	breakpoints: {
		// when window width is >= 990px
		990: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
});

// ----------smooth scroll------------

const up = document.querySelector(".page-up");

window.addEventListener("scroll", function () {
	if (window.scrollY > 200) {
		up.classList.add("show");
	} else {
		up.classList.remove("show");
	}
});
up.addEventListener("click", function (e) {
	e.preventDefault();
	const id = up.getAttribute("href");
	const element = document.querySelector(id);
	window.scroll({
		top: element.offsetTop,
		behavior: "smooth",
	});
});

// Modal
function bindModal(trigger, modal, close) {
	(trigger = document.querySelector(trigger)),
		(modal = document.querySelector(modal)),
		(close = document.querySelector(close));

	const body = document.body;
	const lockPaddingVal = window.innerWidth - body.offsetWidth + "px";

	trigger.addEventListener("click", (e) => {
		e.preventDefault();
		modal.style.display = "flex";
		body.classList.add("locked");
		bodyLock();
	});
	close.addEventListener("click", () => {
		modal.style.display = "none";
		body.classList.remove("locked");
		bodyUnLock();
	});
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			modal.style.display = "none";
			body.classList.remove("locked");
			bodyUnLock();
		}
	});
	function bodyLock() {
		body.style.paddingRight = lockPaddingVal;
	}

	function bodyUnLock() {
		body.style.paddingRight = "0px";
	}
}

bindModal(".cart__btn", ".modal__wrapper", ".modal__close");

 AOS.init();