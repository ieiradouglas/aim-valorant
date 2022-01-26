const miras = [
    {nome: "Vasco", img: "img/mira0.png", pontoCentral: "Desligado", interna:"1-1-6-0", externa:"1-1-4-3"},
    {nome: "Instagram", img: "/img/mira1.png", pontoCentral: "Ligado", interna:"1-1-4-2", externa:"1-1-10-5"},
    {nome: "Padrãozinha", img: "img/mira2.png", pontoCentral: "Desligado", interna:"1-3-2-2", externa:"Desligado"},
    {nome: "Ponto", img: "img/mira3.png", pontoCentral:"Ligado", interna:"Desligado", externa:"Desligado"}
]

const bloco = document.querySelectorAll('.aim-block')
const modal = document.querySelector('.modal')
const btFechar = document.querySelector('.btFechar')

const titulo = document.querySelector('.modal-title')
const cross = document.querySelector('.modal-cross')
const descricao = document.querySelectorAll('.aim-description')
const interna = document.querySelector('.aim-interna')
const externa = document.querySelector('.aim-externa')
const ponto = document.querySelector('.aim-dot')



for(i=0;i<bloco.length;i++){
    descricao[i].textContent = miras[i].nome;
   
    bloco[i].addEventListener('click',function(){
        modal.style.display = 'flex'
   
        id = this.id
   
    //Seta as informações da mira.
        if(id == id){
            titulo.textContent = miras[id.slice(-1)].nome
            interna.textContent = miras[id.slice(-1)].interna
            externa.textContent = miras[id.slice(-1)].externa
            ponto.textContent = miras[id.slice(-1)].pontoCentral
            mira = miras[id.slice(-1)].img
            cross.src = mira
        }
    })
}











//Fecha o modal
btFechar.addEventListener('click',function(){
    modal.style.display = 'none'
})