var timer=60;
var score=0;
var hitrn =0;



function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){

var bub = "";
for(var i=1;i<=210;i++){
    var rn = Math.floor(Math.random()*10)
    bub += ` <div id="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = bub;
}

function runTimer(){
   var timerinterval = setInterval(function() {
        if(timer>0){
            timer--;
       document.querySelector("#timeval").textContent = timer;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#pbtm").innerHTML =`<h1>GAME OVER</h1>`
        }
    },1000);
}



document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
runTimer();
makeBubble();
getNewHit();
