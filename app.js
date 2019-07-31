 /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*to change scoree by js we can use 
 document.getElementById('id with out #').property(textContent)=value;
 it works for only id's not for classes
 ex:document.getElementById('score-0').textContent=0;
*/
alert("please enter target");
var scores,roundscore,activeplayer,target,gameplaying;
init();
//dice=Math.floor(Math.random()*7); gives zero

//document.querySelector('#current-' + activeplayer).textContent=dice;
//document.querySelector("#current-" + activeplayer).innerHTML=dice; 
document.querySelector('.dice').style.display='none';
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gameplaying){
       target=document.querySelector('#text').value;
       if(target){
           
       }
       else{
           target=100;
       }
    //random number
    var dice;
    dice=Math.floor((Math.random()*6)+1);
    //display result
    document.querySelector('.dice').style.display='block'; 
    document.querySelector('.dice').src='dice-'+dice+'.png';
    //upadte the round score if the rolled dice iss not a 1
    if(dice !=1){
         roundscore=roundscore+dice; 
        document.querySelector('#current-'+activeplayer).textContent=roundscore;
    }
    else{
        des();
    }  
 }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
   scores[activeplayer]+=roundscore;
    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    if(scores[activeplayer]>=target){
        document.querySelector('#name-'+activeplayer).textContent='Winner';
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');    document.querySelector('.dice').style.display='none';
        gameplaying=false;
    }
    else{
      des();
    }
        }
});
function des(){
    document.querySelector('#current-'+activeplayer).textContent='0';
        activeplayer==0? activeplayer=1 :   activeplayer=0;
        roundscore=0;
        //document.querySelector('.player-0-panel').classList.add('active'); to add a class
        //document.querySelector('.player-1-panel').classLsit.remove('active'); to remove a class
        //to add or remove using a single statement i.e toggle
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
       document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click',function(){
    init();
});
function init(){
    scores=[0,0];
    roundscore=0;
    activeplayer=0;
    gameplaying=true; document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
     document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}