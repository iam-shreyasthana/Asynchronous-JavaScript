//function which fetch the countries and show it on the browser
// when the buttonis clicked......

const showCountries = () => {
    let xHttpReq = new XMLHttpRequest()

    xHttpReq.open('GET', 'https://restcountries.com/v3.1/all');

    xHttpReq.onload = () => {
        if(xHttpReq.status === 200){
            console.log('success');

            let countries = JSON.parse(this.response);
            console.log(countries);

            countries.forEach(country => {
                const countryCard = document.createElement('div');
                const flagImage = document.createElement('img');
                countryCard.innerHTML = country.name;
                flagImage.src = country.flag;

                countryCard.appendChild(flagImage);
                document.getElementById('feed').appendChild(countryCard);
            })
        }
    }

    xHttpReq.send();
}