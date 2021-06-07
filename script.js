// calculates the area of a trapezoid by inputting your numbers in the input boxes.

document.getElementById('button').addEventListener('click', calculateAreaOfTrapezoid)

function calculateAreaOfTrapezoid () {
  let intBase1 = parseInt(document.getElementById('input-one').value)
  let intBase2 = parseInt(document.getElementById('input-two').value)
  let intHeight = parseInt(document.getElementById('input-three').value)
  let baseTotal = intBase1 + intBase2
  alert((baseTotal / 2) * intHeight)
}
