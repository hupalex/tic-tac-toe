
let cells = document.getElementsByClassName("field-row");

let Gameboard = (() => {
    let gameboard = ["","","","","","","","",""];
    const winnerCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];
    let clearBoard = () => {
        for (let i = 0; i < cells.length; i++) {
            gameboard = [];
            cells[i].textContent = "";               
        }
    };
    let GetWinner = () => {
        winnerCombos.forEach(function(row) {
            let a = row[0];
            let b = row[1];
            let c = row[2];
            if(gameboard[a]!=="" && gameboard[a]===gameboard[b] && gameboard[b]===gameboard[c])
              if (gameboard[a] === "X") {
                console.log(`${playerOne.playerName} won!`);
              } else console.log(`${playerTwo.playerName} won!`);
          });
    }

    let gameController = () => {
        console.log(Object.values(gameboard).length === gameboard.length)
        if (gameboard.every(el => el !== "")) {
             console.log("Gameover! It's a tie!");       

        } else {
            GetWinner();
        }
    };
    let putPlaceMark = () => {
        playerOne.activePlayerColor("yellow");
        for (let i = 0; i < cells.length; i++) { 
            cells[i].addEventListener("click", function() {               
                if(gameboard[i] === ""){
                    if(playerSwitch === 0){                     
                        gameboard[i]= playerOne.playerMark;
                        playerSwitch = 1;
                        playerOne.activePlayerColor("black");
                        playerTwo.activePlayerColor("yellow");
                    } else {
                        gameboard[i] = playerTwo.playerMark;
                        playerSwitch = 0;
                        playerOne.activePlayerColor("yellow");
                        playerTwo.activePlayerColor("black");
                    } 
                }                            
                cells[i].textContent = Gameboard.gameboard[i];
                gameController();     
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
    let playerName = name;
    let activePlayerColor = (color) =>{
        if (playerSwitch === 0) {
            playerNameDisplay.setAttribute("style", `color: ${color};`);           
        } else {
            playerNameDisplay.setAttribute("style", `color: ${color};`);  
        }

    }

    return {playerNameDisplay, playerMark, activePlayerColor, playerSwitch, playerName}
}
const playerOne = Players(1, "Alex", "X");
const playerTwo = Players(2, "OtherPlayer", "O"); 
Gameboard.putPlaceMark();

    
  
 