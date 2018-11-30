const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  const alphabet = ['a', 'b', 'c'];
  let index = 0;
  document.body.addEventListener(keydown, onKeyDownHandler);
  function onKeyDownHandler(e) {
    const key = e.key;
    if (key === alphabet[index]) {
      index++;
      if (index === alphabet.length) {
        alert("Hurray!");
        
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
