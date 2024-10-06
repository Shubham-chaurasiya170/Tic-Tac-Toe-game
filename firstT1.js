let boxes = document.querySelectorAll(".box1");
let restBtn = document.querySelector(".resetbtn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
msgContainer.classList.add("hide");

let msg = document.querySelector("#msg");

let turnO = true;


const winPatterns = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 7],
   [0, 4, 8],
   [2, 4, 6],
];
const resetGame = ()=>{
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
}
boxes.forEach((box1) => {
   box1.addEventListener("click", () => {
      console.log(" box was clicked");
      if (turnO === true) {
         box1.innerText = "O";
         turnO = false;
      } else {
         box1.innerText = "X";
         turnO = true;
      }
      box1.disabled = true;
      checkWinner();
   });
});

const disableBoxes = () =>{
   for(let box1 of boxes){
      box1.disabled = true; 
   }
}
const enableBoxes = () =>{
   for(let box1 of boxes){
      box1.disabled = false;
      box1.innerText =""; 
   }
}
const showWinner = (winner) => {
   msg.innerText =` Congratulations ,winner is ${winner} `;
   msgContainer.classList.remove("hide");
   
   disableBoxes();
};
const checkWinner = () => {
   for (let pattern of winPatterns) {

      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
         if (pos1Val === pos2Val && pos2Val === pos3Val) {
            // console.log("winner", pos1Val);
            showWinner(pos1Val);
         }
      }
   }
};
newGamebtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame);


