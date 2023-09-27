const handlePasswordSwitcher = function () {
    console.log("handlePasswordSwitcher executed");
    const js_password = document.querySelector(".js-password-input")
    const js_toggle = document.querySelector(".js-password-toggle-checkbox")
    js_toggle.addEventListener('click', function (){
        console.log("Klik")
        if (js_password.type == 'text') {
            js_password.type = 'password'
        } else if (js_password.type == 'password') {
            js_password.type = 'text' }
    })
}

const init = function () {
    console.log('Script loaded!');

    // init password switcher
    handlePasswordSwitcher();

    // Other init functions here
}

init();