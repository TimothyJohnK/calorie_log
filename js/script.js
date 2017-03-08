window.onload = function() {

    const total = [];
    const breakfast_calories = [];
    const lunch_calories = [];
    const dinner_calories = [];
    
    const breakfastTotals = document.querySelector("#breakfastTotals");
    const lunchTotals = document.querySelector("#lunchTotals");
    const dinnerTotals = document.querySelector("#dinnerTotals");

    breakfastTotals.onclick = addEventListener("click", function() {
            

    } )

    // const meal_buttons = document.querySelectorAll("meal_buttons");

    // const button_shading = function() {
    //     meal_buttons.style.color = "red";
    // };

    // meal_buttons = addEventListener("click", button_shading);

    // var meal_calories2 = meal_calories.reduce(function(a,b) {return a + b}, 0);




    var enter = document.querySelector("#enter_button");

//enter button function
    enter.onclick = function(total_day) {
        var inputDate = document.querySelector("#date_field").value;
        var item = document.querySelector("#food_field").value;
        var calories = parseInt(document.querySelector("#calorie_field").value);
        var table = document.querySelector('#table-main');
        if(calories !== calories) {
            return calories = 0;
        };

        var row = table.insertRow(1);

        var date = row.insertCell(0);
        var food = row.insertCell(1);
        var cals_in_food = row.insertCell(2);
        var total_meal = row.insertCell(3);
        var total_day = row.insertCell(4);
      
        date.innerText = inputDate;
        food.innerText = item;
        cals_in_food.innerText = calories;
        
       
        total.push(calories);
        var total2 = total.reduce(function(a,b) {return a + b}, 0);

        total_day.innerText = total2;
        return total;
      
    // reset form fields
        var reset = document.querySelectorAll('meal_buttons');
        reset.innerHtml = '';
    };



};