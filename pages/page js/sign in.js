const toggle = document.getElementById("toggle");
const password = document.getElementById("password");

toggle.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "👁‍🗨";
    } else {
        password.type = "password";
        toggle.textContent = "👁";
    }
};