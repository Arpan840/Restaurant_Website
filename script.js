import data from './data.json' assert {type: 'json'};

let search= document.getElementById('search')
let vegFilter = document.getElementsByClassName('filter-2')[0]
let nonVegFilter = document.getElementsByClassName('filter-3')[0]
let allFood =document.querySelector('.filter-1')
let foodArr= [];
function foodData(){
   let foodItems= ''
   data.map((i)=>{
         

        foodItems+=`
        <div class="card" >
        <img src=${i.imageSrc} class="card-img-top dishes" alt="food">
        <div class="card-body">
            <h5 class="card-title foodname">${i.name}</h5>
            <p class="card-text">${i.time}</p>
        </div>
    </div>
        `
        foodArr.push(i)
        
   })
  document.querySelector('.food-items').innerHTML=foodItems
}

addEventListener('DOMContentLoaded',foodData)


addEventListener('input', (e) => {
    let val = e.target.value.toLowerCase(); 
  
    let filteredFoodItems = foodArr.filter((i) => {
      
      return i.name.toLowerCase().includes(val) || i.time.toLowerCase().includes(val);
    });

  
  
    let foodItems = '';
    filteredFoodItems.map((i, index) => {
      
      foodItems += `
        <div class="card" data-index="${index}">
          <img src=${i.imageSrc} class="card-img-top dishes" alt="food">
          <div class="card-body">
            <h5 class="card-title foodname">${i.name}</h5>
            <p class="card-text">${i.time}</p>
          </div>
        </div>
      `;
    });
  
    document.querySelector('.food-items').innerHTML = foodItems;
  });

  function filterVeg(){
    let filterVegFood = foodArr.filter((i)=>{
     return i.type==="veg";
    })
   

   let vegFood = '';
   filterVegFood.map((i)=>{
    vegFood+=`
    <div class="card" >
    <img src=${i.imageSrc} class="card-img-top dishes" alt="food">
    <div class="card-body">
      <h5 class="card-title foodname">${i.name}</h5>
      <p class="card-text">${i.time}</p>
    </div>
  </div>
    `;
   })
   document.querySelector('.food-items').innerHTML = vegFood;
  }
   
  vegFilter.addEventListener('click', filterVeg)

  function filterNonVeg(){
    let nonVeg = foodArr.filter((i)=>{
      return i.type === 'non-veg';
    })
    let nonVegItems = '';
   nonVeg.map((i)=>{
    nonVegItems+=`
    <div class="card" >
    <img src=${i.imageSrc} class="card-img-top dishes" alt="food">
    <div class="card-body">
      <h5 class="card-title foodname">${i.name}</h5>
      <p class="card-text">${i.time}</p>
    </div>
  </div>

    `
   })
   document.querySelector('.food-items').innerHTML = nonVegItems;
  }
  nonVegFilter.addEventListener('click', filterNonVeg)

  let allFoodItems=()=>{
    let allFoods = '';
    data.map((i)=>{
      allFoods+=` <div class="card" >
      <img src=${i.imageSrc} class="card-img-top dishes" alt="food">
      <div class="card-body">
        <h5 class="card-title foodname">${i.name}</h5>
        <p class="card-text">${i.time}</p>
      </div>
    </div>`
    })
    document.querySelector('.food-items').innerHTML = allFoods;
   
  }

  allFood.addEventListener('click', allFoodItems);