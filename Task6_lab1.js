const val  = document.getElementById("fname");
const bttn = document.getElementById("btn");
const results = document.getElementById("res");

bttn.addEventListener('click',()=>{
    let vlauee = val.value;
    console.log("Btn pressed");
    let ran = parseInt( Math.random()*10);
    if ( ran == vlauee)
    {
        results.innerText = "You Won";
    }
    else
    {
        results.innerText = "You Loss";

    }
})