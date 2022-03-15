const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
    img.removeAttribute("data-src");
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
});

// Display the amount of time in days
//  Using local storage.

// Get the first day.
const day1 = new Date();
const firstDay = day1.getDay();

// Set firstday in local storage
localStorage.setItem('firstDay', firstDay);
console.log(localStorage)
console.log(localStorage.getItem('firstDay'));

// Get the current day of the user visit
const userDay = new Date();
let userDays = userDay.getDay();

// Find the difference between the days.
let fd = localStorage.getItem('firstDay');
console.log(userDays - parseInt(fd))

// Get the element in html and set its textContent to days elapsed.
let daysElapsed = document.querySelector('.last-visited');
daysElapsed.textContent = userDays - parseInt(fd);