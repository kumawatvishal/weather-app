const searchBox = document.querySelector('#searchBox');
const api_key = `21805bff7224936fa25d6cec016a0a4b`;
const box = document.querySelector('#box');

searchBox.addEventListener(
    'keyup',
    async (e) => {
        if(e.key == 'Enter'){
           const searchName = e.target.value;
           const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchName}&appid=${api_key}&units=metric`;
          //  console.log(url);
           const response = await fetch(url);
           const data = await response.json();
           console.log(data);

           if(data.cod != '404'){
              box.innerHTML=
              `
              <div class="text-white d-flex">
              <div>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
              </div>
              <div>
              <div class="display-2">Temp: ${data.main.temp} C</div>
              <h1> ${data.weather[0].main} </h1>
            </div>
          </div>
              `
           }
           else{

           }
        //    console.log(data.weather[0].main);
        //    console.log(data.main.temp);
        }
    }
)