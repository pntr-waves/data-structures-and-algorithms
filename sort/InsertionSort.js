const _DATA = [
    16,
    47,
    19,
    8,
    7,
    72,
    95,
    41,
    5,
    76,
    79,
    34,
    32,
    70,
    50,
    43,
    75,
    73,
    74,
    84,
    4,
    3,
    85,
    17,
    82,
    47,
    73,
    17,
    97,
    88,
    95
];


function InsertionSort () {
    var n = _DATA.length;
    for (i = 1; i < n; i++) {
        var key = _DATA[i];
        var j = i - 1;

        while (j >= 0 && _DATA[j] > key) {
            _DATA[j + 1] = _DATA[j];
            j = j - 1;
        }

        _DATA[j + 1] = key;
    }
}

function main () {
    console.log("Data has been 'insertion' sorted");
    InsertionSort();
    console.log(_DATA);
}

main();
