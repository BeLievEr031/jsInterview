let func = (cb) => {
  console.log("i am a func");
  cb();
};

let cb = () => {
  console.log("i am a cb");
};

func(cb);
