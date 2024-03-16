function multiplyit() {
  var firstNumber = document.getElementById("oneNumber").value;
  var secondNumber = document.getElementById("twoNumber").value;
  var myOutput = "";

  for (col = 1; col <= firstNumber; col++) {
    myOutput += `<tr>`;

    for (row = 1; row <= secondNumber; row++) {
      myOutput += `<td>${col} x ${row} = ${col * row}</td>`;
    }

    myOutput += `</tr>`
  }

  mytable.innerHTML = myOutput;
}

function divideit() {
  var firstNumber = document.getElementById("oneNumber").value;
  var secondNumber = document.getElementById("twoNumber").value;
  var myOutput = "";

  for (col = 1; col <= firstNumber; col++) {
    myOutput += `<tr>`;

    for (row = 1; row <= secondNumber; row++) {
      myOutput += `<td>${col} / ${row} = ${col / row}</td>`;
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

// function makeTable(rows, columns){
//     let table = "<table border='1'>";

// }
