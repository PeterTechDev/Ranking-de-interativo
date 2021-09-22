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
    let score  = (player.win * 3) + player.draw
    return score
}
peter.score = calcScore(peter)

let players = [peter, lebron]

function fillRankBoard (players){
    let element = '';
    for(index = 0; index < players.length; index++){
        element += `<tr><td> ${players[index].nome}</td>`;
        element += `<td> ${players[index].win}</td>`;
        element += `<td> ${players[index].draw}</td>`;
        element += `<td> ${players[index].defeat}</td>`;
        element += `<td> ${players[index].score}</td>`;
        element += `<td><button class="winBtn" onclick="addWin(${index})">Vitória</button></td>`
        element += `<td><button class="winBtn" onclick="addDraw(${index})">Empate</button></td>`
        element += `<td><button class="winBtn" onclick="addDefeat(${index})">Derrota</button></td>`
    }
    document.getElementById('board').innerHTML = element
}

fillRankBoard(players)

const addWin = (index)=>{
    let playerIndex = players[index]
    playerIndex.win++;
    playerIndex.score = calcScore(playerIndex);
    fillRankBoard(players)
}

const addDraw = (index)=>{
    let playerIndex = players[index]
    playerIndex.draw++;
    playerIndex.score = calcScore(playerIndex);
    fillRankBoard(players)
}

const addDefeat = (index)=>{
    let playerIndex = players[index]
    playerIndex.defeat++;
    fillRankBoard(players)
}

