export function convertNumberToRomanNumeral(num: number): string {
  if (num <= 0 || num >= 4000 || !Number.isInteger(num)) {
    throw new RangeError("Input must be an integer between 1 and 3999");
  }

  const romanMap: Array<[value: number, symbol: string]> = [
    [1000, "M"],
    [900,  "CM"],
    [500,  "D"],
    [400,  "CD"],
    [100,  "C"],
    [90,   "XC"],
    [50,   "L"],
    [40,   "XL"],
    [10,   "X"],
    [9,    "IX"],
    [5,    "V"],
    [4,    "IV"],
    [1,    "I"],
  ];

  let result = "";
  let remainder = num;

  for (const [value, symbol] of romanMap) {
    const count = Math.floor(remainder / value);
    if (count > 0) {
      result += symbol.repeat(count);
      remainder -= value * count;
    }
    if (remainder === 0) break;
  }

  return result;
}