let botao = document.querySelector('#botao');
let mensagem = document.querySelector('#mensagem')
let botao2 = document.querySelector('#botao2')
let assinatura = document.querySelector('#assinatura')


botao.addEventListener('click', clique)
botao2.addEventListener('click', clique2)


function clique(){
    mensagem.innerHTML='Muito obrigado por ler até aqui, espero que gostem do resumo da minha autobiografia.';
    
    mensagem.style.font = '18px Georgia, sans-serif'
}


function clique2(){
    assinatura.innerHTML='Caique A. Bilieri';
    
    assinatura.style.font = '20px Lucida Handwriting, Cursive'
}