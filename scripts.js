document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
     window.location.href = './index.html';alert(`Welcome back, ${user.firstName}!`);
    } else {
        alert("Invalid email or password.");
    }
});
