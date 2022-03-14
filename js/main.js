const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("current-date").innerHTML = new Date().toLocaleDateString('en-US', options);
document.getElementById("header-date").innerHTML = new Date().toLocaleDateString('en-US', options);

// This function handles the menu button toggles to display and remove the menu
function toggleMenu() {
    document.getElementById("primary-navigation").classList.toggle("open");
}

const x = document.getElementById("nav-btn");
x.onclick = toggleMenu;

// Code for greetings banner
const d = new Date();
let day = d.getDay();
greeting = document.getElementById("meeting-banner");
if (day == 1 || day == 2) {
    greeting.classList.add("True");
    greeting.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}