var p1 = document.getElementsByTagName("button")[0];
var p2 = document.getElementsByTagName("button")[1];
var reset = document.getElementsByTagName("button")[2];
var span1 = document.getElementById("p1");
var span2 = document.getElementById("p2");
var numinput = document.querySelector("input");
var winscore = document.querySelector("p span");

var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

function reset1(){
  gameOver = false;
  span1.textContent = p1score = 0;
  span2.textContent = p2score = 0;
  span1.style.color = "black";
  span2.style.color = "black";
}

p1.addEventListener("click", function(){
  if(!gameOver){
    p1score++;
    span1.textContent = p1score;
  }
  if(p1score === winningScore){
    span1.style.color = "green";
    gameOver = true;
  }
});

p2.addEventListener("click", function(){
  if(!gameOver){
    p2score++;
    span2.textContent = p2score;
  }
  if(p2score === winningScore){
    span2.style.color = "green";
    gameOver = true;
  }
});

reset.addEventListener("click", function(){
  reset1();
});



numinput.addEventListener("change", function(){
  winscore.textContent = numinput.value;
  winningScore = Number(numinput.value);
  reset1();
});

//comment
