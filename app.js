let boxes = document.querySelectorAll(".box1");
let resetbtn = document.querySelector("#rg");
let ng1 = document.querySelector("#ng");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let turno = true; 
const winpat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame = () => {
    turno = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box1) => {
    box1.addEventListener("click",() =>{
        if(turno){
            box1.innerText = "O";
            turno = false;
        }else{
            box1.innerText = "X";
            turno = "true";
        }
        box1.disabled = true;
        count++;
        let isWinner = CheckWinner();
        if(count === 9 && !isWinner){
            showDraw();
        }
    });
})
const showDraw = () => {
    msg.innerText = `oops! This game is a Draw.`;
    msgcontainer.classList.remove("hide");

};
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}    
const CheckWinner = () =>{
    for(let pattern of winpat){
        let pos1val1 = boxes[pattern[0]].innerText;
        let pos2val2 = boxes[pattern[1]].innerText;
        let pos3val3 = boxes[pattern[2]].innerText;
        if(pos1val1 != "" && pos2val2 != "" && pos3val3 != ""){
            if(pos1val1 === pos2val2 && pos2val2 === pos3val3){
                showWinner(pos1val1);
                return true;
            }
        }
    }
};
ng1.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);