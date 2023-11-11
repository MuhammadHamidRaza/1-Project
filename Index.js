var input = ""

function getnum(num) {
    input += num
    var inputElement = document.getElementById('input')
    inputElement.value = input
}





function calculate() {
    var inputElement = document.getElementById('input')
    var value = inputElement.value
    var result = eval(value)
    inputElement.value = input = result
}




function cls() {
    var inputElement = document.getElementById('input')
    inputElement.value = input = ""
}

function del (){
    var inputElement = document.getElementById('input')
    inputElement.value = input = inputElement.value.slice(0,-1)
}