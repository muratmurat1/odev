varhammingWeight = function (n) {
    return n.ToString(2).replace(/0/g, ‘’).length
}