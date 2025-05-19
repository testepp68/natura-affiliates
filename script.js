
function gerarPromocao() {
  const link = document.getElementById("linkProduto").value.trim();

  if (!link || !link.includes("natura.com.br")) {
    alert("Por favor, cole um link válido da Natura.");
    return;
  }

  const mensagem = `
🌿 Promoção Natura 🌿

Confira este produto incrível com desconto:
👉 ${link}

🛒 Aproveite enquanto durar o estoque!
`;

  document.getElementById("mensagemPromocao").value = mensagem;
  document.getElementById("resultado").style.display = "block";
}

function copiarTexto() {
  const textarea = document.getElementById("mensagemPromocao");
  textarea.select();
  document.execCommand("copy");
  alert("Texto copiado com sucesso!");
}
