// Efeito de destaque ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
  const cartao = document.querySelector('.cartao-principal');
  
  // Animação de entrada
  cartao.style.opacity = '0';
  cartao.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    cartao.style.transition = 'all 0.6s ease';
    cartao.style.opacity = '1';
    cartao.style.transform = 'translateY(0)';
  }, 100);

  // Confirmação ao clicar no botão
  const botao = document.querySelector('.botao-assistente');
  botao.addEventListener('click', function() {
    console.log('Usuário abriu o assistente virtual!');
  });
});