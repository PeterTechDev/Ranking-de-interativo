function Player(nome ,win, draw, defeat, score){
    this.nome = nome;
    this.win = 0;
    this.draw = 0;
    this.defeat = 0;
    this.score = 0;
}

let peter = new Player("Peter")
let lebron = new Player('LeBron James')

peter.win = 3
console.log(peter)

function calcScore(player){
    let score  = (player.score * 3) + player.draw
    return score
}

