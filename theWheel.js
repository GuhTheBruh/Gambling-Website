window.onload = () => {
  const props = {
    items: [
      {
        label: "0",
      },
      {
        label: "1",
      },
      {
        label: "2",
      },
      {
        label: "3",
      },
      {
        label: "4",
      },
      {
        label: "5",
      },
      {
        label: "6",
      },
      {
        label: "7",
      },
      {
        label: "8",
      },
      {
        label: "9",
      },
      {
        label: "10",
      },
      {
        label: "11",
      },
      {
        label: "12",
      },
      {
        label: "13",
      },
      {
        label: "14",
      },
      {
        label: "15",
      },
      {
        label: "16",
      },
      {
        label: "17",
      },
      {
        label: "18",
      },
      {
        label: "19",
      },
      {
        label: "20",
      },
      {
        label: "21",
      },
      {
        label: "22",
      },
      {
        label: "23",
      },
      {
        label: "24",
      },
      {
        label: "25",
      },
      {
        label: "26",
      },
      {
        label: "27",
      },
      {
        label: "28",
      },
      {
        label: "29",
      },
      {
        label: "30",
      },
      {
        label: "31",
      },
      {
        label: "32",
      },
      {
        label: "33",
      },
      {
        label: "34",
      },
      {
        label: "35",
      },
      {
        label: "36",
      },
      {
        label: "37",
      },
      {
        label: "38",
      },
      {
        label: "39",
      },
      {
        label: "40",
      },
    ],
  };

  const container = document.querySelector(".wheel-wrapper");
  const button = document.getElementById("spin");
  
  let num = Math.floor(Math.random() * 41);
  let winType = document.getElementById("winType");
  let winValue = document.getElementById("winValue");
  let board = document.getElementById("colorForm");
  
  const selectedColor = document.getElementById("colorForm");
  let chosenValue = "";
  
  let luckValue = localStorage.getItem("luckValue")
  ? parseInt(localStorage.getItem("luckValue"))
  : 0;

  window.wheel = new spinWheel.Wheel(container, props);
  window.wheel.isInteractive = false; //Disabled it for now
  window.wheel.itemLabelFontSizeMax = 25;
  window.wheel.itemBackgroundColors = [
    "#00FF00",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
    "#FF0000",
    "#000000",
  ];
  window.wheel.itemLabelColors = ["#ffffff"];
  window.wheel.overlayImage = base;

  button.onclick = function () {
    window.wheel.spinToItem(
      (itemIndex = num),
      (duration = 10000),
      (spinToCenter = true),
      (numberOfRevolutions = 5),
      (direction = 1),
      (easingFunction = null)
    );

    setTimeout(() => {
      board.remove();
      winBoard.style.display = "block";
    }, 10000); 
    const numberInput = document.getElementById("numberInput").value;
    const selectedRadio = document.querySelector(
      'input[name="colorChosen"]:checked'
    );

    if (selectedRadio) {
      chosenValue = selectedRadio.value;
      if (selectedRadio.id === "straight") {
        //if it is a straight then things become mroe complicated
        if (numberInput !== "") {
          chosenValue = numberInput;
        } else {
          chosenValue = "0";
        }
      }
    } else {
      chosenValue = "0"; // default bet will be 0
    }

    if (chosenValue == 100 && num % 2 != 0 && num != 0) {
      //even number that isnt 20 or 0
      console.log("you won:" + num);
      luckValue += 25;
      winType.textContent = "You Won!: ";
      winValue.textContent = "+25";
    } else if (chosenValue == 200 && num % 2 == 0) {
      //odd number
      console.log("you won:" + num);
      luckValue += 25;
      winType.textContent = "You Won!: ";
      winValue.textContent = "+25";
    } else if (chosenValue == num) {
      console.log("wow, you won big:" + num);
      luckValue += 75;
      winType.textContent = "YOU WON BIG!: ";
      winValue.textContent = "+75!";
    } else if ((chosenValue == 300 || chosenValue == num)&& num == 0) {
      console.log("HOLY #$%@#$^&@:" + num);
      luckValue += 100;
      winType.textContent = "HOLY #$%@$#!: ";
      winValue.textContent = "+100!!!";
    } else {
      console.log("Haha, you lost:" + num);
      luckValue += -25;
      winType.textContent = "You lost: ";
      winValue.textContent = "-25";
    }

    console.log(chosenValue);

    Array.from(selectedColor.elements).forEach((element) => {
      element.disabled = true;
    });
    button.disabled = true; //Disables the form and the button so you cant change your choice
    localStorage.setItem("luckValue", luckValue);
  };

};
