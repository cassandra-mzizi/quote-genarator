// let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localStorage[Math.floor(Math.random() * localStorage.length)];
    console.log(quote)
}
/* // Get Quotes From API
async function getQuotes () {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        localStorage = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
     }
}
 */
// On Load
// getQuotes();
newQuote();