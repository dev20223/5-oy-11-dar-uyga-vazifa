function validateLogin(data) {

    if (!data.username.value) {
        alert("Enter username...");
        data.username.focus();
        return false;
    };

    if (!data.password.value) {
        alert("Enter password...");
        data.password.focus();
        return false;
    };

    return true;
};

function validate(data) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!data.firstname.value) {
        alert("Enter name...");
        data.firstname.focus();
        return false;
    };

    if (!data.username.value) {
        alert("Enter username...");
        data.username.focus();
        return false;
    };

    if (!emailRegex.test(data.email.value)) {
        alert("Enter Email...");
        data.email.focus();
        return false;
    };

    if (!data.password.value) {
        alert("Enter password...");
        data.password.focus();
        return false;
    };

    if (!data.repassword.value) {
        alert("Enter repassword...");
        data.repassword.focus();
        return false;
    };

    if (data.password.value != data.repassword.value) {
        alert("Password do not compare to repassword...");
        data.password.focus();
        return false;
    };


    return true;
};

export { validate, validateLogin }