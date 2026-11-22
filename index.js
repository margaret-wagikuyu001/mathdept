
// Select the navigation elements
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Open and close the navigation menu
menuToggle.addEventListener("click", function () {

    // Toggle the is-open class
    const isOpen = mainNav.classList.toggle("is-open");

    // Update accessibility information
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Update the button label
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    // Change the menu icon
    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link
mainNav.addEventListener("click", function (event) {

    if (event.target.tagName === "A") {

        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    }
});
// Close menu using the Escape key
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        mainNav.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.textContent = "☰";

    }

});
//ANIMATED STATISTICS

const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter) {

    const target = Number(counter.dataset.target);
    let current = 0;

    const increment = Math.ceil(target / 50);

    const timer = setInterval(function() {

        current += increment;

        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        counter.textContent = current;

    }, 30);

});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please complete all fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name + ". Your message has been prepared.";

    contactForm.reset();

});