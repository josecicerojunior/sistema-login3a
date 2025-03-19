var area = document.getElementById("area");
function entrar() {
  var nome = prompt("Digite seu nome!");
  if (nome === "" || nome === null) {
    alert("Ops algo deu errado");
    area.innerHTML = "Clique no botão para acessar...";
  } else {
    area.innerHTML = "Bem vindo ao sistema de Login " + nome + " ";
    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    area.appendChild(botaoSair);
    botaoSair.onclick = sair;
  }
}

function sair() {
  alert("Até mais!");
  area.innerHTML = "Você saiu!";
}
