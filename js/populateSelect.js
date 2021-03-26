let foods = [];
let foodimg = [];
let arrfoods = ''; 
  // FETCH API
  const request = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';
  const getData = async () =>{
      const response = await fetch(request);
      const jsondata = response.json();
      return jsondata;
  }

  //GET ITEM NAME AND IMG FROM API
  getData().then((value) =>{
    arrfoods = value.meals; 
    for(food of arrfoods){
      foods.push(food.strMeal);
      foodimg.push(food.strMealThumb)       
    }
    populateSel1()
    populateSel2()
    populateSel3()
    populateSel4()

  }).catch((err) => {
    console.log(err);
  })

  //POPULATE SELECT WITH API DATA
  function populateSel1(){
    for(food of foods){
      let option = document.createElement("option");
      option.value = food
      option.innerHTML = food
      iitem1.appendChild(option);
    }
  }
  function populateSel2(){
    for(food of foods){
      let option = document.createElement("option");
      option.value = food
      option.innerHTML = food
      iitem2.appendChild(option);
    }
  }
  function populateSel3(){
    for(food of foods){
      let option = document.createElement("option");
      option.value = food
      option.innerHTML = food
      iitem3.appendChild(option);
    }
  }
  function populateSel4(){
    for(food of foods){
      let option = document.createElement("option");
      option.value = food
      option.innerHTML = food
      iitem4.appendChild(option);
    }
  }