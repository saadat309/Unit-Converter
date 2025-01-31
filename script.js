const userInput = document.getElementById("number-input");

const convertBtn = document.getElementById("convert-btn");

const lengthConv = document.getElementById("length-conversion");

const volumeConv = document.getElementById("volume-conversion");

const massConv = document.getElementById("mass-conversion");

convertBtn.addEventListener("click", function () {
  converter(3.28084, 0.3048, "meters", "feet", lengthConv);
  converter(0.264172, 3.78541, "litres", "gallons", volumeConv);
  converter(2.20462, 0.453592, "kilograms", "pounds", massConv);
});

function converter(formula1, formula2, unit1, unit2, sentence) {
  const userValue = userInput.value;

  const unit1ToUnit2 = userValue * formula1;
  const finalValue1 = unit1ToUnit2.toFixed(2);

  const unit2ToUnit1 = userValue * formula2;
  const finalValue2 = unit2ToUnit1.toFixed(2);

  sentence.textContent = `${userValue} ${unit1} = ${finalValue1} ${unit2} | ${userValue} ${unit2} = ${finalValue2} ${unit1}`;
}
