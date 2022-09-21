const quotes = [
{
    quote: "명언",
    author: "저자"
},
{
    quote: "명언",
    author: "저자"
},
{
    quote: "명언",
    author: "저자"
},
{
    quote: "명언",
    author: "저자"
},
{
    quote: "명언",
    author: "저자"
},
{
    quote: "명언",
    author: "저자"
},
{
    quote: "명언",
    author: "저자"
},
{
    quote: "명언",
    author: "저자"
},
{
    quote: "명언",
    author: "저자"
},
{
    quote: "명언",
    author: "저자"
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
