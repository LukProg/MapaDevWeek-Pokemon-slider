/* 

OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o proximo cartão da lista
    - Passo 1 - dar um jeito de pegar o elementro HTML da seta avançar
    - Passo 2 - dar um jeito de identificar o clique do usuario na seta avançar
    - Passo 3 - fazer aparecer o próximo cartão da lista
    - Passo 4 - buscar o cartão que esta selecionado e esconder


    OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    - Passo 1 - dar um jeito de pegar o elementro HTML da seta voltar
    - Passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
    - Passo 3 - fazer aparecer o cartão anterior da lista
    - Passo 4 - buscar o cartão que esta selecionado e esconder

*/

const btnAvancar = document.getElementById('btn-avancar')
const cartoes = document.querySelectorAll('.cartao');
const btnVoltar = document.getElementById('btn-voltar')
let cartaoAtual = 0

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}


btnAvancar.addEventListener('click', function(){
    
    if(cartaoAtual === cartoes.length - 1)return 

    esconderCartaoSelecionado();

    cartaoAtual++;
   mostrarCartao(cartaoAtual);


    
})


btnVoltar.addEventListener('click', function(){
    
    if(cartaoAtual === 0) return
    
    esconderCartaoSelecionado();
    
cartaoAtual--;
console.log(cartaoAtual)
mostrarCartao(cartaoAtual);

    
})
