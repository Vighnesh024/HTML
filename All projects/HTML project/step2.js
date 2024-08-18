// Add your JavaScript code for Step 2 here
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const formData = new FormData(form); // Get form data
        const password = formData.get('password'); // Get password
        
        // Retrieve email or phone number from URL parameter
        const searchParams = new URLSearchParams(window.location.search);
        const emailOrPhone = searchParams.get('email_or_phone');

        // Perform any necessary validation
        
        // Submit the form or perform further actions
        console.log('Email or Phone:', emailOrPhone);
        console.log('Password:', password);
        // Example: submit the form
        // form.submit();
    });
});

const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get('first_name');
const lastName = urlParams.get('last_name');

// Set the values of hidden input fields with retrieved data
document.getElementById('step2Form').innerHTML += `
    <input type="hidden" name="first_name" value="${firstName}">
    <input type="hidden" name="last_name" value="${lastName}">
`;