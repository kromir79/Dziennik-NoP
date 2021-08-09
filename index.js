const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "alawojciec@gmail.com" && password === "Chleb123" || username === "kowalczykkamila20@gmail.com" && password === "Kamila2010" || username === "jowita.barejko@gmail.com" && password === "Tosia999") {
        alert("Sukcesywnie zalogowałeś się do NoP, trwa przekierowywanie...");
        location.reload();
        location.replace("Dziennik.html")
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})