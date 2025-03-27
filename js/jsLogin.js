 // Function to handle the form submission
 function handleFormSubmit() {
    // Get the input values
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var message = document.getElementById('message').value;

    var passDefault = "sugeng";  // Predefined password for validation

    var selectedRadio = '';
    if (document.getElementById('radio1').checked) {
        selectedRadio = 'RADIO1';
    } else if (document.getElementById('radio2').checked) {
        selectedRadio = 'RADIO2';
    }

    // Validate the password
    if (passDefault === password) {
        // Show an alert with form data if password is correct
        alert('Email: ' + email + '\nPassword: ' + 'Password Benar' + '\nMessage: ' + message + '\nSelected Radio: ' + selectedRadio);

        document.location.href = "home.html";
    } else {
        // Show an error alert if password is incorrect
        alert('Email: ' + email + '\nPassword: ' + 'Password Salah' + '\nMessage: ' + message + '\nSelected Radio: ' + selectedRadio);
    }
}
