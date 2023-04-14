// @ts-ignore
function findItemMiss(data) {
    var i = 1;
    var arr = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    console.log(arr);
}
findItemMiss([1, 2, 6, 7, 8, 9, 10]);
