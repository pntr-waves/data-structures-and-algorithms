const _DATA = [
    52,
    44,
    116,
    75,
    102,
    33,
    99,
    101,
    74,
    50,
    91,
    43,
    37,
    56,
    67,
    92,
    80,
    91,
    43,
    40,
    107,
    36,
    119,
    56,
    108,
    114,
    69,
    88,
    63,
    101,
    31,
    45,
    95,
    68,
    79,
    44,
    84,
    80,
    70,
    51,
    62,
    85,
    65,
    102,
    73,
    78,
    83,
    103,
    93,
    45
];


function MergeSort () {
    _sort(0, _DATA.length - 1);
}

function _merge (left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;

    console.log(n1, n2);

    var lArr = new Array(n1);
    var rArr = new Array(n2);

    for (i = 0; i < n1; i++) {
        lArr[i] = _DATA[left + i];
    }

    for (i = 0; i < n2; i++) {
        rArr[i] = _DATA[mid + 1 + i];
    }

    var i = j = 0;
    var k = left;

    while (i < n1 && j < n2) {
        if (lArr[i] < rArr[j]) {
            _DATA[k] = lArr[i];
            i++;
        } else {
            _DATA[k] = rArr[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        _DATA[k] = lArr[i];
        i++;
        k++;
    }

    while (j < n2 ) {
        _DATA[k] = rArr[j];
        j++;
        k++;
    }
}

function _sort (left, right) {
    if (left < right) {
        var mid = Math.floor((left + right) / 2);

        _sort(left, mid);
        _sort(mid + 1, right);

        _merge(left, mid, right);
    }
}

function main () {
    console.log("DATA has been 'merge' sorted");
    MergeSort();
    console.log(_DATA);
}

main();
