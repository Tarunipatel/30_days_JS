'use strict';

// console.log(document.querySelector('.message').textContent);

// (document.querySelector('.message').textContent)= "hello"

// document.querySelector('.number').textContent="16"

// console.log(document.querySelector('.guess').value)

let num = Math.trunc(Math.random()*20)+1;


let score=20;
let high=0;

document.querySelector('.check').addEventListener('click',function(){
   const guess=Number(document.querySelector('.guess').value); 
   console.log(guess, typeof guess);

    if(!guess)
{
    document.querySelector('.message').textContent= ' No Number';
} 
else if(guess===num)
{
    document.querySelector('.message').textContent = 'Correct answer';
    document.querySelector('.number').textContent = num;
    document.querySelector('body').style.backgroundColor='green';
    if(score>high)
    {   high=score;
        document.querySelector('.highscore').textContent=high;
    }
    
}
else if(guess>num)
{    if(score>1)
{
    

    document.querySelector('.message').textContent= 'too high';
    score--;
    document.querySelector('.score').textContent=score;
}
else{
    document.querySelector('.message').textContent = 'You lost the game!'
}
}
else if(guess<num){
    if(score>1)
    {
        document.querySelector('.message').textContent = 'too low';
        score--;
        document.querySelector('.score').textContent=score;
    }
   else{
    document.querySelector('.message').textContent = 'You lost the game!'
   }
}
});

document.querySelector('.again').addEventListener('click',function(){

   score=20;
   num = Math.trunc(Math.random()*20)+1;
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.score').textContent=score;
   document.querySelector('.number').textContent='?';
   document.querySelector('.guess').value=' ';
   document.querySelector('body').style.backgroundColor= '#222'

})