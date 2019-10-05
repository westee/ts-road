{
    function createButton(RowItem: string, contaiiner: HTMLElement) {
        let button: HTMLButtonElement = document.createElement('button');
        button.innerHTML = RowItem
        contaiiner.appendChild(button)
    }

    let keys: Array<Array<string>> = [['Clear', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+',],
    ['0', '.', '=',]
    ]
    keys.map((ListRow: Array<string>) => {
        let div: HTMLElement = document.createElement('div')
        ListRow.map((RowItem: string) => {
            createButton(RowItem, div)
        })
        document.body.appendChild(div)
    })
}