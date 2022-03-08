function sandwich_calculator(bread,cheez){
    let NoOFsandwich=0;
    if(cheez == 1)
    {
        NoOFsandwich = 1
    }
    if(bread == 0 || bread == 1)
    {
        NoOFsandwich = 0;
    }
    else{
        var breadsNeeded = Math.floor(bread/2);
        for(let n =0; n<cheez; n++)
        {
            NoOFsandwich +=1;
        }
    }
    return NoOFsandwich;
}   
var NoOfBreads = 13;
var noOfCHeez =5;
console.log(sandwich_calculator(NoOfBreads,noOfCHeez));