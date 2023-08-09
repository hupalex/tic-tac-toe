
let cells = document.getElementsByClassName("field-row");
let Gameboard = (() => {
    let active = 0;
    let gameboard = ["","","","","","","","",""];
    let someoneWon = 0;
    let disableMarking = 0;
    let resultText = document.getElementById("result-text");
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
    let ClearBoard = () => {
        let restartButton = document.getElementById("restart");
        restartButton.addEventListener("click", function(){
            for (let i = 0; i < gameboard.length; i++) {
                cells[i].textContent = "";
                gameboard = ["","","","","","","","",""];  
                active = 0;   
                playerOne.activePlayerColor("yellow");
                playerTwo.activePlayerColor("black");
                resultText.textContent ="Waiting for the winner..."
                someoneWon = 0;
                disableMarking = 0;
            }
        })    
    };
    let GetWinner = () => {
        winnerCombos.forEach(function(row) {
            let a = row[0];
            let b = row[1];
            let c = row[2];
            if(gameboard[a]!=="" && gameboard[a]===gameboard[b] && gameboard[b]===gameboard[c]){   
                someoneWon = 1;     
              if (gameboard[a] === "X") {
                resultText.textContent = `${playerOne.playerName} won!`;
                disableMarking = 1;
                console.log(someoneWon)
              } else {
                resultText.textContent = `${playerTwo.playerName} won!`;
                disableMarking = 1;
              }
            } else someoneWon = 0;
          });
    };
    
    let gameController = () => {  
        if (gameboard.every(el => el !== "") && someoneWon === 0) {
            resultText.textContent = "It's a tie...";
            disableMarking = 1;
            console.log(someoneWon);
        } 
        GetWinner();
        ClearBoard();
    };
    let putPlaceMark = () => {
        playerOne.activePlayerColor("yellow");
        for (let i = 0; i < cells.length; i++) { 
            cells[i].addEventListener("click", function() {             
                if(gameboard[i] === "" && disableMarking === 0){
                    if(active === 0){                       
                        gameboard[i]= playerOne.playerMark;
                        playerOne.activePlayerColor("black");
                        playerTwo.activePlayerColor("yellow");
                        active = 1;
                    } else if (active === 1) {
                        gameboard[i] = playerTwo.playerMark;
                        playerOne.activePlayerColor("yellow");
                        playerTwo.activePlayerColor("black");
                        active = 0;
                    } 
                } else return                                    
                cells[i].textContent = gameboard[i];
                gameController();
            })      
        }
    }
    return {gameboard, putPlaceMark, ClearBoard, active, gameController};
})();
let Players = (number, name, mark) => {   
    let playerNameDisplay = document.getElementById(`player${number}`);
    playerNameDisplay.textContent = name;
    let playerMark = mark; 
    let playerName = name;
    let activePlayerColor = (color) =>{
        if (Gameboard.active === 0) {
            playerNameDisplay.setAttribute("style", `color: ${color};`);           
        } else {
            playerNameDisplay.setAttribute("style", `color: ${color};`);  
        }
    }
    return {playerNameDisplay, playerMark, activePlayerColor, playerName}
};
const playerOne = Players(1, "Alex", "X");
const playerTwo = Players(2, "OtherPlayer", "O"); 
Gameboard.putPlaceMark();

    
  
 