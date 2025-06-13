const hit = document.getElementById("hit");
const stand = document.getElementById("stand");
const yourHand = document.getElementById("yourHand");
const botHand = document.getElementById("botHand");
const result = document.getElementById("winType");

const playerCards = document.getElementById("yourCards");
const aiCards = document.getElementById("aiCards");
let aiHiddenCards = "";

let playerHand = 0;
let aiHand = 0;

let hitCount = 0;
let aihitCount = 0; //used to calculate if someone got blackjack

let winAmount = document.getElementById("winValue");
let winBoard = document.getElementById("winBoard");

hit.onclick = function () {
  
  if (playerHand < 21 && aiHand <= 21) {
    let playerVal = Math.round(Math.random() * 11) + 1;
    playerHand += playerVal

    console.log("PLAYER HAND: " + playerHand); //testing to see if game actually works
    hitCount++;

    if(hitCount == 1)
    {
      playerCards.textContent += playerVal;
    }
    else
    {
      playerCards.textContent += ","+playerVal;
    }
  }
  if (aiHand <= 16) {
    //The bot isnt going to take that big of a risk
    let aiVal = Math.round(Math.random() * 11) + 1;
    aiHand += aiVal;

    aihitCount++;
    console.log("AI HAND(HIDDEN): " + aiHand);  
    if (aihitCount == 1) {
      //only reveal the ai's first "card"
      botHand.textContent = aiHand + "";
      console.log("AI HAND: " + aiHand);

      aiCards.textContent = aiVal+aiCards.textContent;
    }
    else
    {
      aiHiddenCards = aiVal+","+aiHiddenCards;
    }
  }

  if (playerHand >= 21 || aiHand >= 21) {
    gameEnd();

    botHand.textContent = aiHand + "";
  }

  yourHand.textContent = playerHand + "";
};

stand.onclick = function () {
  if (hitCount != 0) {
    gameEnd();
    botHand.textContent = aiHand; //reveal when game ends
  }
};

function gameEnd() {
  hit.disabled = true;
  stand.disabled = true;
  while (aiHand <= 16) {
    //bot keeps taking cards until it reaches threshold
    let aiVal = Math.round(Math.random() * 11) + 1;
    aiHand += aiVal;
    aihitCount++;
    console.log("AI HAND(hidden): " + aiHand);
    aiHiddenCards = aiVal+","+aiHiddenCards;
  }
  aiCards.textContent = aiHiddenCards+aiCards.textContent; 

  if(playerHand == aiHand)//draw
  {
    if(playerHand == 21)
    {
      luckValue +=20;
      result.textContent = "still lucky I guess: ";
      winAmount.textContent = "+20";
    }
    else if (playerHand <21)
    {
      luckValue +=5;
      result.textContent = "Minor win: ";
      winAmount.textContent = "+5";
    }
    else{
      luckValue += -5;
      result.textContent = "Minor loss: ";
      winAmount.textContent = "-5";
    }
    winBoard.style.display = "block";
  }

  if(playerHand != aiHand)
  {//Someone either won or lost
    if(playerHand == 21)
    {
      luckValue += 50;
      result.textContent = "WOW, 21!: ";
      winAmount.textContent = "+50";
      if(hitCount == 2)
      {
        luckValue += 50;//an extra 50
        result.textContent = "NO WAY, BLACKJACK!!!: ";
        winAmount.textContent = "+100";
      }
    }
    else if(aiHand == 21)
      {
        luckValue += -50;
        result.textContent = "Damn, the AI got lucky...: ";
        if(aihitCount == 2)
          winAmount.textContent = "-50";
        {
          luckValue += -50;//an extra 50
          result.textContent = "THE AI GOT BLACKJACK?!?: ";
          winAmount.textContent = "-100";
        }
      }
      else if(playerHand > 21 && aiHand > 21)
      {
        luckValue +=-5;
        result.textContent = "Wow, we're both unlucky: ";
        winAmount.textContent = "-5";
      }
    else if(playerHand > aiHand && playerHand <21 || aiHand >21)
    {
      luckValue +=30;
      result.textContent = "Wow, I won!: ";
      winAmount.textContent = "+30";
    }
    else if(aiHand > playerHand && aiHand <21 || playerHand >21)
    {
      luckValue +=-30;
      result.textContent = "Damn, I lost!: ";
      winAmount.textContent = "-30";
      
    }

    winBoard.style.display = "block";
  }
  localStorage.setItem("luckValue", luckValue); //store the item
}
