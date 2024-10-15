const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

// let apiQuotes = [];

/// Show loader
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//  Hide Loading 
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
function newQuote() {
    loading();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//    Check for author
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote Length 
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}
// Tweet Quote
function tweetQuote() { 
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
twitterBtn.addEventListener('click', tweetQuote); 
newQuoteBtn.addEventListener('click', newQuote);
             // Get Quotes From API
async function getQuotes () {
    const apiUrl = 'quote-genarator/quotes.js';
    try {
        const response = await fetch(apiUrl);
        localStorage = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
     }
}
 
            // On Load
// getQuotes();
newQuote(); 
