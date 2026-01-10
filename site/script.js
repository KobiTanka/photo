$(document).ready(function() { // Waits for all HTML to load before executing the code
    
    // Mobile Menu logic
    // When clicking the hamburger button toggle the menu
    $('.menu-toggle').click(function() {
        $('.main-menu').slideToggle();
    });

    // Accordion logic
    // When clicking on an accordion header
    $('.accordion-header').click(function() {
        
        // Toggle the content section directly below the clicked header
        $(this).next('.accordion-content').slideToggle();

        // Toggle the active class to change color and rotate arrow
        $(this).toggleClass('active');
    });

    // Contact Form Validation logic
    // Listen for the submit event on the form
    $('#contactForm').submit(function(event) {
        
        // Variable to track if the form is valid
        let isValid = true;
        
        // Get values from the input fields
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();

        // Remove old error messages from previous attempts
        $('.error-msg').remove();

        // Check if name is valid
        if(name.length < 3) {
            $('#name').after('<span class="error-msg" style="color:#e74c3c; font-size: 0.9em;">Името трябва да е поне 3 символа.</span>');
            isValid = false;
        }

        // Check if email is valid using Regex
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Test if the email matches the pattern
        if(!emailRegex.test(email)) {
            $('#email').after('<span class="error-msg" style="color:#e74c3c; font-size: 0.9em;">Моля, въведете валиден имейл (напр. ime@mail.com).</span>');
            isValid = false;
        }

        // Check if message is valid
        if(message.length < 10) {
            $('#message').after('<span class="error-msg" style="color:#e74c3c; font-size: 0.9em;">Съобщението е твърде кратко.</span>');
            isValid = false;
        }

        // Final decision based on validation results
        if(!isValid) {  // If there is an error in the form
            event.preventDefault(); // Stops the form from being sent
        } else {
            alert("Благодарим ви! Съобщението е изпратено."); //Success message
        }
    });
});