// Seleciona elementos
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit');
const statusMsg = document.getElementById('status');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Função para validar campos e ativar botão
function validateForm() {
  let valid = true;

  // Limpa mensagens e estados visuais
  emailError.textContent = '';
  passwordError.textContent = '';
  statusMsg.textContent = '';
  emailInput.classList.remove('invalid');
  passwordInput.classList.remove('invalid');

  // Valida e-mail
  if (!emailInput.value.includes('@')) {
    emailError.textContent = 'Digite um e-mail válido PORRA!!';
    emailInput.classList.add('invalid');
    valid = false;
  }

  // Valida senha
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Senha deve ter pelo menos 8 caracteres';
    passwordInput.classList.add('invalid');
    valid = false;
  }

  submitBtn.disabled = !valid;
}

// Escuta mudanças nos inputs
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

// Simulação de envio
form.addEventListener('submit', function(e) {
  e.preventDefault(); // impede envio real

  if (emailInput.value === 'teste@teste.com' && passwordInput.value === '12345678') {
    statusMsg.textContent = 'Login realizado com sucesso!';
    statusMsg.classList.add('success');
    statusMsg.classList.remove('error');
  } else {
    statusMsg.textContent = 'Credenciais inválidas.';
    statusMsg.classList.add('error');
    statusMsg.classList.remove('success');
  }
});
