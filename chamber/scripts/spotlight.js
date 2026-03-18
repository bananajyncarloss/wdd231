const url = "data/members.json";

async function loadSpotlights() {

const response = await fetch(url);
const data = await response.json();

let members = data.members.filter(member =>
member.membership === "Gold" || member.membership === "Silver"
);

members = members.sort(() => 0.5 - Math.random());

const spotlight = members.slice(0,3);

const container = document.getElementById("spotlight-container");

spotlight.forEach(member => {

let card = document.createElement("div");

card.innerHTML = `
<h3>${member.name}</h3>
<img src="${member.logo}" alt="${member.name}">
<p>${member.address}</p>
<p>${member.phone}</p>
<a href="${member.website}" target="_blank">Visit Website</a>
<p>${member.membership} Member</p>
`;

container.appendChild(card);

});

}

loadSpotlights();