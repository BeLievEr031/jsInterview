function creatPolyfills() {
  let intervalID = 0;
  let interValMap = {};

  function setIntervalPolyfill(callback, delay, ...args) {
    let id = intervalID++;

    function repeat() {
      interValMap[id] = setTimeout(() => {
        callback(...args);
        if (interValMap[id]) repeat();
      }, delay);
    }

    repeat();
    return id;
  }

  function clearIntervalPolyfill(id) {
    clearTimeout(interValMap[id]);
    delete interValMap[id];
  }

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

const { setIntervalPolyfill, clearIntervalPolyfill } = creatPolyfills();

let ct = 0;
let intervalId;
function greet(...args) {
  console.log(...args);
  console.log("hello");
  ct++;
  if (ct >= 3) {
    clearIntervalPolyfill(intervalId);
  }
}

intervalId = setIntervalPolyfill(greet, 2000, "ankul", "suyash");
