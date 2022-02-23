pose("llou");
const res = reverse("llou");
console.log(res)
function pose(value){
    let vowelIndx = 0
    let vowels = ['a','e','i','o','u'];

    for(let i=0; i<value.length; i++)
    {
        const val = value[i].toLowerCase();
        vowelIndx+=1;
        if(val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u')
        {
            console.log(value[i],": is vowel And the index was : ",vowelIndx);
            break;
        } 
    }
}
function reverse(val){
    let value = val.toString();
    let arr=Array.from(value)
    let rev = arr.reverse();
    let ch = ""
    let val1 = rev.reduce((x,y)=>{
        x+=y;
        return x
    },ch);
    return val1;
}