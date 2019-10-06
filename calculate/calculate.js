{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.keys = [['Clear', '/'],
                ['7', '8', '9', 'x'],
                ['4', '5', '6', '-'],
                ['1', '2', '3', '+',],
                ['0', '.', '=',]
            ];
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.eventListener();
        }
        Calculator.prototype.createButton = function (RowItem, contaiiner, className) {
            var button = document.createElement('button');
            button.innerHTML = RowItem;
            contaiiner.appendChild(button);
            if (className) {
                button.className = className;
            }
        };
        Calculator.prototype.createButtons = function () {
            var _this = this;
            this.keys.map(function (ListRow) {
                var div = document.createElement('div');
                ListRow.map(function (RowItem) {
                    _this.createButton(RowItem, div, "text-" + RowItem);
                });
                _this.container.appendChild(div);
            });
        };
        Calculator.prototype.createContainer = function () {
            var container = document.createElement('div');
            container.classList.add('calculator');
            document.body.appendChild(container);
            this.container = container;
        };
        Calculator.prototype.createOutput = function () {
            var output = document.createElement('div');
            output.classList.add('output');
            var span = document.createElement('span');
            span.innerText = '0';
            output.appendChild(span);
            this.container.appendChild(output);
            this.span = span;
        };
        Calculator.prototype.eventListener = function () {
            var _this = this;
            this.container.addEventListener('click', function (event) {
                if (event.target instanceof HTMLButtonElement) {
                    var button = event.target;
                    var buttonText = button.textContent;
                    if ('0123456789'.indexOf(buttonText) >= 0) {
                        if (_this.operator) {
                            _this.number2 = _this.number2 ? parseInt(_this.number2 + buttonText) : parseInt(buttonText);
                            console.log(_this.number2);
                            _this.span.textContent = _this.number2.toString();
                        }
                        else {
                            _this.number1 = _this.number1 ? parseInt(_this.number1 + buttonText) : parseInt(buttonText);
                            console.log(_this.number1 + 'number1');
                            _this.span.textContent = _this.number1.toString();
                        }
                    }
                    else if ('+-x/'.indexOf(buttonText) >= 0) {
                        _this.operator = buttonText;
                    }
                    else if ('='.indexOf(buttonText) >= 0) {
                        var result = void 0;
                        if (_this.operator == '+') {
                            result = _this.number1 + _this.number2;
                        }
                        else if (_this.operator == '-') {
                            result = _this.number1 - _this.number2;
                        }
                        else if (_this.operator == 'x') {
                            result = _this.number1 * _this.number2;
                        }
                        else {
                            result = _this.number1 / _this.number2;
                        }
                        _this.span.textContent = result.toString();
                    }
                }
            });
        };
        return Calculator;
    }());
    new Calculator();
}
