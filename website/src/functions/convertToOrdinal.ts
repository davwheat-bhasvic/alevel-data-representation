export default function convertToOrdinal(i: number): string {
  return `${i}${['st', 'nd', 'rd'][((((i + 90) % 100) - 10) % 10) - 1] || 'th'}`
}
