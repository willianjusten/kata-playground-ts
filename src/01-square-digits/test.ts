import squareDigits from '.'

describe('squareDigits', () => {
  it('should square digits and concatenate', () => {
    expect(squareDigits(9119)).toBe(811181)
    expect(squareDigits(0)).toBe(0)
  })
})
