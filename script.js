let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let msg = document.querySelector("#msg");
let newGame = document.querySelector(".new-btn");

let turn0 = true; // player0 turn

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
      
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                msg.innerText = `Congratulations ! Winner ${pos1}`;
                disableBoxes();
            }
        } 
    }

}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            box.disabled = true;
        } else {
            box.innerText = "X";
            turn0 = true;
            box.disabled = true;
        }

        checkWinner();
        
    })
})

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);