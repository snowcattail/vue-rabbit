// 定义通用后端类型（泛型）

// interface Box<Type> {
//   contents: Type;
// }
// let box: Box<string>;

interface Data<T> {
  code: string;
  msg: string;
  result: T;
}

// type Age = number;
// let age: Age = 55;

// type Result<T> => 起类型别名
type Result<T> = Promise<Data<T>>; // http 请求是异步的，异步操作的返回值会包装成 Promise 对象
