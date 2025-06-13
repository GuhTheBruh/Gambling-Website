let luckValue = localStorage.getItem("luckValue")
  ? parseInt(localStorage.getItem("luckValue"))
  : 0;
//this is how luckValue is stored accross all the html files
luckValue = Math.max(-100, Math.min(100, luckValue));
localStorage.setItem("luckValue", luckValue); //store the item

let luckometer = document.getElementById("theLuckometer");
luckometer.value = luckValue;

let luckometerInfo = document.getElementById("luckoMeter-info");
luckometerInfo.textContent = luckometer.value;

let desireValue = localStorage.getItem("desireValue") || "";
const desireInput = document.getElementById("desireInput");

if (desireInput) {
  desireInput.value = desireValue;

  desireInput.addEventListener("input", () => {
    desireValue = desireInput.value.trim(); 
    localStorage.setItem("desireValue", desireValue);
  });
} 


const verdictMessage = document.getElementById("theVerdict");

if (luckValue <= -50) {
  verdictMessage.textContent = "Wow, you're insanely unlucky";
  if(desireValue != "")
    {
      verdictMessage.textContent += ", you definitley wont get "+desireValue;
    }
}else if (luckValue < 0) {
  verdictMessage.textContent =
    "You weren't so lucky today";
    if(desireValue != "")
    {
      verdictMessage.textContent += ", you probably wont get "+desireValue;
    }
} else if (luckValue <= 50) {
  verdictMessage.textContent = "Your luck is above average";
  if(desireValue != "")
    {
      verdictMessage.textContent += ", you may or may not get "+desireValue;
    }
} 
else if (luckValue <= 80) {
  verdictMessage.textContent = "Your luck is looking pretty good";
  if(desireValue != "")
    {
      verdictMessage.textContent += ", you will probably get "+desireValue;
    }
} 
else {
  verdictMessage.textContent =
    "Your luck is insanely high";
  if(desireValue != "")
    {
      verdictMessage.textContent += ", you will most certainly get "+desireValue;
    }
}
