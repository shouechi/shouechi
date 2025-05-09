'use strict'; // strictモードを有効にする

// console.log(globalThis); //グローバルオブジェクト
//  {//varと同じ動作になる
//   // function sayTomao() { //ブロック文に関数を定義しないようにする
//     var tomato = 'tomato'; 
//   }
//  //}
//  sayTomao();
 //primitive
let x = 8; //メモリに保存されている
//object
let y = {x: 0} //メモリのyとは違うところに保存されおり、yには番地が保存されている

const coffee = {name: 'Cafee Latte'};
const coffee2 = coffee; //constは再代入を防いでいる、オブジェクトの場合でも変わることはある。
coffee2.name = 'Espresso'; //cofeeも変更される
const coffee3 = {name: 'Cafee Latte'};
coffee === coffee3; //別のオブジェクト、アドレスになるためfalseになる

const interests = 'interests'
const person = {
  name: 'yoshipi', //キーは文字列で管理されている(string)
  age: 30,
  greeting: function(){},
  const: 'const', //オブジェクトは予約後を使用できる
  'current city': 'Tokyo', //キーを文字列にするとスペースを使用できる
  3: 3, //数字もキーにできる
  3.1: 3.1, //小数点もキーにできる
  '-3': -3, //マイナスはできない
  [interests]: 'music' //式もキーにできる
}

for (const key in person) { //for inはオブジェクトのプロパティを取得する
  // console.log(typeof key)
}
console.log(person['current city']); //オブジェクトのプロパティにアクセスする
// console.log(Object.keys(person))  //オブジェクトのキーを取得する
console.log(Object.values(person)) //オブジェクトの値を取得する
console.log(Object.entries(person)) //オブジェクトのキーと値を取得する

