const formData = document.querySelector('form');

formData.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value); // it will give value in string
    const weight = parseInt(document.querySelector("#weight").value); // it will give value in string
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid height ${weight}`;
    } else {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
})