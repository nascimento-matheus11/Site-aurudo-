
function escolherCidade(cidade) {
    const historia = document.getElementById("historia");

    if (cidade === "Rio de Janeiro") {
        historia.textContent =
            "Você começa sua jornada no Rio de Janeiro, subindo o Pico da Tijuca ao amanhecer para encontrar a primeira pista.";
    } else {
        historia.textContent =
            "Você começa sua jornada em Pernambuco, explorando suas belas paisagens em busca da primeira pista.";
    }
}

function procurarPista() {
    document.getElementById("historia").textContent =
        "No topo do pico, você encontra uma carta escondida entre as pedras. Nela está escrito: 'A próxima pista está onde as águas encontram as pedras.'";

    document.getElementById("acoes").innerHTML = `
        <button onclick="continuarJornada()">
            Seguir para a próxima pista
        </button>
        <button onclick="desistir()">
            Desistir e voltar para casa
        </button>
    `;
}

function continuarJornada() {
    document.getElementById("historia").textContent =
        "Você segue as pistas da carta e encontra um caminho misterioso. Sua aventura pela cidade perdida continua!";
}

function desistir() {
    document.getElementById("historia").textContent =
        "Você decide voltar para casa. A cidade perdida continuará sendo um mistério...";
    
    document.getElementById("acoes").innerHTML = `
        <button onclick="location.reload()">
            Começar novamente
        </button>
    `;
}
