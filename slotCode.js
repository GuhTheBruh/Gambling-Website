const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const spin = document.getElementById("spin2");
const refresh = document.getElementById("refresh"); //Wont be in the official website
const placeHolder = document.getElementById("winType");
const winAmount = document.getElementById("winValue");
const winBoard = document.getElementById("winBoard");

spin.onclick = function () {

  let ran1 = Math.floor(Math.random() * 10 + 1);
  let ran2 = Math.floor(Math.random() * 10 + 1);
  let ran3 = Math.floor(Math.random() * 10 + 1);
 
  setTimeout(() => {
    num1.textContent = ran1;
  }, 500); // Delay for num1 to appear

  setTimeout(() => {
    num2.textContent = ran2;
  }, 1000); // Delay for num2 to appear (after num1)

  setTimeout(() => {
    num3.textContent = ran3;
  }, 1500);

  spin.disabled = true; //only 1 spin

  

  //win conditions
  setTimeout(() => {
    
    winBoard.style.display = "block"; 
  if (
    (ran1 == 7 && ran2 == 7 && ran3 == 7) ||
    (ran1 == 1 && ran2 == 2 && ran3 == 3) ||
    (ran1 == 3 && ran2 == 2 && ran3 == 1)
  ) {
    //special wins (0.1%)
    placeHolder.textContent = "HOLY #&@#^&$!!!!"; //instantly max on the luckometer
    luckValue+= 100;
    winAmount.textContent = "+100";
  } else if (ran1 == ran2 && ran2 == ran3) {
    //wins (1%)
    placeHolder.textContent = "Wow that was lucky"; //+50 points on the luckometer
    luckValue+= 50;
    winAmount.textContent = "+50";
  } else if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
    //Kind of a win (27%)
    placeHolder.textContent = "I guess that's kinda lucky?"; //+25 points on the luckometer
    luckValue+= 25;
    winAmount.textContent = "+25";
  } //fails
  else {
    placeHolder.textContent = "Aw dangit!!"; //-25 points on the luckometer
    luckValue+= -25;
    winAmount.textContent = "-25";
  }


}, 1500);
};

refresh.onclick = function () {
  spin.disabled = false;
};

localStorage.setItem("luckValue", luckValue);