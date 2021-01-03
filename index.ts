function isOdd(value: number | string) {
    value = Number(value)
    if (!Number.isInteger(value))
        throw new Error('expected an integer');
    if (!Number.isSafeInteger(value))
        throw new Error('value exceeds maximum safe integer');
    return (value % 2) === 1
}

function isEven(value: number | string) {
    value = Number(value)
    if (!Number.isInteger(value))
        throw new Error('expected an integer');
    if (!Number.isSafeInteger(value))
        throw new Error('value exceeds maximum safe integer');
    return (value % 2) === 0
}

export { isOdd, isEven }