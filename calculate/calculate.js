{
    function createButton(RowItem, contaiiner, className) {
        var button = document.createElement('button');
        button.innerHTML = RowItem;
        contaiiner.appendChild(button);
        if (className) {
            button.className = className;
        }
    }
    var container_1 = document.createElement('div');
    container_1.classList.add('calculator');
    document.body.appendChild(container_1);
    var output = document.createElement('div');
    output.classList.add('output');
    var span_1 = document.createElement('span');
    span_1.innerText = '0';
    output.appendChild(span_1);
    container_1.appendChild(output);
    var number1_1;
    var number2_1;
    var operator_1;
    container_1.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            var button = event.target;
            var buttonText = button.textContent;
            if ('0123456789'.indexOf(buttonText) >= 0) {
                if (operator_1) {
                    number2_1 = number2_1 ? parseInt(number2_1 + buttonText) : parseInt(buttonText);
                    span_1.textContent = number2_1.toString();
                }
                else {
                    number1_1 = number1_1 ? parseInt(number1_1 + buttonText) : parseInt(buttonText);
                    span_1.textContent = number1_1.toString();
                }
            }
            else if ('+-x/'.indexOf(buttonText) >= 0) {
                operator_1 = buttonText;
            }
            else if ('='.indexOf(buttonText) >= 0) {
                var result = void 0;
                if (operator_1 == '+') {
                    result = number1_1 + number2_1;
                }
                else if (operator_1 == '-') {
                    result = number1_1 - number2_1;
                }
                else if (operator_1 == 'x') {
                    result = number1_1 * number2_1;
                }
                else {
                    result = number1_1 / number2_1;
                }
                span_1.textContent = result.toString();
            }
        }
    });
    var keys = [['Clear', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+',],
        ['0', '.', '=',]
    ];
    keys.map(function (ListRow) {
        var div = document.createElement('div');
        ListRow.map(function (RowItem) {
            createButton(RowItem, div, "text-" + RowItem);
        });
        container_1.appendChild(div);
    });
}
