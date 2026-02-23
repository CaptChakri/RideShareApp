declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "react" {
  export function useEffect(
    effect: () => void | (() => void),
    deps?: ReadonlyArray<unknown>
  ): void;
  export function useState<T>(initialState: T): [T, (value: T) => void];
}

declare module "react-native-vector-icons/Ionicons" {
  const Ionicons: any;
  export default Ionicons;
}
