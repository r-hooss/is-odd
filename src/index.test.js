describe('is odd', () => {
  let isOdd
  beforeAll(() => {
    isOdd = (value) => {
      if (!Number.isInteger(value))
        throw new Error('expected an integer');
      
      return value % 2 === 1;
    }
  });

  it('should return true', () => {
    expect(isOdd(1)).toBe(true);
  });
  it('shpuld return false', () => {
    expect(isOdd(2)).toBe(false);
  });
});
