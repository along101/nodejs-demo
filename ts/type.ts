let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制

// @ts-ignore
let name: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${name} 发布 ${years + 1} 周年`;
console.log(words)

// 在元素类型后面加上[]
let arr: number[] = [1, 2];
// 或者使用数组泛型
let arr1: Array<number> = [1, 2];

let x: [string, number];
x = ['Runoob', 1];    // 运行正常
// x = [1, 'Runoob'];    // 报错
console.log(x[0]);    // 输出 Runoob

enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2

let x1: any = 1;    // 数字类型
x1 = 'I am who I am';    // 字符串类型
x1 = false;    // 布尔类型

let x2: any = 4;
// x2.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
console.log(x2.toFixed());    // 正确