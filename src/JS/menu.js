//Menu JS
function removerEstilosDeBotoes(arrayDeBotoes) {
    for(let i = 0; i < arrayDeBotoes.length; i++) {
        arrayDeBotoes[i].classList.remove("active-button"); //Mudar todas as classes para "active button" no arquivo CSS
    }
}

function adicionarEstiloAoBotao(arrayDeBotoes, index) {
    arrayDeBotoes[index].classList.add("active-button");
}

function esconderInformacoes(arrayDeInformacoes) {
    for(let i = 0; i < arrayDeInformacoes.length; i++) {
        arrayDeInformacoes[i].image.style.display = "none";
        arrayDeInformacoes[i].infos.style.display = "none";
    }
}

function mostrarInformacao(arrayDeInformacoes, index) {
    arrayDeInformacoes[index].image.style.display = "block";
    arrayDeInformacoes[index].infos.style.display = "block";
}

function adicionarAcaoDeClick(arrayDeBotoes, arrayDeInformacoes) {
    for(let i = 0; i < arrayDeBotoes.length; i++) {
        arrayDeBotoes[i].addEventListener("click",
            () => {
                removerEstilosDeBotoes(arrayDeBotoes);
                adicionarEstiloAoBotao(arrayDeBotoes, i);
                esconderInformacoes(arrayDeInformacoes);
                mostrarInformacao(arrayDeInformacoes, i);
            }
        )
    }
}

export {adicionarAcaoDeClick};