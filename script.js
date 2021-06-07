// calculates the area of a trapezoid by inputting your numbers in the input boxes.

document.getElementById('button').addEventListener('click', calculateAreaOfTrapezoid)

function calculateAreaOfTrapezoid () {
  const intBase1 = parseInt(document.getElementById('input-one').value)
  const intBase2 = parseInt(document.getElementById('input-two').value)
  const intHeight = parseInt(document.getElementById('input-three').value)
  const baseTotal = intBase1 + intBase2
  alert((baseTotal / 2) * intHeight)
}
