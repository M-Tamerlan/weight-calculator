
"use strict";
function calculateCalories(event) {
  event.preventDefault();

  var weight = parseFloat(document.getElementsByName("weight")[0].value);
  var height = parseInt(document.getElementsByName("height")[0].value);
  var age = parseInt(document.getElementsByName("age")[0].value);
  var gender = document.querySelector(
    'input[name="genderButton"]:checked'
  ).value;
  var activityLevel = document.querySelector(
    'input[name="activeButton"]:checked'
  ).value;

  var bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  var calories;
  switch (activityLevel) {
    case "sedentary":
      calories = bmr * 1.2;
      break;
    case "lightly-active":
      calories = bmr * 1.375;
      break;
    case "moderately-active":
      calories = bmr * 1.55;
      break;
    case "very-active":
      calories = bmr * 1.725;
      break;
    case "super-active":
      calories = bmr * 1.9;
      break;
  }

  var weightLossPerWeek = (calories - 500) / 7700; // Предполагаем, что в 1 кг жира содержится 7700 калорий
  var weightLossPerMonth = weightLossPerWeek * 4.35; // Приближенное количество недель в месяце

  document.getElementById("result").innerHTML =
    "Your daily calorie intake:<br> " + calories.toFixed(2);
  document.getElementById(
    "result1"
  ).innerHTML = `To lose weight safely, reduce your intake to ${(
    calories - 500
  ).toFixed(2)} calories. In a week, you will lose  ${weightLossPerWeek.toFixed(
    2
  )} kg, and in a month, you will lose ${weightLossPerMonth.toFixed(2)} kg.`;

  // // Дополнительные выводы результатов (по желанию)
  // document.getElementById("result2").innerHTML =
  //   "Другой вариант вывода результатов, если нужно";
  // document.getElementById("result3").innerHTML =
  //   "Еще один вариант вывода результатов, если нужно";
}

function bodyMassIndex(event) {
  event.preventDefault();
  var weight = parseFloat(document.getElementsByName("weight")[0].value);
  var height = parseInt(document.getElementsByName("height")[0].value);
  var BMI = weight / ((height / 100) * (height / 100));
  document.getElementById("resultBMI").innerHTML =
    "Your BMI is " + BMI.toFixed(2);
}
const modal = document.getElementsByClassName("modal")[0];
const openModal = () => {
  modal.style.display = "block";
  // modal.style.zIndex = "999";
};
const closeModal = () => {
  modal.style.display = "none";
};
