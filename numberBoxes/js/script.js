const boxes = document.querySelectorAll(`.col`)
const colors = [
    `rgb(255, 255, 255)`,
    `rgb(255, 165, 0)`,
    `rgb(0, 128, 0)`,
    `rgb(128, 0, 128)`,
    `rgb(255, 192, 203)`,
]

for (let i = 0; i < boxes.length; i++) {
    // console.log()
    // First iteration i=0
    boxes[i].textContent = (i + 1).toString()
}

class Squares {
    constructor(colors) {
        this.colors = colors
        this.changeNumber = this.changeNumber.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.addEventHandlers(this.changeNumber, this.changeColor, this.colors)

    }



    changeNumber(num) {
        // console.log("Running function changeNumber")
        if (num > 1){
            this.changeNumber(num - 1)
        }
        let value = parseInt(boxes[num - 1].textContent)
        value = (value >= boxes.length) ? 1 : value + 1
        boxes[num - 1].textContent = value.toString()
    }

    changeColor(num, color) {
        // console.log(colors)
        if(num > 1) this.changeColor(num-1, colors);
        let style = window.getComputedStyle(boxes[num - 1])
        let index = color.indexOf(style.backgroundColor)
        index = (index >= color.length-1) ? 0 : index + 1
        boxes[num-1].style.backgroundColor = color[index]
    }

    addEventHandlers(changeNumber, changeColor, colors) {
        boxes.forEach(box => {
            box.addEventListener(`click`, e => {
                changeNumber(box.dataset.place)
                changeColor(box.dataset.place, colors)
            })
        })
    }

}

const squares = new Squares(colors)