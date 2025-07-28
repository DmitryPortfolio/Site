document.getElementById('showLoginFormButton').addEventListener('click', function() {
    window.location.href = 'login.html'; 
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    document.getElementById('regUsernameError').textContent = '';
    document.getElementById('regPasswordError').textContent = '';
    document.getElementById('regConfirmPasswordError').textContent = '';

    let hasErrors = false;

    if (!username) {
        document.getElementById('regUsernameError').textContent = 'Пожалуйста, введите имя пользователя.';
        hasErrors = true;
    }

    if (!password) {
        document.getElementById('regPasswordError').textContent = 'Пожалуйста, введите пароль.';
        hasErrors = true;
    } else if (password.length < 6) {
        document.getElementById('regPasswordError').textContent = 'Пароль должен содержать не менее 6 символов.';
        hasErrors = true;
    }

    if (password !== confirmPassword) {
        document.getElementById('regConfirmPasswordError').textContent = 'Пароли не совпадают.';
        hasErrors = true;
    }

    if (!hasErrors) {
       
        if (localStorage.getItem(username)) {
            document.getElementById('regUsernameError').textContent = 'Пользователь с таким именем уже существует.';
            hasErrors = true;
        }

        if (!hasErrors) {
          
            localStorage.setItem(username, password);  


            setTimeout(function() {
                window.location.href = 'login.html';
            }, 50); 
        }
    }
});
