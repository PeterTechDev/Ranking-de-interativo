function Player(nome, win, draw, defeat, score, winner) {
    this.nome = nome;
    this.win = 0;
    this.draw = 0;
    this.defeat = 0;
    this.score = 0;
    this.winner = false
}

// PREENCHER COM O EXEMPLO
let players = []
let exemplo = new Player('Exemplo');
let exemplo2 = new Player('Exemplo2');
players.push(exemplo, exemplo2);

// CALCULA OS PONTOS E ALTERA O VALOR EM PLAYER
function calcScore(player) {
    let score = (player.win * 3) + player.draw;
    return score;
}

// PREENCHER A TABELA COM OS DADOS DOS JOGADORES
function fillRankBoard(players) {
    let element = '';
    for (index = 0; index < players.length; index++) {
        element += `<tr id="player${index + 1}" class="boardRow"><td> ${players[index].nome}</td>`;
        element += `<td> ${players[index].win}</td>`;
        element += `<td> ${players[index].draw}</td>`;
        element += `<td> ${players[index].defeat}</td>`;
        element += `<td> ${players[index].score}</td>`;
        element += `<td><button class="winBtn" onclick="addWin(${index})">Vitória</button></td>`
        element += `<td><button class="drawBtn" onclick="addDraw(${index})">Empate</button></td>`
        element += `<td><button class="defeatBtn" onclick="addDefeat(${index})">Derrota</button></td>`
        element += `<td><button class="deleteBtn" onclick="deletePlayer(${index})">X</button></td>`
    }
    document.getElementById('board').innerHTML = element
}
fillRankBoard(players)

// BOTÕES win, draw, defeat(EVENT NO HTML)
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

const deletePlayer = (index) => {
    players.splice(index, 1)[index + 1]
    document.getElementsByClassName('boardRow')[index].remove()
    console.log(players)
}

// BOTÃO adicionar (EVENT NO HTML)
let entry = document.getElementById('nameNewPlayer')

const addNewPlayer = () => {
    let id = players.length + 1;

    players.push(window['player' + id] = new Player(entry.value))

    fillRankBoard(players)
    console.log(players)
    entry.value = ''
}

const trophy = () => {
    // let highScore = [0, 0];
    // players.forEach(player => {
    //     if (player.score >= highScore[0]) {
    //         highScore[0] = player.score
    //         highScore[1] = player
    //     }
    // })
}
// percorrer todo os html e aquele que for maior recebe um inner

// TODO: ADICIONAR PLAYER QUANDO PRESSIONAR ENTER
//  TODO: ADICIONAR EMOJI AO PLAYER COM MAIOR QNTD DE PONTOS