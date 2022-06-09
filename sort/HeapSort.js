const _DATA = [
    117,
    167,
    104,
    146,
    105,
    106,
    192,
    113,
    175,
    150,
    128,
    123,
    187,
    161,
    170,
    122,
    143,
    103,
    139,
    172,
    153,
    200,
    133,
    138,
    102,
    157,
    129,
    190,
    173,
    143,
    158,
    108,
    176,
    127,
    103,
    124,
    196,
    199,
    153,
    154,
    107,
    101,
    198,
    143,
    188,
    197,
    150,
    133,
    104,
    114,
    137,
    126,
    191,
    148,
    189,
    173,
    117,
    196,
    110,
    178,
    156,
    182,
    108,
    128,
    100,
    109,
    169,
    186,
    180,
    120,
    133,
    168,
    111,
    111,
    145
];

function heapSort () {
    _sort();
}

function _sort () {
    var n = _DATA.length;
    for (i = Math.floor(n / 2 ) - 1; i >= 0; i--) {
        _heapify(n, i);
    }

    for (i = n - 1; i > 0; i--) {
        var temp = _DATA[0];
        _DATA[0] = _DATA[i];
        _DATA[i] = temp;

        _heapify(i, 0);
    }
}

function _heapify (n, i) {
    var largest = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;

    if (left < n && _DATA[largest] < _DATA[left]) {
        largest = left;
    }

    if (right < n && _DATA[largest] < _DATA[right]) {
        largest = right;
    }

    if (largest != i) {
        var temp = _DATA[i];
        _DATA[i] = _DATA[largest];
        _DATA[largest] = temp;

        _heapify(n, largest);
    }

}

function main () {
    console.log("DATA has been 'heap' sort:")
    heapSort();
    console.log(_DATA);
}

main ();
