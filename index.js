"use strict";
function calculateCalories(event) {
  event.preventDefault();
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseInt(document.getElementById("height").value);
  var age = parseInt(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  var activityLevel = document.getElementById("activity-level").value;

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

  document.getElementById("result").innerHTML =
    "Ваша суточная норма калорий:<br> " + calories.toFixed(2);
}
