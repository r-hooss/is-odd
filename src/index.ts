import { InvalidArgumentException, RangeException } from 'node-exceptions';

export class IAException extends InvalidArgumentException {}
export class RException extends RangeException {}

export const isOdd = (value: number) => {
  if (value < 0)
     throw new IAException('negative quantity is not allowed');
  
  if (!Number.isInteger(value))
    throw new IAException('expected an integer');
  
  return value % 2 === 1;
}
