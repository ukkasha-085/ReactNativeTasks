function callr(...args){
    let arr = Array.from(args);
    let count = 0;
    for(let n=0;n<arr.length;n++){count+=arr[n];};
    let avg = count/args.length;
    let highest = arr.reduce((prv,cur)=>{if(cur > prv){prv = cur}return prv} ,[])
    return "Avrag of passed variables is : "+avg+ ", Heighest value is : "+ highest;

}

console.log(callr(3,2,4));