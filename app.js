const button = document.querySelector('button');
const searchTerm = document.querySelector('#searchTerm');
const form = document.querySelector('#input');

const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

form.addEventListener('submit',async (e) => {
    e.preventDefault();
    const inputValue =  form.elements.searchTerm.value; 
    const res =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=64853be24f58e710fa228647720351ce&units=metric`)
    const city = res.data.name;
    name.innerText = city;
    const description = res.data.weather[0].description;
    desc.innerText = description;
    const temperature = res.data.main.temp;
    temp.innerHTML = `${temperature}°C`;
    console.log(res.data);
})

