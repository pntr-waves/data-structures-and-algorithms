const _DATA = [
   31,  33,  36,  37,  40,  43, 43,  44,  44,  45,  45,
   50,  51,  52,  56,  56,  62, 63,  65,  67,  68,  69,
   70,  73,  74,  75,  78,  79, 80,  80,  83,  84,  85,
   88,  91,  91,  92,  93,  95, 99, 101, 101, 102, 102,
  103, 107, 108, 114, 116, 119
];

function BinarySearch (value) {
    _search(value, 0, _DATA.length - 1);
}

function _search (value, left, right) {
    if (left <= right) { // if (right >= left)
        var mid = Math.floor((left + right) / 2); //mid = l + (r - l) / 2;

        if (_DATA[mid] == value) {
            console.log(`_DATA[${mid}] = ${_DATA[mid]}`);
            // return;
        }

        _search(value, left, mid - 1); //_search(value, left, mid - 1)
        // if (_DATA[mid] > value) {
        // }

        _search(value, mid + 1, right); //_search(value, mid + 1, right)
    }
}

function main () {
    var value = 91;
    console.log(`Find value = ${value}`);
    BinarySearch(value);
}

main();
