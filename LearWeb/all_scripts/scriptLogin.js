const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');

    setTimeout(() => {
        document.title = "REGISTER";
    }, 1000);
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');

    setTimeout(() => {
        document.title = "LOGIN";
    }, 1000);
});
