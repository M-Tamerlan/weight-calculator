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

  let weight = parseFloat(document.getElementsByName("weight")[0].value);
  let height = parseInt(document.getElementsByName("height")[0].value);
  let age = parseInt(document.getElementsByName("age")[0].value);
  let gender = document.querySelector(
    'input[name="genderButton"]:checked'
  ).value;
  let activityLevel = document.querySelector(
    'input[name="activeButton"]:checked'
  ).value;

  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  let calories;
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

  let weightLossPerWeek = (calories - 500) / 7700; // Предполагаем, что в 1 кг жира содержится 7700 калорий
  let weightLossPerMonth = weightLossPerWeek * 4.35; // Приближенное количество недель в месяце

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
  let weight = parseFloat(document.getElementsByName("weight")[0].value);
  let height = parseInt(document.getElementsByName("height")[0].value);
  let bmi = weight / ((height / 100) * (height / 100));
  let result;
  //
  let resultBmi;
  if (bmi < 18.5) {
    resultBmi = `Underweight (BMI less than 18.5):
    Your BMI is below normal, indicating that you may be underweight. It's advisable to consult a doctor to determine the reasons and plan a healthy diet.`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultBmi = `Normal Weight (BMI 18.5 - 24.9):
    Your BMI is within the normal range. This is a good indicator for maintaining a healthy weight. It's recommended to maintain a healthy lifestyle and a balanced diet.`;
  } else if (bmi >= 25 && bmi < 29.9) {
    resultBmi = `Overweight (BMI 25 - 29.9):
    You are overweight. To maintain your health, it's advisable to control your diet and increase physical activity.`;
  } else if (bmi >= 30 && bmi < 34.9) {
    resultBmi = `Obesity Class I (BMI 30 - 34.9):
    You have Obesity Class I. This is a level of obesity that can increase the risk of various health issues. Consultation with a doctor and lifestyle adjustments may be necessary.`;
  } else if (bmi >= 35 && bmi < 39.9) {
    resultBmi = `Obesity Class II (BMI 35 - 39.9):
    You have Obesity Class II. This is a more severe form of obesity, requiring medical intervention and dietary changes.`;
  } else {
    resultBmi = `Obesity Class III (BMI 40 and above):
    You have Obesity Class III, also known as morbid obesity. This is the highest level of obesity and requires serious medical measures and lifestyle changes under the supervision of a doctor.`;
  }

  //
  document.getElementById("resultBMI").innerHTML =
    "Your BMI is " + bmi.toFixed(2);
  document.getElementById("result-Bmi").innerHTML = resultBmi;
}

function bestWeight(event) {
  event.preventDefault();

  let height = parseInt(document.getElementsByName("height")[0].value);
  let bestResult = 22.9 * ((height / 100) * (height / 100));

  document.getElementById("bestWeight").innerHTML =
    "Best weight: " + bestResult.toFixed(2);
}

const modal = document.getElementsByClassName("modal")[0];
const openModal = () => {
  modal.style.display = "block";
  // modal.style.zIndex = "999";
};
const closeModal = () => {
  modal.style.display = "none";
};
