var 카드들 = ['orange','orange','red','red','black','black','blue','blue','green','green','yellow','yellow'];
var 색깔 =[];
var 가로=4;
var 세로=3;
function 셔플(){
    for(var i=0; 0<카드들.length; i++){
        색깔 = 색깔.concat(카드들.splice(Math.floor(Math.random()*카드들.length),1))
    }
    console.log(색깔)   
}
function 카드세팅(가로,세로){
    for(var j=0; j<가로*세로; j+=1){
        var card= document.createElement('div');
        card.className='card';
        var inner= document.createElement('div');
        inner.className='inner';       
        var front= document.createElement('div');
        front.className='front';
        var back= document.createElement('div');
        back.className='back';
        back.style.backgroundColor = 색깔[j];        
        inner.appendChild(front)
        inner.appendChild(back)
        card.appendChild(inner)
    (function(c){
            card.addEventListener('click',function(){
                c.classList.toggle('flipped')
            })
        })()
    }
    document.body.appendChild(card)
}
셔플()
카드세팅(가로,세로)
