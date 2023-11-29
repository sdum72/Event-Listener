var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener('click', () =>{
  countEl.textContent = count += 1;
  // setCounterText();
  // count++
  // setCounterText()
})

// TODO: Add event listener to decrement button 
decrementEl.addEventListener('click', () =>{
  if (count > 0) {
    count--
  }
  setCounterText()
})


document.addEventListener('keyup', function(event) {
  console.log('event.key');
  //
  if (event.key === '+') {
    count = count + 1;
    setCounterText();
  }

  if (event.key === '-') {
    if (count > 0) {
      count = count - 1;
      setCounterText();

    }
   
})
