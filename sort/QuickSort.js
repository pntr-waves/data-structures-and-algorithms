const _DATA = [42,
    55,
    97,
    76,
    23,
    21,
    99,
    73,
    32,
    43,
    90,
    32,
    98,
    87,
    55,
    30,
    67,
    53,
    64,
    88,
    10,
    62,
    2,
    21,
    39,
    52,
    85,
    34,
    33,
    66,
    100,
    85,
    32,
    85,
    7,
    49,
    8,
    66,
    94,
    10,
    46,
    99,
    59,
    23,
    80,
    78,
    18,
    24,
    10,
    60,
    40,
    8,
    32,
    16,
    39,
    42,
    87,
    99,
    56,
    6,
    18,
    4,
    70,
    24,
    57,
    63,
    63,
    98,
    27,
    31,
    80,
    56,
    93,
    93,
    24,
    24,
    71,
    16,
    52,
    36,
    24,
    38,
    48,
    7,
    57,
    14,
    49,
    28,
    51,
    27,
    56,
    31
];


function quickSort () {
    _sort(0, _DATA.length - 1);
}

function _sort (low, high) {
    if (low < high) {
        var pi = _partition(low, high);

        _sort(low, pi - 1);
        _sort(pi + 1, high);
    }
}

function _partition (low, high) {
    var pivot = _DATA[high];
    var i = (low - 1);
    var j = low;
    for (j; j < high; j++) {
        if (_DATA[j] < pivot) {
            i++;
            var temp = _DATA[i];
            _DATA[i] = _DATA[j];
            _DATA[j] = temp;
        }
    }

    _DATA[high] = _DATA[i + 1];
    _DATA[i + 1] = pivot;

    return i + 1;
}

function main () {
    console.log("array has been 'Quick' sorted: ");
    quickSort();
    console.log(_DATA);
}

main ();