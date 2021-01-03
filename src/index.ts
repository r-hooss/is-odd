export const isOdd = (value: number) => {
  if (value < 0)
     throw new Error('negative quantity is not allowed');
  
  if (!Number.isInteger(value))
    throw new Error('expected an integer');
  
  return value % 2 === 1;
}
