{
    class Calculator {
        public container: HTMLDivElement;
        public span: HTMLSpanElement;
        public number2: number;
        public number1: number;
        public operator: string;
        public keys: Array<Array<string>> = [['Clear', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+',],
        ['0', '.', '=',]
        ]
        constructor() {
            this.createContainer()
            this.createOutput()
            this.createButtons()
            this.eventListener()
        }
        createButton(RowItem: string, contaiiner: HTMLElement, className: string) {
            let button: HTMLButtonElement = document.createElement('button');
            button.innerHTML = RowItem
            contaiiner.appendChild(button)
            if (className) {
                button.className = className
            }
        }

        createButtons() {
            this.keys.map((ListRow: Array<string>) => {
                let div: HTMLElement = document.createElement('div')
                ListRow.map((RowItem: string) => {
                    this.createButton(RowItem, div, `text-${RowItem}`)
                })
                this.container.appendChild(div)
            })
        }

        createContainer() {
            let container = document.createElement('div')
            container.classList.add('calculator')
            document.body.appendChild(container)
            this.container = container
        }

        createOutput() {
            let output = document.createElement('div')
            output.classList.add('output')
            let span = document.createElement('span')
            span.innerText = '0'
            output.appendChild(span)
            this.container.appendChild(output)
            this.span = span
        }

        eventListener() {
            this.container.addEventListener('click', (event) => {
                if (event.target instanceof HTMLButtonElement) {
                    let button = event.target
                    let buttonText = button.textContent

                    if ('0123456789'.indexOf(buttonText) >= 0) {
                        if (this.operator) {
                            this.number2 = this.number2 ? parseInt(this.number2 + buttonText) : parseInt(buttonText)
                            console.log(this.number2);
                            
                            this.span.textContent = this.number2.toString()
                        } else {
                            this.number1 = this.number1 ? parseInt(this.number1 + buttonText) : parseInt(buttonText)
                            console.log(this.number1 + 'number1');

                            this.span.textContent = this.number1.toString()
                        }
                    } else if ('+-x/'.indexOf(buttonText) >= 0) {
                        this.operator = buttonText
                    } else if ('='.indexOf(buttonText) >= 0) {
                        let result: number;
                        if (this.operator == '+') {
                            result = this.number1 + this.number2
                        } else if (this.operator == '-') {
                            result = this.number1 - this.number2
                        } else if (this.operator == 'x') {
                            result = this.number1 * this.number2
                        } else {
                            result = this.number1 / this.number2
                        }
                        this.span.textContent = result.toString()

                    }
                }
            })
        }

    }

    new Calculator()

}