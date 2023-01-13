let register = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user registser");
      resolve({ data: "success" });
    }, 5000);
  });
};

let sendmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("mail sent");
      resolve();
    }, 2000);
  });
};

let enterOtp = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("enter otp");
      resolve();
    }, 8000);
  });
};

let checking = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking credentials");
      resolve();
    }, 1000);
  });
};

let done = () => {
  return new Promise(() => {
    setTimeout(() => {
      console.log("complete");
    }, 5000);
  });
};

register().then(sendmail).then(enterOtp).then(checking).then(done);
// sendmail();
// checking();
// done();

console.log("other app working");
