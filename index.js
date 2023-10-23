// "use strict";
// function calculateCalories(event) {
//   event.preventDefault();
//   var weight = parseFloat(document.getElementById("weight").value);
//   var height = parseInt(document.getElementById("height").value);
//   var age = parseInt(document.getElementById("age").value);
//   var gender = document.querySelector(
//     'input[name="genderButton"]:checked'
//   ).value;
//   var activityLevel = document.querySelector(
//     'input[name="activeButton"]:checked'
//   ).value;
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
    "Ваша суточная норма калорий:<br> " + calories.toFixed(2);
  document.getElementById(
    "result1"
  ).innerHTML = `Для похудения в безопасном режиме уменьшите норму потребления до ${(
    calories - 500
  ).toFixed(2)} ккал. Через неделю вы похудеете на ${weightLossPerWeek.toFixed(
    2
  )} кг, а через месяц на ${weightLossPerMonth.toFixed(2)} кг.`;

  // // Дополнительные выводы результатов (по желанию)
  // document.getElementById("result2").innerHTML =
  //   "Другой вариант вывода результатов, если нужно";
  // document.getElementById("result3").innerHTML =
  //   "Еще один вариант вывода результатов, если нужно";
}

const modal = document.getElementsByClassName("modal")[0];
const openModal = () => {
  modal.style.display = "block";
  // modal.style.zIndex = "999";
};
const closeModal = () => {
  modal.style.display = "none";
};
