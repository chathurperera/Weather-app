const button = document.querySelector('button');
const searchTerm = document.querySelector('#searchTerm');
const form = document.querySelector('#input');

const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

form.addEventListener('submit',async (e) => {
    e.preventDefault();
    const inputValue =  form.elements.searchTerm.value; 
    const res =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=64853be24f58e710fa228647720351ce`)
    const city = res.data.name;
    const description = res.data.weather[0].description;
    const temp = res.data.main.temp;
    console.log(city , description , temp);
})

