window.onload = () => {
    fetch('http://localhost:3000/api/meals')
    .then(response => response.json())
    .then(data => {
        const mealsList = document.getElementById('meals-list');
        const mealsMap = data.map(t => '<li>' + t.name + '</li>').join('');
        mealsList.innerHTML = mealsMap;

    })

}