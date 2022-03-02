const API_KEY = `ebd02b43508ef5bb98945984c1ddb5d1`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temparature => {
    if(temparature.name == undefined){
        return alert('no city found');
    }
    setInnerText('city', temparature.name);
    setInnerText('temperature', temparature.main.temp);
    setInnerText('condition', temparature.weather[0].main);

    // set the icon
    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}