// Controles de tamanho de fonte e contraste
// Visão Clara Games - Acessibilidade

let currentSize = 100; // porcentagem da fonte base (100% = tamanho normal)

// Aumentar fonte
document.getElementById('aumentar-fonte').addEventListener('click', () => {
  currentSize = Math.min(currentSize + 15, 180); // máximo 180%
  document.documentElement.style.fontSize = currentSize + '%';
});

// Diminuir fonte
document.getElementById('diminuir-fonte').addEventListener('click', () => {
  currentSize = Math.max(currentSize - 15, 80); // mínimo 80%
  document.documentElement.style.fontSize = currentSize + '%';
});

// Resetar fonte para o tamanho padrão
document.getElementById('reset-fonte').addEventListener('click', () => {
  currentSize = 100;
  document.documentElement.style.fontSize = '100%';
});

// Toggle contraste máximo
const contrasteBtn = document.getElementById('toggle-contraste');

contrasteBtn.addEventListener('click', () => {
  const isActive = document.body.classList.toggle('high-contrast');
  contrasteBtn.setAttribute('aria-pressed', isActive);
  contrasteBtn.textContent = isActive 
    ? 'Contraste normal' 
    : 'Alto contraste máximo';
});
