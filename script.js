document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.querySelector('.btn-primary');
  
    calculateButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      const weight = parseFloat(document.querySelector('input[name="weight"]').value);
      const height = parseFloat(document.querySelector('input[name="height"]').value);
      const age = parseFloat(document.querySelector('input[name="age"]').value);
      const gender = document.querySelector('select[name="gender"]').value;
      const activityLevel = parseFloat(document.querySelector('select[name="activity"]').value);
  
      let bmr = 0;
  
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
  
      let calories = 0;
  
      switch (activityLevel) {
        case 1.2:
          calories = bmr * 1.2; // Sedentary
          break;
        case 1.375:
          calories = bmr * 1.375; // Lightly active
          break;
        case 1.55:
          calories = bmr * 1.55; // Moderately active
          break;
        case 1.725:
          calories = bmr * 1.725; // Very active
          break;
        case 1.9:
          calories = bmr * 1.9; // Super active
          break;
      }
  
      const resultBox = document.createElement('div');
      resultBox.className = 'user-box result-box';
      resultBox.textContent = `Recommended Daily Calories: ${calories.toFixed(2)}`;
  
      const form = document.querySelector('form');
      form.appendChild(resultBox);
    });
  });
  
