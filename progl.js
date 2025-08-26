    let pontos = 0;
    let respondidas = 0;
    const total = 5;

    function responder(botao, correto) {
      if (botao.disabled) return;

      // desabilitar todos os botões da pergunta
      let botoes = botao.parentElement.querySelectorAll("button");
      botoes.forEach(b => b.disabled = true);

      respondidas++;

      if (correto) {
        pontos++;
        botao.style.background = "#00ffae";
      } else {
        botao.style.background = "#ff4d4d";
      }

      if (respondidas === total) {
        let msg = `Você acertou ${pontos}/${total} perguntas! 🎉`;
        if (pontos === total) msg += " Excelente, você domina a lógica!";
        else if (pontos >= 3) msg += " Muito bom, continue praticando!";
        else msg += " Não desanime, estude mais e tente novamente!";
        
        document.getElementById("resultado").innerText = msg;
      }
    }