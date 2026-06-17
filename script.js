const heroPanel = document.getElementById('heroPanel');

if (heroPanel) {
  const lines = [
    { label: 'Análisis en curso', value: '87%' },
    { label: 'Usuarios protegidos', value: '12.4k' },
    { label: 'Incidentes bloqueados', value: '98' },
  ];

  lines.forEach((line, index) => {
    const item = document.createElement('div');
    item.className = 'status-line';
    item.style.transition = 'opacity 0.6s ease ' + index * 0.12 + 's';
    item.style.opacity = '0';
    item.innerHTML = `
      <span>${line.label}</span>
      <strong>${line.value}</strong>
    `;
    heroPanel.querySelector('.panel-card').appendChild(item);

    requestAnimationFrame(() => {
      item.style.opacity = '1';
    });
  });
}

const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formFeedback = document.getElementById('formFeedback');

const validateEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

const validateForm = () => {
  let valid = true;
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (!emailValue) {
    emailError.textContent = 'El correo es obligatorio.';
    valid = false;
  } else if (!validateEmail(emailValue)) {
    emailError.textContent = 'Ingresa un correo válido.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  if (!messageValue) {
    messageError.textContent = 'El mensaje no puede quedar vacío.';
    valid = false;
  } else if (messageValue.length < 20) {
    messageError.textContent = 'Escribe al menos 20 caracteres.';
    valid = false;
  } else {
    messageError.textContent = '';
  }

  return valid;
};

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formFeedback.textContent = '';

    if (validateForm()) {
      formFeedback.textContent = 'Solicitud enviada. Gracias, pronto te contactaremos.';
      emailInput.value = '';
      messageInput.value = '';
    } else {
      formFeedback.textContent = 'Revisa los campos marcados antes de enviar.';
    }
  });
}
