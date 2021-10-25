import { UI, deleteUI } from "./ui.js";


const valuesGame = ['paper', 'scissors', 'rock'];

export function play() {
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const rock = document.querySelector('#rock');

    paper.addEventListener('mouseup', rules)
    scissors.addEventListener('mouseup', rules)
    rock.addEventListener('mouseup', rules)


}



function rules(event) {

    const [player, computer] = movement(event)

    if (player === computer) {

        UI('draw', player, computer);
    } else if (player === 'rock') {
        computer === 'paper' ? UI('lost', player, computer) : UI('win', player, computer);
    } else if (player === 'paper') {
        computer === 'scissors' ? UI('lost', player, computer) : UI('win', player, computer);
    } else if (player === 'scissors') {
        computer === 'rock' ? UI('lost', player, computer) : UI('win', player, computer);
    }
}



function movement(event) {

    let user_action;

    if (event.target.id) {
        user_action = event.target.id;

    } else if (event.target.parentElement.id) {
        user_action = event.target.parentElement.id;
    } else {
        user_action = event.target.parentElement.parentElement.id
    }

    let computer_action = Math.floor(Math.random() * valuesGame.length);

    return [user_action, valuesGame[computer_action]]

}




export function restart(event) {
    const btnPlay = document.querySelector('.btn-play');
    btnPlay.addEventListener('mouseup', deleteUI)
}


let escolha = Math.floor(Math.random() * valuesGame.length);