
let input = document.querySelector("input");

function Addvalue(value) {
  input.value = input.value + value;
}

function clearAll() {
  input.value = "";
}

function Delete() {
  input.value = input.value.slice(0, -1);
}

function equal() {
  try {
    let expression = input.value;
    if (expression.trim() === "") {
      input.value = "";
      return;
    }


    input.value = "Calculating...";
    
    setTimeout(() => {
      try {
        let result = eval(expression);  
        if (isNaN(result) || !isFinite(result)) {
          input.value = "Error"; 
        } else {
          input.value = result;
        }
      } catch {
        input.value = "Error";
      }
    }, 800); 
    
  } catch {
    input.value = "Error";
  }
}

