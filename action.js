var endpoint = 'https://icanhazdadjoke.com/';
let headers = {
    "headers": {
      'Accept': 'application/json'
    }
  }
function getQuote(){
  fetch(endpoint, headers) //takes endpoint returns promise
    .then(function (response){
      return response.json(); //turn raw response into json
    })
    .then(function (data){
      displayQuote(data.joke); //invoke displayQuote func+ access the actual data for use
    })
    .catch(function () {
      console.log('An error occured'); //if fetch request or then block throws error
    });
}
//Define displayQuote
function displayQuote(quote){
  var quoteText = document.querySelector('#joke');
  quoteText.textContent = quote; //assign the textContent property of the quoteText element to the quote we want to display
}
var newQuoteButton = document.querySelector('#get_joke');
newQuoteButton.addEventListener('click', getQuote);

//music
function play() {
  var sound = document.getElementById("audio");
  sound.play();
}
var songButton = document.querySelector('.play-btn');
songButton.addEventListener('click', play);


getQuote();


/*
VER 1:

var endpoint = 'https://icanhazdadjoke.com/';
let headers = {
    "headers": {
      'Accept': 'application/json'
    }
  }
function getQuote(){
  fetch(endpoint, headers) //takes endpoint returns promise
    .then(function (response){
      return response.json(); //turn raw response into json
    })
    .then(function (data){
      displayQuote(data.joke); //invoke displayQuote func+ access the actual data for use
    })
    .catch(function () {
      console.log('An error occured'); //if fetch request or then block throws error
    });
}
//Define displayQuote
function displayQuote(quote){
  var quoteText = document.querySelector('#joke');
  quoteText.textContent = quote; //assign the textContent property of the quoteText element to the quote we want to display
}
var newQuoteButton = document.querySelector('#get_joke');
newQuoteButton.addEventListener('click', getQuote);

getQuote();












// const joke_element = document.getElementById('joke');
//
// const get_joke_btn = document.getElementById('get_joke');
// get_joke_btn.addEventListener('click', generateJoke()); //call upon click
//
// function displayQuote(quote){
//   var quoteText = document.querySelector('.quote-text');
//   quoteText.textContent = quote; //assign the textContent property of the quoteText element to the quote we want to display
// }
// generateJoke(); //call when page first loads
// async function generateJoke(){
//   //call the API
//   const result = await fetch('https://icanhazdadjoke.com/', {
//     headers: {
//       'Accept': 'application/json'
//     }
//   });
//   const joke = await result.json();
//   console.log(joke);
//   //set new joke
//   joke_element.innerHTML = joke.joke;
// }

*/
