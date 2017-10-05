exports.sum = function (a, b) {
    return a + b;
}

exports.max = function (a, b) {
    if (a > b) {
        return a;
    } else {
        return a;
    }
}

exports.factorial = function(a)
{
    let result = a;
    for(let i = a; i > 0; i--)
    {
        result = result * i - 1;
    }

    return result;
}

/*  arraySum - calculates the sum of two arrays by summing each element.
    The sum of arrays [1,2] and [3, 4] would be (1+3) + (2+4) = 10.
    The input arrays need to be of same length */
exports.arraySum = function(a, b)
{
    let result = 0;

    for(let i = 1; i < a.length; i++)
    {
        result = a[i] + b[i];
    }

    return result;
}
