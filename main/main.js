module.exports = function main(inputs) {
    // write your code here...
    var sum = 0;
    var dis = inputs["distance"];
    if (dis <= 2) {
        sum += 6;
    } else if (dis <= 8) {
        sum += 0.8 * (dis - 2) + 6;
    } else {
        sum += 1.2 * (dis - 8) + 6 + 6 * 0.8;
    }

    sum += 0.25 * inputs["parkTime"];
    sum = Math.round(sum);

    return sum;
};
