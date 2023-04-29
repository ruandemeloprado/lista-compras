
let controle = document.querySelectorAll(".ajuste__quantidade");
const quantidade = document.querySelector(".container__item__quantidade");
const form = document.getElementById('novoItem');
const lista = document.getElementById('lista__itens');
const botaoImprimir = document.getElementsByClassName('botao__print');

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    adicionaElemento(evento.target[0].value);
    evento.target[0].value = "";
})

console.log(botaoImprimir);

botaoImprimir.addEventListener('click', ()=>{
    


})



controle.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) =>{
    manipulaDados(evento.target.textContent, evento.target.parentNode);

    })
    
})

function manipulaDados(operacao, controle){
const qtd = controle.querySelector(".container__item__quantidade");    

    if(operacao === "+"){
        qtd.value = parseInt(qtd.value) + 1;;
    }    
    else {
        qtd.value = parseInt(qtd.value) - 1;
    }
    if(parseInt(qtd.value) <= 0){
        controle.classList.add('esconde__item');
    }
    if(parseInt(qtd.value) > 99){
        qtd.value = "99";
    }
    
    }    


function adicionaElemento(item){

    console.log(item);

    const novoItem = document.createElement('li');
    novoItem.classList.add('container__item');

    const novoInputItem = document.createElement('p');
    novoInputItem.classList.add('container__item__texto');
    novoInputItem.innerHTML = item;

    const novoBotaoAdiciona = document.createElement('button');
    novoBotaoAdiciona.classList.add('ajuste__quantidade');
    novoBotaoAdiciona.innerHTML = "+";
    adicionarEvento(novoBotaoAdiciona);

    const novoBotaoQuantidade = document.createElement('input');
    novoBotaoQuantidade.classList.add('container__item__quantidade');
    novoBotaoQuantidade.type = "text";
    novoBotaoQuantidade.value = 1;    

    const novoBotaoSubtrai = document.createElement('button');
    novoBotaoSubtrai.classList.add('ajuste__quantidade');
    novoBotaoSubtrai.innerHTML = "-";
    adicionarEvento(novoBotaoSubtrai);

    novoItem.appendChild(novoInputItem);
    novoItem.appendChild(novoBotaoAdiciona);
    novoItem.appendChild(novoBotaoQuantidade);
    novoItem.appendChild(novoBotaoSubtrai);

    console.log(novoItem);

    document.querySelector('#lista__itens').appendChild(novoItem);

    controle = document.querySelectorAll(".ajuste__quantidade");
    

}

setTimeout(function() {
    controle = document.querySelectorAll(".ajuste__quantidade");
    console.log(controle.length); 
  }, 100);
  
  function adicionarEvento(botao){
    botao.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
    });
}