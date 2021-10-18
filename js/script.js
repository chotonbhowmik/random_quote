/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/



const text = document.querySelector('.quote');
const author = document.querySelector('.source');
var quotes = [
    {
    text : "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela"
},
{
    text : "The way to get started is to quit talking and begin doing",
    author: "Walt Disney"
},
{
    text : "Your time is limited, so do not waste it living someone else life. Don not  be trapped by dogma – which is living with the results of other people thinking",
    author: "Steve Jobs"
},

{
    text : "Life is what happens when you're busy making other plans",
    author: "john Lennon"
},

{
    text : "Spread love everywhere you go. Let no one ever come to you without leaving happier",
    author: "Mother Teresa"
},

{
    text : "Tell me and I forget. Teach me and I remember. Involve me and I learn",
    author: "Benjamin Franklin"
}


];


function getRandomQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length );
   
    const item = quotes[randomNumber];
    const quote = item.text;
    const authorName = item.author;
    text.innerText = quote;
    author.innerText = authorName;

};
getRandomQuote();
