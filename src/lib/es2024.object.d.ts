/**
 * Identifies unrestricted strings and numbers (i.e., not unions, not numeric
 * enums which can broaden to numbers, etc.).
 */
type IsAnyStringOrNumber<K extends PropertyKey> = K extends string | number
  ? string extends K
    ? K
    : `${number}` extends `${K}`
    ? K
    : string | number extends K
    ? K
    : never
  : never;

interface ObjectConstructor {
    /**
     * Groups members of an iterable according to the return value of the passed callback.
     * @param items An iterable.
     * @param keySelector A callback which will be invoked for each item in items.
     */
    groupBy<K extends PropertyKey, T>(
        items: Iterable<T>,
        keySelector: (item: T, index: number) => K,
    ): [K] extends [IsAnyStringOrNumber<K>] ? Record<K, T[]> : Partial<Record<K, T[]>>;
}
