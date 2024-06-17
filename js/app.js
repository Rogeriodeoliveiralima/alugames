

function alterarStatus(id){
let alugaGames = document.getElementById(`game-${id}`);
let imagem = alugaGames.querySelector('.dashboard__item__img');
let botao = alugaGames.querySelector('.dashboard__item__button');
let nome= alugaGames.querySelector('.dashboard__item__name');

if( imagem.classList.contains('dashboard__item__img--rented')){
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
}else{
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
}

}