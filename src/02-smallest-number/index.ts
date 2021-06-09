export default function smallestNumber(numbers: number[]) {
  return numbers.sort((a, b) => a - b)[0]
}
