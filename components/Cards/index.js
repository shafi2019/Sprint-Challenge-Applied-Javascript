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

const containerCards = document.querySelector('.cards-container');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log(error + 'Data is returned');
})

function articleCard(data) {
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const imgContainer = document.createElement('div');
    const cardImage = document.createElement('img');
    const by = document.createElement('span');

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    author.appendChild(imgContainer);
    container.appendChild(cardImage);
    author.appendChild(by);

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    // Adding content //
    card.textContent = `Card: ${data.articles}`
    cardHeadline.textContent = `Headline: ${data.articles.headline}`
    cardAuthor.textContent = `Author: ${data.headers}`
    cardImage.src = `Pic${data.url}`

    return card;
}