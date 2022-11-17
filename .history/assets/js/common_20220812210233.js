let allQuotes;

function getRandomQuote() {
    var allQuotes;
    let path = 'assets/data/quotes.json';
    fetch(path)
        .then(response => response.json())
        .then(json => {
            allQuotes = structuredClone(json);
            let randomWork = allQuotes[getRandomInt(allQuotes.length)];
            document.getElementById('title').innerHTML = randomWork.title;
            document.getElementById('year').innerHTML = randomWork.year;
            let workQuotes = JSON.parse(JSON.stringify(randomWork.quotes));
            let randomQuote = workQuotes[getRandomInt(workQuotes.length)];
            document.getElementById('quote').innerHTML = randomQuote;
    })
}

function loadJSON(path) {
    let path = 'assets/data/quotes.json';
    fetch(path)
        .then(response => response.json())
        .then(json => json)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }