let players = []


function Player(nome, win, draw, defeat, score) {
    this.nome = nome;
    this.win = 0;
    this.draw = 0;
    this.defeat = 0;
    this.score = 0;
}

let exemplo = new Player('Exemplo')
players.push(exemplo)

function calcScore(player) {
    let score = (player.win * 3) + player.draw
    return score
}

function fillRankBoard(players) {
    let element = '';
    for (index = 0; index < players.length; index++) {
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

const addWin = (index) => {
    let playerIndex = players[index]
    playerIndex.win++;
    playerIndex.score = calcScore(playerIndex);
    fillRankBoard(players)
}

const addDraw = (index) => {
    let playerIndex = players[index]
    playerIndex.draw++;
    playerIndex.score = calcScore(playerIndex);
    fillRankBoard(players)
}

const addDefeat = (index) => {
    let playerIndex = players[index]
    playerIndex.defeat++;
    fillRankBoard(players)
}


const addNewPlayer = () => {
    let id = players.length + 1;
    let entry = document.getElementById('newPlayer').value

    players.push(window['player' + id] = new Player(entry))

    fillRankBoard(players)
    console.log(players)
}
