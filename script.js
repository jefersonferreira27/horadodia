///let agora = new Date()
///let hora = agora.getHours();

function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#d4a373'
    } else if(hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#fb5607'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#001219'
    }
 }