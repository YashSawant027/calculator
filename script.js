let input = document.getElementById("inputb");
let buttons = document.querySelectorAll("button");

let stringg = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(button.innerHTML+" was clicked")
        if (e.target.innerHTML == "=") {
            stringg = eval(stringg);
            input.value = stringg;
        }
        else if(e.target.innerHTML == "C"){
            stringg = ""
            input.value = stringg;
        }
        else if(e.target.innerHTML == "DEL"){
            stringg = stringg.substring(0, stringg.length-1);
            input.value = stringg;
        }
        else {
            stringg += e.target.innerHTML;
            input.value = stringg;
        }
    })
})