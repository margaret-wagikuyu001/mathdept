const contactForm =
document.getElementById("ContactForm");

contactForm.addEventListener("submit",function(event) {
    event.preventDefault();
    
    const name=
    document.getElementById("name").value.trim();

    const email=
    document.getElementById("email").value.trim();

    const subject=
    document.getElementById("subject").value.trim();

    const message=
    document.getElementById("message").value.trim();

    if (name===""|| email===""|| subject===""|| message===""){

        document.getElementById("formResponse").textContent=
        "Please fill in all the fields.";
    }else{
        document.getElementById("formResponse").textContent=
        "Thankyou,"+name+
        "! Your enquiry has been recorded.";

        contactForm.reset();
    }

});
