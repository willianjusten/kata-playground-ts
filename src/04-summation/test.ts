import summation from '.'

describe('04-summation', () => {
  it('should sum the numbers', () => {
    expect(summation(2)).toBe(3)
    expect(summation(8)).toBe(36)
  })
})
