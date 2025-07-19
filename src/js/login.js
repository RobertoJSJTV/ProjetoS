document.getElementById('loginForm').addEventListener('submit', async function e.preventDefault();

const email = document.getElementById('email').value;
const senha = document.getElementById('senhas').value;

const response = await fetch('',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, senha })
});



);