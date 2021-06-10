const form = document.querySelector('form');
const button = document.querySelector('button');

const Userinput = document.querySelector('#userInput').value;




form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Userinput}&appid=64853be24f58e710fa228647720351ce`);
    console.log(res)
})
