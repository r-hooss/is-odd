export function isOdd(value: number | string) {
    value = Math.abs(Number(value))
    if (!Number.isInteger(value))
        throw new RangeError('expected an integer');
    if (!Number.isSafeInteger(value))
        throw new RangeError('value exceeds maximum safe integer');
    return (value % 2) === 1
}
