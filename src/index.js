// step one of setting up events
// we need to grab some elements to put events on

// buttons
const launchButton = document.querySelector('#launchButton');
const confirmButton = document.querySelector('#confirmButton');
const cancelButton = document.querySelector('#cancelButton');
// console.log('launchButton', launchButton);
// console.log('confirmButton', confirmButton);
// console.log('cancelButton', cancelButton);

// messages
const successMessage = document.querySelector('h1.success');
const failureMessage = document.querySelector('h1.failure');
// console.log('successMessage', successMessage);
// console.log('failureMessage', failureMessage);

// modal
const modal = document.querySelector('div.modal');
// console.log('modal', modal);

// click event
launchButton.onclick = (e) => {
  console.log('This is the event: ', e);
}

launchButton.addEventListener('click', () => {
  // code goes in here
  console.log('Hello world!');
});
