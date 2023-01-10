// function func(){


// }


// let x = {

// }

// console.log(x.name);


// func.x = "sandeep"

// console.log(func.name);


let arr = [1,2,3,4,5,6,7,8,9,10]

let ans = arr.reduce((acc,curr,index,arr)=>{
    return acc+curr;
},0)

console.log(ans);