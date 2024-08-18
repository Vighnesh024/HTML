document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("nextButton");
    
    nextButton.addEventListener("click", function() {
        // Validate form fields
        const firstName = document.getElementById("firstname").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const dob = document.getElementById("dob").value;

        if (firstName === "" || lastName === "" || dob === "") {
            alert("Please fill in all fields.");
        } else {
            // Save form data to localStorage
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("dob", dob);
            
            // Redirect to the next step
            window.location.href = "step2.html";
        }
    });
});
