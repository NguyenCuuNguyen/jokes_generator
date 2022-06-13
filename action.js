const joke_element = document.getElementById('joke');

const get_joke_btn = document.getElementById('get_joke');
get_joke_btn.addEventListener('click', generateJoke); //call upon click

generateJoke(); //call when page first loads
async function generateJoke(){
  //call the API
  const result = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const joke = await result.json();
  console.log(joke);
  //set new joke
  joke_element.innerHTML = joke.joke;
}
