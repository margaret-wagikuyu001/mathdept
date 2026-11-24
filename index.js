const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    mainNav.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            mainNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            mainNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        }
    });
}

const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter) {
    const target = Number(counter.dataset.target);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 50));

    const timer = setInterval(function() {
        current += increment;

        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        counter.textContent = String(current);
    }, 30);
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const formMessage =
        document.getElementById("formMessage") ||
        document.getElementById("formResponse");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        if (!name || !email || !subject || !message) {
            return;
        }

        if (!name.value.trim() || !email.value.trim() ||
            !subject.value.trim() || !message.value.trim()) {
            if (formMessage) {
                formMessage.textContent = "Please complete all fields.";
                formMessage.className = "form-error";
            }
            return;
        }

        if (formMessage) {
            formMessage.textContent =
                "Thank you, " + name.value.trim() + ". Your message has been prepared.";
            formMessage.className = "form-success";
        }

        contactForm.reset();
    });
}
