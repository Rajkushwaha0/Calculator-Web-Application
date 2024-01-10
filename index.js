let input = document.querySelector("input");
let btns = document.querySelectorAll(".button");
let arr = Array.from(btns);

for (let btn of arr) {
  btn.addEventListener("click", (e) => {
    let match = e.target.value;
    if (match == "AC") {
      input.value = "";
    } else if (match == "CE") {
      let str = input.value;
      input.value = str.substring(0, str.length - 1);
    } else if (match == "=") {
      let str = input.value;
      let lastchar = str.charAt(str.length - 1);
      if (
        lastchar != "+" ||
        lastchar != "*" ||
        lastchar != "-" ||
        lastchar != "%" ||
        lastchar != "/" ||
        lastchar != "**"
      ) {
        //error handling
        try {
          input.value = eval(str);
        } catch (err) {
          setTimeout(() => {
            input.value = "";
          }, 1000);
          input.value = "Wrong Expression";
        }
      }
    } else {
      input.value += match;
    }
  });
}
