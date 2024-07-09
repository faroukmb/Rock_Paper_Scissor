const res=document.getElementById('res');
function getComputerChoice(){
 let choixn=Math.floor(Math.random() * 3);
   let choix;
   if (choixn==0){choix="scissor";}
   if (choixn==1){choix="rock";}
   if (choixn==2){choix="paper";}
   return choix;
}
function getHumanChoice(){
 let hc1=prompt('choose rock or paper or scissor');
 let hc2=hc1.toLowerCase();
if (hc2=="paper" || hc2=="rock" || hc2=="scissor"){
   return hc2;
}
else{
   return getHumanChoice();
}
}

function playGame(){
   let humanscore=0;
   let computerscore=0;
   function playRound(humanChoice,computerChoice,rn){
        if (humanChoice===computerChoice){
         humanscore++;
         computerscore++;
         
         res.innerHTML+=(`Round ${rn}: Tie!! you both choose ${humanChoice}</br>`);
         
         }
        else if((humanChoice === "paper" && computerChoice ==="rock") || (humanChoice ==="rock" && computerChoice ==="scissor") || (humanChoice==="scissor" && computerChoice==="paper")){
         humanscore++;
         res.innerHTML+=`Round ${rn}: you won this round! you choose ${humanChoice} but he choose ${computerChoice}</br>`;
         
        }
        else{
         computerscore++; 
         res.innerHTML+=`Round ${rn}: Computer won this round! you choose ${humanChoice} but he choose ${computerChoice}</br>`; 
        }
       
      }
      for(let i=0;i<5;i++){
         const humanChoice=getHumanChoice();
         const computerChoice=getComputerChoice();
         let roundNum=i+1;
         playRound(humanChoice,computerChoice,roundNum);
      }
   res.innerHTML+=(`Human Score: ${humanscore}</br>`);
   res.innerHTML+=`Computer Score: ${computerscore}</br>`;
  }


  playGame();
  