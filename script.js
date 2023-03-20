const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const newQuoteBtn = document.querySelector("#new-quote");

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quoteText.innerHTML = '<img src="double-quotes.png" class="quote" id="left"> ' + data.content + ' <img src="double-quotes.png" class="quote"  id="right">';
      quoteAuthor.textContent = '\u2011 '+ data.author;
    })
    .catch((err) => console.log(err));
}

getQuote();
