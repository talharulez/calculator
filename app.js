function getValue(num){
    var input = document.getElementById("input")
    input.value += num 
}

function performEval(){
    var inp = document.getElementById("input")
    console.log (inp.value)
    inp.value = eval(inp.value)
}
function clean(){
    var inp = document.getElementById("input")
    inp.value = ""
}


function valueMinus(){
    var inp = document.getElementById("input")
    inp.value = input.value.slice(0,-1)
}