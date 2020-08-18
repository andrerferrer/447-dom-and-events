// console.log("Hello from src/index.js!");

// // Here I am saving the WHOLE <UL>
// // looking for the <ul> by it's ID
// const list = document.querySelector('#players');

// list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
// list.insertAdjacentHTML("beforeend", "<li>Darth Vader</li>");

// This creates a NodeList (aka.: Array)
const winners = document.querySelectorAll("#fifa-wins li");

// winners.forEach((nameOfOne) => {BEHAVIOR})
winners.forEach((winner) => {
  // console.log(winner);
  // console.log(winner.innerText);
});

// We want to append france to the list
// 1. select the element that we want to play with
const list = document.querySelector('ol#fifa-wins');
// console.log(list);
list.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');
// 2. do the behavior (append france)

// Find brazil by it's CSS class
const brazil = document.querySelector('.blueviolet');
// console.log(brazil);

// remove the class from brazil
brazil.classList.remove('blueviolet');
// Try to find an element with this css class again
const none = document.querySelector('.blueviolet');
// console.log(none);
// The above code finds nothing. Because we no longer
// have an element with the class blueviolet in the DOM

// //////////
// INPUTS //
// //////////

const input = document.getElementById('email');
// console.log(input);

// READ FROM AN INPUT
const inputText = input.value;
// console.log(inputText);

// input.value = "something else"
input.value = 'brunotalarico@gmail.com';
// console.log(input.value)

// //////////////////////////
// MANIPULATE TEXT AND HTML
// //////////////////////////

// 1. select the element (ALWAYS)
const link = document.getElementById('home');

// TO check the inner text
// console.log(link.innerText);

// TO check the inner HTML
// console.log(link.innerHTML);

// TO change the inner HTML
link.innerHTML = "Le Wagon <strong>rocks</strong>";

// to extract the HREF value
// console.log(link.attributes.href.value);

// /////////////
// DATA SETS //
// /////////////

const andre = document.getElementById('user_andre');

// Print the whole dataset
// console.log(andre.dataset);

// andre.dataset is a JSON
// console.log(andre.dataset.favoriteChallenge);

// //////////
// EVENTS //
// //////////

// CREATING AN EVENT FOR ONLY ONE ELEMENT
// // 1. find the element
// const romain = document.getElementById('romain');
// // 2. add an event listener
// // element.addEventListener('type of the event', () => {})
// romain.addEventListener('click', (event) => {
//   // 3. add the callback behavior inside the event listener
//   // The event is THE CLICK itself
//   console.log(event);

//   // both of the below represent the same thing
//   // console.log(event.currentTarget);
//   // console.log(romain);

//   // The classList of Romain receive the .img-circle
//   romain.classList.toggle('img-circle');
// });

// CREATE AN EVENT FOR MULTIPLE ELEMENTS
// 1. select all the elements
const images = document.querySelectorAll('img');
// 2. iterate over all the elements
images.forEach((image) => {
  // 3. add an event listener for each element
  // image.addEventListener('event', () => {})
  image.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('img-circle');
  });
  // 4. add the callback for each event listener
});
