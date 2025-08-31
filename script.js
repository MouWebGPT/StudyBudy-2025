const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

let remainingAttempts = 5;

// Demo credentials (replace with backend verification later)
const validCredentials = {
    id: "U12345",
    password: "Pass123"
};

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const enteredId = document.getElementById('univId').value;
    const enteredPassword = document.getElementById('password').value;

    if (remainingAttempts === 0) {
        message.textContent = "Account blocked. Contact admin to reset password.";
        message.style.color = "red";
        return;
    }

    if (enteredId === validCredentials.id && enteredPassword === validCredentials.password) {
        message.textContent = "Login Successful!";
        message.style.color = "green";
        attemptsDisplay.textContent = "";
    } else {
        remainingAttempts--;
        message.textContent = "Invalid University ID or Password.";
        message.style.color = "red";
        attemptsDisplay.textContent = `Remaining Attempts: ${remainingAttempts}`;

        if (remainingAttempts === 0) {
            message.textContent = "Account blocked. Contact admin to reset password.";
        }
    }
});



