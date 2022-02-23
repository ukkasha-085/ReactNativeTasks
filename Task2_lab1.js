let value = 2531;
let convert = value.toString();
let arr=Array.from(convert)
let count = 0
const result = arr.reduce((res, work)=>{
    var nt=parseInt(work)
    res+=nt
    return res
},count)
console.log(result)