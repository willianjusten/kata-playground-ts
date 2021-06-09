import evenOrOdd from '.'

describe('03-even-or-odd', () => {
  it('should return even or odd', () => {
    expect(evenOrOdd(2)).toBe('Even')
    expect(evenOrOdd(0)).toBe('Even')
    expect(evenOrOdd(3)).toBe('Odd')
    expect(evenOrOdd(5)).toBe('Odd')
  })
})
