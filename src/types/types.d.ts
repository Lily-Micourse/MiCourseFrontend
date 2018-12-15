declare module "*.png" {
  const img: any;
  export default img;
}

declare type DeepPartial<T> = {
  [P in keyof T]?:
    T[P] extends (infer U)[] ? DeepPartial<U>[] :
    T[P] extends object ? DeepPartial<T[P]> :
    T[P];
};
