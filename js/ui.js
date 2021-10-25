const container = document.querySelector('.container');
const containerResults = document.querySelector('.container-results')
const again = document.querySelector('.again');
const user = document.querySelector('div[data-box="player"]');
const IA = document.querySelector('div[data-box="computer"]');
const userWin = document.querySelector('#userWin');
const computerWin = document.querySelector('#computerWin');
const matchResult = document.querySelector('.match-result');
const player = document.querySelector('.player');
const machine = document.querySelector('.computer');

let classPlay;
let classComputer;

let playerScore = 0;
let computerScore = 0;

export function UI(value, play, computer) {
    classPlay = play;
    classComputer = computer;
    const invisible = document.querySelector('.invisible');



    container.classList.add('hidden')
    containerResults.classList.remove('hidden');

    user.classList.add(play)
    user.children[0].children[0].src = `images/icon-${play}.svg`;
    user.children[0].children[0].setAttribute("alt", play);

    IA.classList.add(computer)
    IA.children[0].children[0].src = `images/icon-${computer}.svg`;
    IA.children[0].children[0].setAttribute("alt", computer);




    setTimeout(() => {
        again.classList.remove('hidden');
        invisible.classList.add('hidden');
        IA.classList.remove('hidden');



    }, 450);

    setTimeout(() => {
        if (value === "draw") {
            matchResult.innerHTML = "DRAW 😐"
        } else if (value === "win") {
            matchResult.innerHTML = "YOU WIN 😁"
            playerScore++;
            player.innerHTML = playerScore;

            userWin.classList.remove('hidden');
        } else if (value === "lost") {
            matchResult.innerHTML = "YOU LOSE 😟"
            computerScore++;
            machine.innerHTML = computerScore;
            computerWin.classList.remove('hidden');
        }
    }, 470);


}

export function deleteUI() {
    const invisible = document.querySelector('.invisible');
    container.classList.remove('hidden');
    container.classList.add('scale-up-center');
    containerResults.classList.add('hidden');
    matchResult.innerHTML = ""


    user.classList.remove(classPlay);
    user.children[0].children[0].src = ``;
    user.children[0].children[0].setAttribute("alt", '');

    IA.classList.remove(classComputer);
    IA.children[0].children[0].src = ``;
    IA.children[0].children[0].setAttribute("alt", '');

    invisible.classList.remove('hidden');
    again.classList.add('hidden');
    IA.classList.add('hidden');

    userWin.classList.add('hidden');
    computerWin.classList.add('hidden');


}