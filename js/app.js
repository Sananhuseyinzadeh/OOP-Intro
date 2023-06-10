let first1 = document.getElementById('first1')
let btn = document.getElementById('btn')
let has1 = document.getElementById('has1')
let has2 = document.getElementById('has2')

let num1 = 0
let num2 = 0
let num3 = 0

btn.onclick = () =>{
    let a = parseFloat(document.getElementById('put1').value)
    let b = parseFloat(document.getElementById('put2').value)
    let c = parseFloat(document.getElementById('put3').value)


    num1=(a*c)/100
    num2=a+num1;
    num3=num2/b

    has2.innerHTML = `${num3} AZN`
    has1.innerHTML = `${num2} AZN`
}