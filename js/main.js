//Another
function foodSearch(){
    const inputItem = document.getElementById('input-item').value;
    
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+inputItem)
    .then(Response => Response.json())
    .then(data => {
        displayFood(data);
        console.log(data);
    })
    .catch(err => alert("Please enter the correct Food name"));
}


const displayFood = foods =>{
     const foodsMainInfo = document.getElementById('foods');
     for (let i = 0; i < foods.meals.length; i++) {
         const food  = foods.meals[i];
         console.log(food);

        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-3';
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        const foodImageDiv = document.createElement('div');
        foodImageDiv.className = 'food-image';
        const itemNameDiv = document.createElement('div');
        itemNameDiv.className = 'item-name';

        const foodImageInfo = `
            <a href="#" onclick="displayFoodDetails('${food.strMeal}')">
                <img src="${food.strMealThumb}" class="img-fluid">
            </a>
        `;
        const foodNameInfo = `
            <a href="#">
                <h4 onclick="displayFoodDetails('${food.strMeal}')">${food.strMeal}</h4>
            </a>
        `;
        foodImageDiv.innerHTML = foodImageInfo;
        itemDiv.appendChild(foodImageDiv);
        itemNameDiv.innerHTML = foodNameInfo;
        itemDiv.appendChild(itemNameDiv);
        colDiv.appendChild(itemDiv);
        foodsMainInfo.appendChild(colDiv);
     }
};

const displayFoodDetails = strMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data[0].name));
    .then(data => renderFoodInfo(data.meals[0]));
};

const renderFoodInfo = food => {
    console.log(food);
    const foodDiv = document.getElementById('food-details');

    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-6';
    const foodItemDiv = document.createElement('div');
    foodItemDiv.className = 'item';
    const itemImageDiv = document.createElement('div');
    itemImageDiv.className = 'food-image';
    const itemNameDiv = document.createElement('div');
    itemNameDiv.className = 'food-name';

    const foodImage = `
        <a href="#">
            <img src="${food.strMealThumb}" class="food-img">
        </a>
    `; 
    const foodNameDetails = `
        <a href="#">
            <h2>${food.strMeal}</h4>
        </a>
        <div class="ingredients">
            <h3>Ingredients</h5>
            <ul>
                <li>
                    <input type="checkbox" id="item1" checked="checked">
                    <label for="item1" class="check-item">${food.strIngredient1}</label>
                </li>
            </ul>
        </div>
    `;
    itemImageDiv.innerHTML = foodImage; 
    foodItemDiv.appendChild(itemImageDiv);
    itemNameDiv.innerHTML = foodNameDetails;
    foodItemDiv.appendChild(itemNameDiv);
    colDiv.appendChild(foodItemDiv);
    foodDiv.appendChild(colDiv);
};





//Use for loop
// function foodSearch(){
//     const inputItem = document.getElementById('input-item').value;
    
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+inputItem)
//     .then(Response => Response.json())
//     .then(data => {
//         displayFood(data);
//     })
//     .catch(err => alert("Please enter the correct Food name"));
// }


// const displayFood = foods =>{
//      const foodsMainInfo = document.getElementById('foods');
//      for (let i = 0; i < foods.meals.length; i++) {
//          const food  = foods.meals[i];
//         //  console.log(food);

//         const colDiv = document.createElement('div');
//         colDiv.className = 'col-lg-3';
//         const itemDiv = document.createElement('div');
//         itemDiv.className = 'item';
//         const foodImageDiv = document.createElement('div');
//         foodImageDiv.className = 'food-image';
//         const itemNameDiv = document.createElement('div');
//         itemNameDiv.className = 'item-name';

//         const foodImageInfo = `
//             <a href="#">
//                 <img src="${food.strMealThumb}" class="img-fluid">
//             </a>
//         `;
//         const foodNameInfo = `
//             <a href="#">
//                 <h4 id="food-name">${food.strMeal}</h4>
//             </a>
//         `;
//         foodImageDiv.innerHTML = foodImageInfo;
//         itemDiv.appendChild(foodImageDiv);
//         itemNameDiv.innerHTML = foodNameInfo;
//         itemDiv.appendChild(itemNameDiv);
//         colDiv.appendChild(itemDiv);
//         foodsMainInfo.appendChild(colDiv);
//      }
// };