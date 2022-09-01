function verificar(){
    var idade = document.querySelector('input#idadeatual')
    var res = document.querySelector('div#res')
    var nome = document.querySelector('input#nome')
    var img = document.getElementById('imagem')
   

    if (idade.value < 5 || idade.value > 110){
        window.alert('Dados inválidos, tente novamente.')
    }
    else {
       
        if (idade.value < 20){
            res.innerHTML = ` ${nome.value} você tem ${idade.value} anos, e até agora só tristeza. Mas esse ano vem!`
            img.src = 'davidluiz.png'

        }
        else if (idade.value < 27){
            res.innerHTML = `${nome.value} você tem ${idade.value} anos e acompanhou a conquista do Penta! uma copa!\n`
            img.src = 'ronaldofenomeno.png'

        }
        else if (idade.value < 53){
            res.innerHTML = `${nome.value} você tem ${idade.value} anos e acompanhou a conquista épica do Tetra! 2 copas!`
            img.src = 'romario.png'            

        }
        else if (idade.value < 60){
            res.innerHTML = `${nome.value} você tem ${idade.value} anos e assistiu o esquadrão de 70 conquistar o TRI! Relíquia pura. 3 copas!`
            img.src = 'pele70.png'

        }
        else if (idade.value < 63){
            res.innerHTML = `${nome.value} você tem ${idade.value} anos e assistiu ao show de Mané Garrincha na conquista do BI! 4 copas na conta!`
            img.src = 'garrincha.png'

        }
        else{
            res.innerHTML = `${nome.value} você tem ${idade.value} anos e já estava vivo quando Pelé mostrou ao mundo seu talento. Zerou o game.`
            img.src = 'pele58.png'

        }
   
    }


}