var entered = 1234
let kth = 2

let count = 0
let converter = entered.toString();
for (let i = converter.length ; i>=0; i--)
{
    count += 1
    if(count == check)
    {
        console.log(i)

    }
}

