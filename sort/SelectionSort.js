const DATA = [
        41,
        98,
        8,
        27,
        43,
        7,
        67,
        96,
        93,
        78,
        8,
        62,
        3,
        13,
        13,
        17,
        87,
        71,
        50,
        91,
        64,
];

function _selectionSort () {
    var data = DATA;
    for (i = 0; i < data.length - 1; i++) {
        var idxMin = _findIndexMin(i);
        
        var temp = data[i];
        data[i] = data[idxMin];
        data[idxMin] = temp;
    }

    return data;
}

function _findIndexMin (start) {
    var idxMin = start;
    var data = DATA;
    for (j = start + 1; j < data.length; j++) {
        if (data[j] < data[idxMin]) {
            idxMin = j;
        }
    }

    return idxMin;
}

function main () {
    console.log("Data Array has been sorted");
    _selectionSort();
    console.log(DATA);
};

main();
