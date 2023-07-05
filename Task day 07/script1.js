//1) Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

//a) Get all the countries from Asia continent /region using Filter function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
  var data = JSON.parse(request.response);
    var res = data.filter((ele) => ele.region == ["Asia"]).map((ele)=> ele.name.common);
    console.log(res);
}

//b) Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
  var temp = JSON.parse(request.response);
    var result = temp.filter((ele) => ele.population < 200000).map((ele)=> ele.name.common);
    console.log(result);
}


//c) Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
  var b = JSON.parse(request.response);
    var details = b.forEach(ele => console.log("Country name: "+ele.name.common+" , "+"Capital: "+ele.capital+" , "+"flag: "+ele.flag)); 
}



//d) Print the total population of countries using reduce function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
  var c = JSON.parse(request.response);
    var popul = c.map((ele)=>ele.population).reduce((acc,item)=>acc+item);
    console.log(popul);
}



//e) Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
  var d = JSON.parse(request.response);
    var doll = d.filter((ele)=> {
      for (var i in ele.currencies) {
        if(ele.currencies[i].name === "United States dollar"){
          return true;
        }
      }
    }).map((val)=>val.name);
    console.log(doll); 
}

