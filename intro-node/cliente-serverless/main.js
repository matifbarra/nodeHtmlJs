
// metodo regular****************************************************************
// window.onload = () => {
//     fetch('http://localhost:3000/api/meals')
//     .then(response => response.json())
//     .then(data => {
//         const mealsList = document.getElementById('meals-list');
//         const btn = document.getElementById('btn');
//         console.log(btn);
//         const mealsMap = data.map(t => '<li>' + t.name + '</li>').join('');
//         mealsList.innerHTML = mealsMap;
//         btn.removeAttribute('disabled');

//     })
// }
// ********************************************************************************

// With templates String 
window.onload = () => {
    const renderItem = (t) =>{
        return `<li data-id="${t._id}">${t.name}</li>`

    }

    fetch('http://localhost:3000/api/meals')
    .then(response => response.json())
    .then(data => {
        const mealsList = document.getElementById('meals-list');
        const btn = document.getElementById('btn');
        console.log(btn);
        const mealsMap = data.map(renderItem).join('');
        mealsList.innerHTML = mealsMap;
        btn.removeAttribute('disabled');

    })
}
