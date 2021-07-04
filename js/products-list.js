const productsJson = `
[
    {
    "id": "1",
    "title": "Private Birthday Parties",
    "age": "Ages 3-12",
    "briefDescription": "Choose a theme, and we will create a perfect private party!",
    "description": "Birthdays happen only once a year, hence they should be epic. Our event managers keep track of the latest tendencies.",
    "imgUrl": "img/hats.jpg",
    "nameImg": "Hats"
},
{
    "id": "2",
    "title": "Group Events",
    "age": "Ages 3-6",
    "briefDescription": "Need a party for 10-30 kids? We are up to the challenge.",
    "description": "A class, scout troop or your child wants to invite all the friends? It doesn't matter how many because everyone will have the best time possible.",
    "imgUrl": "img/balls.jpg",
    "nameImg": "Balls"
},
{
    "id": "3",
    "title": "Disco Party",
    "age": "Ages 6-12",
    "briefDescription": "No old-fashioned music, all modern and trendy",
    "description": "Dancing, singing, acting, and a lot of active games – that's exactly what children mean when they say 'fun'.",
    "imgUrl": "img/outdoors.jpg",
    "nameImg": "Outdoors"
},
{
    "id": "4",
    "title": "Ages 4mo - 3",
    "age": "Ages 3-12",
    "briefDescription": "Age is just a number. Everyone can enjoy a great party.",
    "description": "Our licensed event managers will help you to plan a safe and active holiday for kids of the youngest age.",
    "imgUrl": "img/halloween.jpg",
    "nameImg": "Halloween"
}
]
`;
function renderProducts(products){
    let productsHtml = '';
    for (const product of products){
        productsHtml += `
    <div class="party-themes card col-12 col-sm-6 col-md-4 col-lg-3">
        <img src="${product.imgUrl}" class="card-img-top" alt="${product.nameImg}">
        <div class="card-body">
            <h4>${product.title}</h4>
            <p class="card-text">${product.age}</p>
            <p>${product.briefDescription}</p>
            <p class="mini-text">${product.description}</p>
        </div>
    </div> `;
    }
 document.querySelector('.products').innerHTML = productsHtml;
}

renderProducts(JSON.parse(productsJson));