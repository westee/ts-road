{
    function createButton(RowItem: string, contaiiner: HTMLElement, className: string) {
        let button: HTMLButtonElement = document.createElement('button');
        button.innerHTML = RowItem
        contaiiner.appendChild(button)
        if (className) {
            button.className = className
        }
    }

    let container = document.createElement('div')
    container.classList.add('calculator')
    document.body.appendChild(container)

    let output = document.createElement('div')
    output.classList.add('output')
    let span = document.createElement('span')
    span.innerText = '0'
    output.appendChild(span)
    container.appendChild(output)


    let number1: number;
    let number2: number;
    let operator: string

    container.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement) {
            let button = event.target
            let buttonText = button.textContent

            if ('0123456789'.indexOf(buttonText) >= 0) {
                if (operator) {
                    number2 = number2 ? parseInt(number2 + buttonText) : parseInt(buttonText)
                    span.textContent = number2.toString()
                } else {
                    number1 = number1 ? parseInt(number1 + buttonText) : parseInt(buttonText)
                    span.textContent = number1.toString()
                }
            } else if ('+-x/'.indexOf(buttonText) >= 0) {
                operator = buttonText
            } else if ('='.indexOf(buttonText) >= 0) {
                let result: number;
                if (operator == '+') {
                    result = number1 + number2
                } else if (operator == '-') {
                    result = number1 - number2
                } else if (operator == 'x') {
                    result = number1 * number2
                } else {
                    result = number1 / number2
                }
                span.textContent = result.toString()

            }
        }
    })

    let keys: Array<Array<string>> = [['Clear', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+',],
    ['0', '.', '=',]
    ]
    keys.map((ListRow: Array<string>) => {
        let div: HTMLElement = document.createElement('div')
        ListRow.map((RowItem: string) => {
            createButton(RowItem, div, `text-${RowItem}`)
        })
        container.appendChild(div)
    })
}