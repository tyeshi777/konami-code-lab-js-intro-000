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
    let index = 0;
    document.body.addEventListener('keydown', onKeyDownHandler = e => { 
         for (let i = 0; i < codes.length; i++) {
         const key = e.key;
         if (key === codes[i]) {
          index++;
          if (index === codes.length) {
            alert('Hurray!');
            index = 0;
          }
        } else {
          index = 0;
        }
        
      }
      
    });
 return index;
}
init();
