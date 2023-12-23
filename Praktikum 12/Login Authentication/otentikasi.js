document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "febryan123" && password === "qwerty") {
        alert("Login sukses");
        window.location.href = "success.html";
    } else {
        alert("Login gagal");
    }
});
