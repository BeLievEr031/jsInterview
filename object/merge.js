let defaultUser = {
  email: "",
  name: "",
  sub: true,
};

let user = {
  name: "sandy",
  email: "s@gmail.com",
};

// let fUser = Object.assign(defaultUser, user);
/*
    Now 
    let fUser = Object.assign( defaultUser,user);
    defaultUser = user
                 ans     {
                            name: "sandy",
                             email: "s@gmail.com",
                         };

    let fUser = Object.assign( user,defaultuser);
        user = defaultUser
                ans     {
                             name: "",
                             email: "",
                        };
    
*/

// console.log(fUser);
// console.log(defaultUser);

let f1User = { ...defaultUser, ...user };
// previous state maintains

console.log(defaultUser);

console.log(f1User);
