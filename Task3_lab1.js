let val="35216"
let arr=Array.from(val)

let sumcpunt = 0
const EvnSum = arr.filter((x)=> {
    let nt = parseInt(x)
    if(nt%2==0)
    {
        sumcpunt+=nt;
    }
})
console.log(sumcpunt)


