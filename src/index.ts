export function isOdd(value: number | string) {
  const num = Number(value)

  if (!Number.isInteger(value))
    throw new Error('expected an integer');
  if (!Number.isSafeInteger(value))
    throw new Error('value exceeds maximum safe integer');
  return (num % 2) === 1
}
