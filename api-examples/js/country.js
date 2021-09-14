const loadData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => showCountries(data) )
}

const showCountries = (countries) => {
    const div = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country)
        const h3 = document.createElement('h3');
        const p = document.createElement('h4');
        h3.innerText = `Country: ${country.name}`;
        p.innerText = `Capital: ${country.capital}`;
        const newDiv = document.createElement('div');
        newDiv.classList.add('country')
        newDiv.appendChild(h3);
        newDiv.appendChild(p);
        div.appendChild(newDiv);
    })
}