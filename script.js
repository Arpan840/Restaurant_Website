import data from './data.json' assert {type: 'json'};

let search= document.getElementById('search')
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