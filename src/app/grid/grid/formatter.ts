/**
 * Callable interface with generics
 */
interface FormatterFn<T> {
  (arg: T): string;
}
