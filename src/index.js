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

// element.addEventListener('EVENTNAME', () => {
//   // code goes in here
// });

// 10 minute code challenge!
// make a click event that does something cool
// make a resize event that does something cool
launchButton.addEventListener('click', (e) => {
  // code goes in here
  // console.log(`
  //   event type: ${e.type}
  //   event target: ${e.target.nodeName}
  //   timestamp: ${Math.floor(e.timeStamp / 1000)}
  // `);

  launchButton.style.color = 'red';
});

window.addEventListener('resize', () => {
  // console.log('The window was resized.');
});

document.addEventListener('click', (e) => {
  if(e.target === launchButton) {
    console.log('You hit the launch button!');
  } else {
    console.log('You hit something else!');
  }
});

// take an array of elements and add events to all
Array.from(document.links).forEach((link) => {
  // loop over the links
  // for each link, add an event listener to it
  // put some code into the event listener to prove it works
  link.addEventListener('click', (e) => {
    console.log('Clicked on a link!');
    e.preventDefault();
  });
});

// make a function that launches the modal
function launch() {
  modal.classList.toggle('off');
}
launchButton.addEventListener('click', launch);

function confirm() {
  modal.classList.toggle('off');
  successMessage.classList.remove('off');
}
confirmButton.addEventListener('click', confirm);

function close() {
  modal.classList.toggle('off');
  failureMessage.classList.remove('off');
}
cancelButton.addEventListener('click', close);