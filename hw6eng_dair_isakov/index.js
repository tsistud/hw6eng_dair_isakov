function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    if (name === "") {
        nameError.style.display = "block";
        document.getElementById("name").classList.add("error");
        isValid = false;
    } else {
        nameError.style.display = "none";
        document.getElementById("name").classList.remove("error");
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.style.display = "block";
        document.getElementById("email").classList.add("error");
        isValid = false;
    } else {
        emailError.style.display = "none";
        document.getElementById("email").classList.remove("error");
    }

    if (password.length < 8) {
        passwordError.style.display = "block";
        document.getElementById("password").classList.add("error");
        isValid = false;
    } else {
        passwordError.style.display = "none";
        document.getElementById("password").classList.remove("error");
    }

    if (isValid) {
        alert("Форма успешно отправлена!");
    }
}


function calculate() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;

    const errorMessage = document.getElementById("errorMessage");
    const resultField = document.getElementById("result");

    if (isNaN(number1) || isNaN(number2)) {
        errorMessage.style.display = "block";
        resultField.textContent = "";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    let result;
    switch (operation) {
        case "add":
            result = number1 + number2;
            break;
        case "subtract":
            result = number1 - number2;
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            if (number2 === 0) {
                errorMessage.style.display = "block";
                errorMessage.textContent = "Cannot divide by zero";
                resultField.textContent = "";
                return;
            }
            result = number1 / number2;
            break;
        default:
    }

    resultField.textContent = `Result: ${result}`;
}

function enlargeImage(imgElement) {
    const enlargedImage = document.getElementById("enlargedImage");
    
    enlargedImage.src = imgElement.src;
    enlargedImage.style.display = "block";
}