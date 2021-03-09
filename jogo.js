var height = 0
var width = 0
var life = 1
var time = 10
var timeCreateFlies = 1500
var level = window.location.search

level = level.replace('?', '')      

if (level === 'normal') {
    timeCreateFlies = 1500
} else if (level === 'hard') {
    timeCreateFlies = 1000
} else if (level === 'veryhard') {
    timeCreateFlies = 750
}



function adjustScreenGame() {
    height = window.innerHeight
    width = window.innerWidth

    console.log(height, width)
}

adjustScreenGame()

var timer = setInterval(function(){
    time -= 1

    if (time <= 0) { //Win the game
        clearInterval(timer)       //Remove timer
        clearInterval(createFlies)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('timer').innerHTML = time     
    }
}, 1000)


function randomPosition() {

    if (document.getElementById('mosquito')) { 
        document.getElementById('mosquito').remove()    

        if (life > 3) {
            window.location.href = "fim_de_jogo.html"

        } else {
            document.getElementById('v' + life).src = "imagens/coracao_vazio.png"
            life ++
        }
    }


    var positionX = Math.floor(Math.random() * width) - 90 
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX  
    positionY = positionY < 0 ? 0 : positionY  
 

    
    var mosquito = document.createElement('img')   
    mosquito.src = 'imagens/mosca.png'  
    mosquito.className = randomSize()
    mosquito.style.left = positionX+ 'px' 
    mosquito.style.top = positionY+ 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()                   
    }

    document.body.appendChild(mosquito) 

}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {    
        case 0:
          return 'mosquito1'    
        case 1:
          return 'mosquito2' 
        case 2:
          return 'mosquito3'
    }
}