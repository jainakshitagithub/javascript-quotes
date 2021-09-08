console.log('Welcome to the console');

let quotesText = document.getElementById('text');
let quotesAuthor = document.getElementById('author');
let btn = document.getElementById('clickme')
const api = "https://type.fit/api/quotes"

quotesData();
async function quotesData(){
const quotedata  = await fetch(api);
let data = await quotedata.json();
console.log(data);
const randomQuotes = data[Math.floor(Math.random()*1000)]
quotesText.innerHTML = randomQuotes.text;
(randomQuotes.author == null)? quotesAuthor.innerHTML =`By unkown`:quotesAuthor.innerHTML = `By ${randomQuotes.author}`;
}

btn.addEventListener('click',quotesData)
