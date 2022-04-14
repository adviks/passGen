let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#@$%&"
let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
let pass3El = document.getElementById("pass3-el")
let pass4El = document.getElementById("pass4-el")

function gen (){
    // for loop to generate different letters
    let password = ""
    let random = Math.floor(Math.random()*66)
    function randomNum (){
        random = Math.floor(Math.random()*66)
    }
    for(let i = 0; i < 12; i++){
        password += characters[random]
        randomNum()
    }
    return password
}
let pass1 = gen()
console.log(pass1)
let pass2 = gen()
console.log(pass2)
let pass3 = gen()
console.log(pass3)
let pass4 = gen()
console.log(pass4)



function genPass(){
    pass1El.textContent = pass1
    pass2El.textContent = pass2
    pass3El.textContent = pass3
    pass4El.textContent = pass4
}