module.exports = function longestConsecutiveLength(array) {
    let newArray = [];
    let count = 1;
    let maxCount = 0;
    for (let i = 0; i < array.length; i++) {
        newArray[array[i]] = 1;
    }
    for (let i = 0; i < array.length; i++) {
        getAllPreviousNumber(array[i] - 1);
        getAllNextNumber(array[i] + 1);
        if (count > maxCount) {
            maxCount = count;
        }
        count = 1;
    }
    return maxCount;

    function getAllPreviousNumber(number) {
        while (newArray[number--] === 1) {
            count++;
        }
    }

    function getAllNextNumber(number) {
        while (newArray[number++] === 1) {
            count++;
        }
    }
}
;

