const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = email.nextElementSibling;
  const passwordError = password.nextElementSibling;

  let valid = true;

  // Validação de email
  if (!email.value.includes('@')) {
    emailError.textContent = 'Email inválido';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Validação de senha
  if (password.value.length < 6) {
    passwordError.textContent = 'Senha deve ter ao menos 6 caracteres';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  // Simulação de autenticação
  if (valid) {
    alert('Login realizado com sucesso!');
    form.reset();
  }
});
