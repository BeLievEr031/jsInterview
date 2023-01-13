let register = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user registser");
      resolve({ data: "success" });
    }, 1000);
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
    }, 1000);
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("complete");
      resolve();
    }, 1000);
  });
};

// register().then(sendmail).then(enterOtp).then(checking).then(done);
// sendmail();
// checking();
// done();

async function v2() {
  let data = await register();
  await sendmail();
  await enterOtp();
  await checking();
  await done();

  console.log("----------------#########------------");
}

v2();

console.log("other app working");
