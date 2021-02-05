  // my key  32836f6b257f319cf67d3d85356fc7d1
    
  fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=32836f6b257f319cf67d3d85356fc7d1')
  .then(res=>res.json())
  .then(data=>{
      let temp = getElementById('temperature');
      let kelvin = data.main.temp;
      let celsius = kelvin-273.15;
      temp.innerText = celsius;
  })

function weatherChecker(){
  let cityInput = document.getElementById('city-input').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=32836f6b257f319cf67d3d85356fc7d1`)
  .then(res => res.json())
  .then(data =>{
      let temperature = document.getElementById('temperature');
      let city = document.getElementById('city');
      let http = data.code;
      if(http==="404"){
          alert('This city is not available');
      }
      else{
          let kelvin = data.main.temp;
          let celcius = (kelvin - 273.15).toFixed(1);
          temperature.innerText = celcius;
          city.innerText = cityInput;
          let weatherNow = weather[0].main;
          document.getElementById('cloud').innerText = weatherNow;
      }
  })
}