function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'FotoManha.png'
        document.body.style.background = '#d4be8a'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'FotoTarde.png'
        document.body.style.background = '#d77e53'
    } else {
        // BOA NOITE
        img.src = 'FotoNoite.png'
        document.body.style.background = '#141b27'
    }
}
