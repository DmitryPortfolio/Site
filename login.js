document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    document.getElementById('loginUsernameError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    let hasErrors = false;

    if (!username) {
        document.getElementById('loginUsernameError').textContent = 'Пожалуйста, введите имя пользователя.';
        hasErrors = true;
    }

    if (!password) {
        document.getElementById('loginPasswordError').textContent = 'Пожалуйста, введите пароль.';
        hasErrors = true;
    }

    if (!hasErrors) {
       
        const storedPassword = localStorage.getItem(username);
        if (storedPassword === password) {
           
            localStorage.setItem('loggedInUser', username); 
            window.location.href = 'main.html';
        } else {
            document.getElementById('loginPasswordError').textContent = 'Неверное имя пользователя или пароль.';
        }
    }
});
