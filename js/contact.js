document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("yfKRCmAWWeROdq88p"); // Your EmailJS User ID

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const serviceID = "service_il60tmf"; // Your EmailJS Service ID
        const templateID = "template_1gef6n4"; // Your EmailJS Template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                document.getElementById("status-message").innerText = "Message sent successfully!";
                document.getElementById("contact-form").reset();
            })
            .catch((error) => {
                document.getElementById("status-message").innerText = "Failed to send message. Please try again.";
                console.error("EmailJS Error:", error);
            });
    });
});
