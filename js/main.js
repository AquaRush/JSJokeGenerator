const jokeQuestion = document.getElementById("joke-setup");
const jokeAnswer = document.getElementById("joke-punchline");
const btnGenerator = document.getElementById("button");
const preloadAnimation = document.getElementById("animation");
const APIUrl = "https://official-joke-api.appspot.com/jokes/random";

// Call & fetch data using API url.
let jokeGenerator = () => {
  
  //Play animation on button click
  preloadAnimation.style.display = "block";
  jokeQuestion.innerHTML = "";
  jokeAnswer.innerHTML = "";

  fetch(APIUrl)
    .then((response) => response.json())
    .then((data) => generatedJoke(data));
};

// Generate a random joke, assign the question and answer to variables, assign said variables to innerHTML paragraphs
let generatedJoke = (data) => {
  //   console.log(data);
  const jokeSetup = data.setup;
  const jokePunchline = data.punchline;
  //Stop animation on button click
  preloadAnimation.style.display = "none";
  jokeQuestion.innerHTML = jokeSetup;
  jokeAnswer.innerHTML = jokePunchline;
};

// Generate a joke by clicking "Generate A Random Joke" button
btnGenerator.addEventListener("click", jokeGenerator);
