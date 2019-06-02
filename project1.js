var dice,dice1,chance,score,current,d1,d2,prev=0,prev2=0,val;
document.querySelector('#head1').classList.add('active');
score=[0,0];
current=0;
chance=0;
val=100;
document.querySelector('#head2').style.border='2px solid red';
d1=document.querySelector('#div12');
d2=document.querySelector('#div13');
document.querySelector('#button1').addEventListener('click',function(){
    dice=Math.floor(Math.random()*6+1);
    dice1=Math.floor(Math.random()*6+1);
    document.querySelector('#ima2').src='./imag-' + dice + '.png';
    document.querySelector('#ima3').src='./imag-' + dice1 + '.png';
    //we can also use var temp=document.querySelector('#id');
    //and this can be used as temp.textContent=dice;
    if(chance==0)
        {
            document.querySelector('#head2').style.border='2px solid red';
        }
    if(chance==0 && dice!=1 && dice1!=1)
        {
            if((prev==6 && dice==6)||(prev2==6 && dice1==6)){ 
                score[0]=0;
            }
            else{
            document.querySelector('#head2').style.border='2px solid red';
             current=current+dice+dice1;
            d1.textContent=current;
                prev=dice;
                prev2=dice1;
                }
        }
    else if(chance==0 && (dice==1 || dice1==1))
        {
            d1.textContent=0;
            current=0;
            chance=1;
            document.querySelector('#head2').style.border='none';
            prev=0;
            prev2=0;
        }
    else if(chance==1 && dice!=1 && dice1!=1)
        {
            if((prev==6 && dice==6)||(prev2==6 && dice1==6)){ 
                score[1]=0;
            }
            else{
            current=current+dice+dice1;
            d2.textContent=current;
                prev=dice;
                prev2=dice1;
                }
        }
    else if(chance==1 && (dice==1 || dice1==1))
        {
            d2.textContent=0;
            current=0;
            chance=0;
            prev=0;
            prev2=0;
        }
});
document.querySelector('#button2').addEventListener('click',function(){
    val=document.querySelector('#num1').value;    
    if(chance==0)
            {
              score[0]=score[0]+current;
              document.querySelector('#div142').textContent=score[0];
              if(score[0]>=val)
                  {
                      alert('player1 won the game');
                      document.querySelector('#button1').style.display='none';
                  }
              current=0;
              chance=1;
              d1.textContent=0;
              document.querySelector('#head2').style.border='none';
            }
        else{
              score[1]=score[1]+current;
              document.querySelector('#div152').textContent=score[1];
              if(score[1]>=val)
                  {
                      document.querySelector('#button1').style.display='none';
                      alert('player2 won the game');
                  }  
              current=0;
              chance=0;
              d2.textContent=0;
              document.querySelector('#head2').style.border='2px solid red';
            }
});


