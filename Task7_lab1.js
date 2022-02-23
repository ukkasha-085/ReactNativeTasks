let chcker = arr =>{
        if(arr[0] == 10 || arr[arr.length-1] == 10){
            return true;
        }
        else{
            return false;
        } 
}

let arr = [1,3,10,9]
let checkarr = chcker(arr);
console.log("Appearence of 10 at first or last positon is : ",checkarr);
