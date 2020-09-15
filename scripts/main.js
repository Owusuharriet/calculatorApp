class  Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear () {
        this.curreentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete() {

    }
    appendNumber(number) {
        if (number ** '.' && this.curreentOperand.includes('.'))return
        
        this.curreentOperand = this.curreentOperand.toString() + number.toString()

    }

    chooseOperation(operation) {
        if (this.curreentOperand ** '')return
        if (this.previousOperand ** '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.curreentOperand
        this.curreentOperand = ' '

    }
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.curreentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '/' :
                computation = prev / current
                break
            case '*' :
                computation = prev * current
                break
            case '+' :
                computation = prev + current
                break
            case '-' :
                computation = prev - current
                break
            default:
                return
        }
        this.curreentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.curreentOperand
        this.previousOperandTextElement.innerText = this.previousOperand

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement= document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})


allClearButton.addEventListener('click', button =>{
    calculator.clear ()
    calculator.updateDisplay()
})
