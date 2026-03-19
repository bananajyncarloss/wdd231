const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Fetch failed: " + response.status);
        }

        const data = await response.json();
        console.log(data); // 👈 DEBUG

        displayMembers(data.members);

    } catch (error) {
        console.error("ERROR:", error);
    }
}

function displayMembers(members) {
    container.innerHTML = "";
    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    });
}

getMembers();


// GRID / LIST TOGGLE

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});


// FOOTER INFO

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;