function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        alert("All fields must be filled!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email is not valid!");
        return;
    }

    if (phone.length < 8) {
        alert("Phone number must be at least 8 digits");
        return;
    }

    document.getElementById("result-name").innerText = name;
    document.getElementById("result-email").innerText = email;
    document.getElementById("result-phone").innerText = phone;
    document.getElementById("result-message").innerText = message;
    document.getElementById("welcome-speech").innerText = `Hi ${name}, Welcome To Website`;
}
