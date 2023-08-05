
let cells = document.getElementsByClassName("field-row");

let Gameboard = (() => {
    let gameboard = [];
    let displayController = {

    }
    let putPlaceMark = () => {
        for (let i = 0; i < cells.length; i++) { 
            cells[i].addEventListener("click", function() {
                if(playerSwitch === 0){
                    gameboard[i] = playerOne.playerMark;
                    console.log(gameboard)
                    playerSwitch = 1;
                } else {
                    gameboard[i] = playerTwo.playerMark;
                    console.log(gameboard);
                    playerSwitch = 0;
                }                      
                cells[i].textContent = Gameboard.gameboard[i];     
            })
        }
    }
    return {gameboard, putPlaceMark};
})();

let Players = (number, name, mark) => {   
    let playerNameDisplay = document.getElementById(`player${number}`);
    playerNameDisplay.textContent = name;
    playerSwitch = 0;
    let playerMark = mark; 
    return {playerNameDisplay, playerMark}
}

const playerOne = Players(1, "Alex", "X");
const playerTwo = Players(2, "OtherPlayer", "O"); 

Gameboard.putPlaceMark();
    
  
 