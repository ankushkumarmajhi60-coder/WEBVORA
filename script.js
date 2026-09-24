
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", function () {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});

buttons[1].addEventListener("click", function () {
    document.querySelector("#portfolio").scrollIntoView({
        behavior: "smooth"
    });
})
// ===== ABOUT BUTTON =====
const aboutButton = document.querySelector("#about button");

aboutButton.addEventListener("click", function () {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});
// ===== PRICING BUTTONS =====
const pricingButtons = document.querySelectorAll(".pricing-card button");

pricingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});
// ===== PORTFOLIO BUTTONS =====
const portfolioButtons = document.querySelectorAll(".portfolio-card button");

portfolioButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});
// ===== CONTACT FORM =====
// ===== CONTACT FORM =====
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function () {
    const status = document.querySelector("#form-status");

    status.textContent = "Sending your message...";
});