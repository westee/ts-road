{
    function createButton(RowItem, contaiiner) {
        var button = document.createElement('button');
        button.innerHTML = RowItem;
        contaiiner.appendChild(button);
    }
    var keys = [['Clear', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+',],
        ['0', '.', '=',]
    ];
    keys.map(function (ListRow) {
        var div = document.createElement('div');
        ListRow.map(function (RowItem) {
            createButton(RowItem, div);
        });
        document.body.appendChild(div);
    });
}
