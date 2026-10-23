const PATTERN = [
  [2, 1, 1],
  [1, 2, 1],
  [1, 1, 2],
] as const;

const SPAN = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  4: "lg:col-span-4",
} as const;

export function getMosaicSpanClass(index: number, total: number): string {
  const rowStart = Math.floor(index / 3) * 3;
  const itemsInRow = Math.min(3, total - rowStart);

  if (itemsInRow === 1) return SPAN[4];
  if (itemsInRow === 2) return SPAN[2];

  const patternRow = PATTERN[(rowStart / 3) % PATTERN.length];
  return SPAN[patternRow[index - rowStart] as 1 | 2];
}
