//Use for loop
function foodSearch(){
    const inputItem = document.getElementById('input-item').value;
    
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+inputItem)
    .then(Response => Response.json())
    .then(data => {
        displayFood(data);
    })
    .catch(err => alert("Please enter the correct Food name"));
}


const displayFood = foods =>{
     const foodsMainInfo = document.getElementById('foods');
     for (let i = 0; i < foods.meals.length; i++) {
         const food  = foods.meals[i];
        //  console.log(food);

        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-3';
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        const foodImageDiv = document.createElement('div');
        foodImageDiv.className = 'food-image';
        const itemNameDiv = document.createElement('div');
        itemNameDiv.className = 'item-name';

        const foodImageInfo = `
            <a href="#">
                <img src="${foods.meals[i].strMealThumb}" class="img-fluid">
            </a>
        `;
        const foodNameInfo = `
            <a href="#">
                <h4 id="food-name">${foods.meals[i].strMeal}</h4>
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