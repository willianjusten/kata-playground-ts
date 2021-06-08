export default function squareDigits(num: number) {
  return +num
    .toString()
    .split('')
    .map((n) => Math.pow(+n, 2))
    .join('')
}
