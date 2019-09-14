// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleData = axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then(response =>{
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

console.log(articleData);

const newCard = document.querySelector('.cards-container');

function cardArticle(data) {
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');
    

    card.textContent = 'Article';
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    imgContainer.classList.add('img-container');


    newCard.appendChild(card);
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(imgContainer);
    cardAuthor.appendChild(authorName);
    imgContainer.appendChild(image);

    cardHeadline.textContent = data.headline;
    imgContainer.src = data.authorPhoto;
    image.src = data.authorPhoto;
    authorName.textContent = data.authorName;

    return newCard;
};

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.javascript})
    .then((items) => {items.forEach((item) => cardArticle(item))})
    .catch(err => {
        console.log(err);
    });

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.bootstrap})
    .then((items) => {items.forEach((item) => cardArticle(item))})
    .catch(err => {
        console.log(err);
});

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.jquery})
    .then((items) => {items.forEach((item) => cardArticle(item))})
    .catch(err => {
        console.log(err);
});
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.node})
    .then((items) => {items.forEach((item) => cardArticle(item))})
    .catch(err => {
        console.log(err);
});

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.technology})
    .then((items) => {items.forEach((item) => cardArticle(item))})
    .catch(err => {
        console.log(err);
});
