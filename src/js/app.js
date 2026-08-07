import { results } from "./data.js";

const h1 = document.querySelector(".hero h1");
h1.innerText = "New title";
const heroSection = document.querySelector(".hero"),
	userName = heroSection.querySelector(".user-name"),
	userLastName = heroSection.querySelector(".user-last-name"),
	avatar = heroSection.querySelector(".avatar"),
	userChangeBtn = document.getElementById("change-user"),
	body = document.querySelector("body"),
	changeThemeBtn = document.getElementById("change-theme"),
	loadResults = document.getElementById("load-results"),
	resultsSection = document.querySelector("#results");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
	btn.style.backgroundColor = "lightblue";
});

function changeUserInfo(user) {
	const { name, lastName, img } = user;

	userName.innerText = name;
	userLastName.innerText = lastName;
	avatar.setAttribute("src", img);
	avatar.setAttribute("alt", "Nino");
}

function changeTheme(event) {
	event.stopPropagation();
	// h1.style.color = "red";
	// h1.style.backgroundColor = "black";
	console.log("change theme", event.target);
	body.classList.toggle("dark");
}

// changeUserInfo();
// changeTheme();

changeThemeBtn.addEventListener("click", changeTheme);

userChangeBtn.addEventListener(
	"click",
	() => {
		// console.log("click");
		const user = {
			name: "Nino",
			lastName: "2222",
			img: "src/img/2.jpg",
		};
		changeUserInfo(user);
	},
	{ once: true, capture: false },
);

// heroSection.addEventListener("click", () => {
// 	console.log("section click");
// });

loadResults.addEventListener(
	"click",
	(e) => {
		// e.stopPropagation();
		const div = document.createElement("div");
		div.classList.add("cards-list");

		const html = results
			.map((flight) => {
				return `<div class="card">
        <img src="${flight.content.image.url}" alt="${flight.content.location.name}">
      </div>`;
			})
			.join("");

		div.innerHTML = html;

		// console.log(html);
		resultsSection.insertAdjacentElement("beforeend", div);

		// div.addEventListener('click', ()=>{})
	},
	{ once: true },
);
