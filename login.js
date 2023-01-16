document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const usePassword = document.getElementById('user-password');
    const password = usePassword.value;
    if (email==='shontan@gmail.com' && password==='baper chele') {
        window.location.href='bank.html'
    }
    else {
        alert("in put a valid password")
    }

})