module.exports = function reverse(n) {
    let str = new String(n);
    return parseInt(str.split("").reverse().join(""));
};
