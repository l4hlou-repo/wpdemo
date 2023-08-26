document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var weight = parseInt(document.getElementById('weight').value);
    var height = parseInt(document.getElementById('height').value);
    var activityLevel = parseFloat(document.getElementById('activityLevel').value);
    var goal = document.getElementById('goal').value;
    
    var bmr;
    var tdee;
    var calorieIntake;
    
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    switch (activityLevel) {
        case 1.2:
            tdee = bmr * 1.2;
            break;
        case 1.375:
            tdee = bmr * 1.375;
            break;
        case 1.55:
            tdee = bmr * 1.55;
            break;
        case 1.725:
            tdee = bmr * 1.725;
            break;
        case 1.9:
            tdee = bmr * 1.9;
            break;
        default:
            tdee = bmr;
    }
    
    if (goal === 'lose') {
        calorieIntake = tdee - 500;
    } else if (goal === 'gain') {
        calorieIntake = tdee + 500;
    } else {
        calorieIntake = tdee;
    }
    
    document.getElementById('caloriesResult').textContent = 'Calories to consume per day: ' + calorieIntake.toFixed(0);
    
    var protein = weight * 2.2;
    var carbohydrates = weight * 4;
    var fat = weight * 0.4;
    
    document.getElementById('protein').textContent = protein.toFixed(1) + 'g';
    document.getElementById('carbohydrates').textContent = carbohydrates.toFixed(1) + 'g';
    document.getElementById('fat').textContent = fat.toFixed(1) + 'g';
});
