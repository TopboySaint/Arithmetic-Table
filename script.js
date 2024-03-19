function multiplyit() {
  var firstNumber = document.getElementById("oneNumber").value;
  var secondNumber = document.getElementById("twoNumber").value;
  var myOutput = "";

  for (col = 1; col <= secondNumber; col++) {
    myOutput += `<tr>`;

    for (row = 1; row <= firstNumber; row++) {
      myOutput += `<td>${row} x ${col} = ${col * row}</td>`;
    }

    myOutput += `</tr>`
  }

  mytable.innerHTML += myOutput;
}

function divideit() {
  var firstNumber = document.getElementById("oneNumber").value;
  var secondNumber = document.getElementById("twoNumber").value;
  var myOutput = "";

  for (col = 1; col <= firstNumber; col++) {
    myOutput += `<tr>`;

    for (row = 1; row <= secondNumber; row++) {
      myOutput += `<td>${col} / ${row} = ${(col / row).toFixed(0)}</td>`;
    }

    myOutput += `</tr>`
  }
  mytable.innerHTML = myOutput;
}

function add() {
  var firstNumber = document.getElementById("oneNumber").value;
  var secondNumber = document.getElementById("twoNumber").value;
  var myOutput = "";

  for (col = 1; col <= firstNumber; col++) {
    myOutput += `<tr>`;

    for (row = 1; row <= secondNumber; row++) {
      myOutput += `<td>${col} + ${row} = ${col + row}</td>`;
    }

    myOutput += `</tr>`
  }
  mytable.innerHTML = myOutput;
}

function minus() {
  var firstNumber = document.getElementById("oneNumber").value;
  var secondNumber = document.getElementById("twoNumber").value;
  var myOutput = "";

  for (col = 1; col <= firstNumber; col++) {
    myOutput += `<tr>`;

    for (row = 1; row <= secondNumber; row++) {
      myOutput += `<td>${col} - ${row} = ${col - row}</td>`;
    }

    myOutput += `</tr>`
  }
  mytable.innerHTML = myOutput;
}
