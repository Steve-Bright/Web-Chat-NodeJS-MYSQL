// const room = require('./clientIndex.js')

console.log("Testing the script file " + room)
        const username = document.getElementById("username")
        const input = document.getElementById("input")
        const button = document.getElementById("button")
        const form = document.getElementById("form")
        const formTwo = document.getElementById("getRoom")
        formTwo.addEventListener("click", () => {
            console.log("Showed Room")
        })

    
        form.addEventListener("submit", () => {
            if(input.value){
                console.log("This is input: " + input.value)
            }
        })