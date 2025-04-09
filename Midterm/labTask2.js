document.getElementById("checkoutForm").addEventListener("submit", function (event) {
    let valid = true;

    // Full name
    const name = document.getElementById("name");
    if (!/^[A-Za-z\s]+$/.test(name.value)) {
        document.getElementById("nameError").textContent = "Invalid name.";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Ph no 
    const phone = document.getElementById("phone");
    if (!/^\d{10,15}$/.test(phone.value)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 to 15 digits.";
        valid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Credit Card Number
    const cardNumber = document.getElementById("cardNumber");
    if (!/^\d{16}$/.test(cardNumber.value)) {
        document.getElementById("cardError").textContent = "Credit card number must be 16 digits.";
        valid = false;
    } else {
        document.getElementById("cardError").textContent = "";
    }

    
    const expiry = document.getElementById("expiry");
    const today = new Date();
    const expiryDate = new Date(expiry.value + "-01");
    if (expiryDate < today) {
        document.getElementById("expiryError").textContent = "Expiry date must be in the future.";
        valid = false;
    } else {
        document.getElementById("expiryError").textContent = "";
    }

    
    const cvv = document.getElementById("cvv");
    if (!/^\d{3}$/.test(cvv.value)) {
        document.getElementById("cvvError").textContent = "CVV must be exactly 3 digits.";
        valid = false;
    } else {
        document.getElementById("cvvError").textContent = "";
    }

    
    

    if (!valid) {
        event.preventDefault(); 
    } else {
        alert("Form submitted successfully!"); 
    }
    
});
