// /**
//  * const, let等の宣言
// **/

// /**
//  * 従来のJava Scriptの変数宣言
//  */

// var var1 = "Hello";
// console.log(var1);

// // var変数は上書き可能
// var1 = "Hello2";
// console.log(var1);

// // var変数は再宣言可能
// var1 = "Hello3";
// console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// // letは上書き可能
// var2 = "let変数を上書き";
// console.log(var2);

// // letは再宣言不可能
// let var2 = "let変数を再宣言できません";

// const var3 ="const変数";
// console.log(var3);

// // const変数は上書き不可と再宣言不可
// var3 = "const上書き";
// const var3 = "const変数を再宣言";

// // const変数のオブジェクトはプロパティの可能
// const var4 = {
//   name: "Koshi",
//   age: 23,
// };
// var4.name = "Komai";
// var4.address ="Toyama";
// console.log(var4);

// // const変数のオブジェクトはプロパティの可能
// const var5 = ['dog', 'cat'];
// var5[0] = "bird";
// var5.push("monkey");
// console.log(var5);

/**
 * テンプレート文字列
 */

// 従来の方法
const myname = "Koshi";
const message1 = "私の名前は" + myname + "です。";
console.log(message1);
