let input = document.getElementById('countryInput');
let searchBtn = document.getElementById('searchBtn');
let countryGrid = document.getElementById('countryGrid');

async function fetchCountryData(country) {
    try {
        const url = `https://restcountries.com/v3.1/name/${country}`;
        const response = await fetch(url);
        const data = await response.json();
        displayCountryInfo(data[0]);
    } catch (error) {
        console.log('Ошибка:', error);
        countryGrid.innerHTML = `<p>Country not found</p>`;
    }
}

function displayCountryInfo(country) {
    countryGrid.innerHTML = `
        <div class="card">
            <img src="${country.flag.png}" alt="Flag of ${country.name.common}">
            <div class="card-body">
                <h2>${country.name.common}</h2>
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            </div>
        </div>
    `;
}

searchBtn.addEventListener("click", () => {
    const countryName = input.value.trim();
    if (countryName) {
        fetchCountryData(countryName);
    }
});
