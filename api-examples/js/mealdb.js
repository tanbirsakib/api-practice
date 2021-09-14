
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);

    searchField.value = '';
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = (meals) => {
 const searchResult =  document.getElementById('search-result');
 meals.forEach(meal => {
     console.log(meal);
     const div = document.createElement('div');
     div.innerHTML = `
     <div onclick="mealDeatils(${meal.idMeal})" class ='m-4 border-2 rounded border-green-600 p-2'>
     <img src = ${meal.strMealThumb} class = "rounded">
     <h4 class='text-center text-blue-900 border-2 mt-1 rounded bg-green-500 text-white p-1'>${meal.strMeal}</h4>
     </div>`
   searchResult.appendChild(div);  
 })
}

const mealDeatils = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showMealDeatils(data.meals[0]))
}

const showMealDeatils = (meal) =>{
  
    const meals = document.getElementById('single-meal');
    meals.classList.add("block")
    const div = document.createElement('div');
    div.innerHTML = ` <img src = ${meal.strMealThumb} class = "rounded mx-auto">
                       <a class="no-underline text-center text-2xl text-red-300" href="${meal.strYoutube}">See Reciepe In Youtube</a> `
    meals.appendChild(div);
}