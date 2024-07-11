const res=document.getElementById('res');
const ro=document.querySelector("#rock");
const pa=document.querySelector("#paper");
const sc=document.querySelector("#scissor");
function getComputerChoice(){
 let choixn=Math.floor(Math.random() * 3);
   let choix;
   if (choixn==0){choix="scissor";}
   if (choixn==1){choix="rock";}
   if (choixn==2){choix="paper";}
   return choix;
}
   let humanscore=0;
   let computerscore=0;
   let rn=1;
   function playRound(humanChoice,computerChoice,rn){
        if (humanChoice===computerChoice){
         humanscore++;
         computerscore++;
         
         res.innerHTML=(`Round ${rn}: Tie!!</br> your score: ${humanscore}</br> computer score: ${computerscore}`);
         
         }
        else if((humanChoice === "paper" && computerChoice ==="rock") || (humanChoice ==="rock" && computerChoice ==="scissor") || (humanChoice==="scissor" && computerChoice==="paper")){
         humanscore++;
         res.innerHTML=`Round ${rn}: you won this round! </br> your score: ${humanscore}</br> computer score: ${computerscore}`;
         
        }
        else{
         computerscore++; 
         res.innerHTML=`Round ${rn}: Computer won this round! </br> your score: ${humanscore}</br> computer score: ${computerscore}`; 
        }
       }
        

      
      function handleClick(event){
        const humanChoice=event.target.value;
        const computerchoice=getComputerChoice();
        if (computerscore < 5 && humanscore < 5){
          playRound(humanChoice,computerchoice,rn++);
        }
        else{
          if (humanscore==5){
          res.innerHTML="Congratulations! you won the game:)"
        }
         else {
          res.innerHTML="Hard luck! the computer won the game:("
      }
        }
        
      }
        
       
       ro.addEventListener("click",(e)=>handleClick(e));
       pa.addEventListener("click",(e)=>handleClick(e));
       sc.addEventListener("click",(e)=>handleClick(e));
   
       
   

 
   