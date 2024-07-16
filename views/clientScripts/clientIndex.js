const roomOne = document.getElementById("roomOne");
        let room = 0;

        const roomTwo = document.getElementById("roomTwo")
        const roomThree = document.getElementById("roomThree")
        roomOne.addEventListener("click", () => {
            let room = 1
            console.log(room)
        })

        roomTwo.addEventListener("click", () => {
            let room = 2
            console.log(room)
        })

        roomThree.addEventListener("click", () => {
            let room = 3
            console.log(room)
        })

        export {room};