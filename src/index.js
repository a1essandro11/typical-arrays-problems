exports.min = function min(array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;

    let minimum = 0;

    for (let i = 0; i < array.length; i++) {
        if (minimum > array[i]) {
            minimum = array[i];
        }
    }
    return minimum;
}

exports.max = function max(array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;
    let maximum = 0;

    for (let i = 0; i < array.length; i++) {
        if (maximum < array[i]) {
            maximum = array[i];
        }
    }
    return maximum;
}

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) return 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];

    }
    return sum / array.length;
}


