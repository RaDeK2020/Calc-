let display = document.getElementById("main");

let btn = Array.from(document.getElementsByClassName("btn"));

btn.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "√":
        try {
          display.innerText = Math.sqrt(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "x2":
        try {
          display.innerText = Math.pow(display.innerText, 2);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "DEL":
        display.innerText = "";
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
