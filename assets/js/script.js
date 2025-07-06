document.addEventListener("DOMContentLoaded", function () {// Inicia o efeito digitando ao carregar a página
  const nome = "Olá, me chamo Thiago Assunção";
  const spanCor = "<span>Thiago Assunção</span>";
  const destino = document.getElementById("nome-digitando");
  let i = 0;

  function digitar() {
    if (i < nome.length) {
      destino.innerHTML += nome.charAt(i);
      i++;
      setTimeout(digitar, 80);
    } else {
      // Quando terminar de digitar, substituir pelo nome com destaque
      destino.innerHTML = `Olá, me chamo ${spanCor}`;
    }
  }

  digitar();
});
