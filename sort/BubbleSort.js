const _DATA = [
    32,
    2,
    60,
    96,
    71,
    58,
    24,
    7,
    93,
    84,
    14,
    79,
    14,
    98,
    15,
    31,
    100,
    95,
    64,
    3,
    10,
    13,
    26,
    2,
    82,
    98,
    10,
    23,
    14,
    43,
    31,
    86,
    93,
    19,
    39,
    82,
    79,
    12,
    61,
    8,
    7,
    89,
    78,
    65
];

function BubbleSort() {
    var n = _DATA.length;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (_DATA[j] > _DATA[j+1]) {
                var temp = _DATA[j];
                _DATA[j] = _DATA[j+1];
                _DATA[j+1] = temp; 
            }
        }
    }
}

function main () {
    console.log("Data has been 'bubble' sorted");
    BubbleSort();
    console.log(_DATA);
}

main();