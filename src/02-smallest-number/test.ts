import smallestNumber from '.'

describe('02-smallest-number', () => {
  it('should return the smallest number', () => {
    expect(smallestNumber([34, 15, 88, 2])).toBe(2)
    expect(smallestNumber([34, -345, -1, 100])).toBe(-345)
  })
})
