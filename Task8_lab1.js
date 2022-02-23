const que = sorting("comsats");
console.log(que)
function sorting(val){
    let arr = Array.from(val);
    let sorted = arr.sort();
    
    let val1 = sorted.reduce((x,y)=>{
        x+=y;
        return x
    },"");
    return val1;
}
