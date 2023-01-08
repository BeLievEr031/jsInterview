let arr = [1, 2, 3, 4, 5];

const getArr = () => {
  setTimeout(() => {
    console.log(arr);
  }, 1000);
};

const addArr = (cb) => {
  setTimeout(() => {
    arr.push(6);
    console.log("i am in 2sec");
    cb();
    cb();
    cb();
  }, 2000);
};

addArr(getArr);
