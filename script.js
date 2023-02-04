let agora = new Date()
let hora = agora.getHours()
let texto = document.querySelector('#texto')
let img = document.querySelector('#imagem')
if (hora < 12) {
    texto.innerHTML = `Bom dia, agora são ${hora} horas da manhã!`
    img.src = 'imagens/dia.jpg'
} else if (hora < 18) {
    texto.innerHTML = `Boa tarde, agora são ${hora} horas da tarde!`
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = 'rgb(233, 158, 62)'
} else if (hora < 23) {
    texto.innerHTML = `Boa noite, agora são ${hora} horas da noite!`
    img.src = 'imagens/noite.jpg'   
    document.body.style.background = '#151C2E'
} else {
    texto.innerHTML = `[ERRO]`
}