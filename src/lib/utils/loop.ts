export type LoopItem<T> = {
  item: T;
  key: string;
  realIndex: number;
  isClone: boolean;
};

/** [last, ...items, first]: track position 0 and n+1 are clones. */
export function toLoopItems<T extends { id: string }>(
  items: readonly T[],
): LoopItem<T>[] {
  const n = items.length;
  if (n === 0) return [];

  return Array.from({ length: n + 2 }, (_, pos) => {
    const realIndex = (pos - 1 + n) % n;
    const isClone = pos === 0 || pos === n + 1;
    const item = items[realIndex];
    return {
      item,
      realIndex,
      isClone,
      key: isClone ? `${item.id}-clone-${pos}` : item.id,
    };
  });
}
