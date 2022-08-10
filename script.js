let getnewQuote = document.getElementById('new-quote');
let quotehtml = document.getElementById('quote');
let getauthor = document.getElementById('author');
let quoteContainer = document.getElementById('quote-container');

const loader = document.getElementById('loader');
const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
};

const dataShow = () => {
    loader.hidden = true;
    quoteContainer.hidden = false;
};
let quoteData = [];

let randomQuote = () => {
    loading();
    let quote = Math.round(Math.random() * quoteData.length);
    // console.log();
    quotehtml.textContent = quoteData[quote].text;
    getauthor.textContent = quoteData[quote].author;

    if (!quoteData[quote].author) {
        getauthor.textContent = 'Anonymous';
    } else {
        getauthor.textContent = quoteData[quote].author;
    }

    if (quoteData[quote].text.length > 50) {
        quotehtml.classList.add('long-quote');
    } else {
        quotehtml.classList.remove('long-quote');
    }
    dataShow();
};

// new quote

getnewQuote.addEventListener('click', function() {
    randomQuote();
});

async function codewithapi() {
    loading();
    const seturl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(seturl);
        quoteData = await response.json();
        // console.log(quoteData);
        randomQuote();
    } catch (error) {
        console.log(error);
    }
    dataShow();
}
codewithapi();