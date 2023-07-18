function countZeroes(arr) {
  for (i in arr) {
        if (arr[i] === 0) {
            arr.splice(1, i);
            return arr.length;
        }
    }
    return 0;
}
module.exports = countZeroes