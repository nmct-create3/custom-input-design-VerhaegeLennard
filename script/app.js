const handlePasswordSwitcher = function () {
    console.log("handlePasswordSwitcher executed");
    const passwordOptions = ['password', 'text'];
    const passwordInput = document.querySelector(".js-password-input")
    const passwordToggle = document.querySelector(".js-password-toggle-checkbox")

    passwordToggle.addEventListener('change', function () {
        passwordInput.type = passwordOptions[+this.checked];
    });

    // js_toggle.addEventListener('click', function (){
    //     console.log("Klik")
    //     if (js_password.type == 'text') {
    //         js_password.type = 'password'
    //     } else if (js_password.type == 'password') {
    //         js_password.type = 'text' }
    // })
}

const init = function () {
    console.log('Script loaded!');

    // init password switcher
    handlePasswordSwitcher();

    // Other init functions here
}

init();