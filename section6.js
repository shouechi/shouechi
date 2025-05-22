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
  greeting: function(){
    return 'hello';
  },
  const: 'const', //オブジェクトは予約後を使用できる
  'current city': 'Tokyo', //キーを文字列にするとスペースを使用できる
  1: 1,
  3: 3, //数字もキーにできる
  3.1: 3.1, //小数点もキーにできる
  0: 0,
  '-3': -3, //マイナスはできない
  [interests]: 'music' //式もキーにできる
}

for (const key in person) { //for inはオブジェクトのプロパティを取得する
  // console.log(typeof key)
}

for (const key of Object.keys(person)) {

} //for ofはオブジェクトのプロパティを取得する
// console.log(person['current city']); //オブジェクトのプロパティにアクセスする
// console.log(Object.keys(person))  //オブジェクトのキーを取得する
// console.log(Object.values(person)) //オブジェクトの値を取得する
// console.log(Object.entries(person)) //オブジェクトのキーと値を取得する

person.name = 'Tom'; //オブジェクトのプロパティを変更する
person.gender = 'min'; //オブジェクトのプロパティを最後に追加する
delete person.age; //オブジェクトのプロパティを削除する

const name = 'Espresso';
const size = 350;
const coffee1 = {
  name, //プロパティ名と変数名が同じ場合は省略できる
  size, //プロパティ名と変数名が同じ場合は省略できる
};
const coffee4 = { 
  ...coffee1,
  isHot: true, //スプレット構文に追加できる
  name: 'Latte', //上書きできる,最後に書いた方が優先される
}; //スプレッド構文を使用して別のオブジェクトをコピーする

const o1 = { a: 1};
const o2 = { a: 2, b: 2};
const newObj = Object.assign(o1, o2); //既存のオブジェクトにプロパティを追加する。右側が優先される
console.log(o1 === newObj); //trueになる
const newCoffee = Object.assign({}, coffee1) //スプレット構文になる

const book = {
  title: 'javascript course',
  price: 9.99,
  author: {
    firstName: 'Yoshi',
    lastName: 'pi',
  },
};
const tile = book.title;
const { title: bookTitle, price, author: { firstName, lastName }, publisher = 'yoshi inc' } = book; //オブジェクトの分割代入
console.log(bookTitle, price, firstName, lastName); //オブジェクトの分割代入
book.title = undefined; 
//  if ('title' in book) {
 if (book.title !== undefined) { //undefinedの場合はfalseになる
  console.log(book.title);
 } //in演算子を使用してプロパティが存在するか確認する
//  user = null;
//  user?.address; //オプショナルチェイニング演算子を使用してプロパティが存在するか確認する
 // le - (global)   場合はglobal ojectが呼び出される
 // - global object
 // - this: global object
console.log(this); //thisはグローバルオブジェクトを指す

// -le (saythis())
// -outerEnv: global
// - this: strict ? undefined : global object
let sayThis = function() {
  console.log(this) //thisはグローバルオブジェクトかundefinedを指す
}

let logging = (cb) => { //アロー関数はthisを持たない
  console.log(cb());
}

// -le (car.sayThis())
// -outerEnv: global
// - this: car
// const car = {
//   color: 'red',
//   sayThis,
//   chanageColor(color) { //メソッドの省略の書き方
//     logging( function (color) {
//       return this.color;
//     });
//     this.color = color; //thisで柔軟に変更できる
//   },
// };
// car.chanageColor('white');

// const car2 = { ...car};
// car2.chanageColor('white');
// console.log(car2);
// console.log(car);
// car.sayThis(); //メソッド呼び出しは一つ左のオブジェエクを指す

sayThis = function(a, b) {
  console.log(this, a, b);

};
// sayThis.call({ hello: 'hello' }, 1, 2); //callメソッドを使用してthisを指定する。引数で渡す
// sayThis.apply({ hello: 'hello' }, [1, 2]); //applyメソッドを使用してthisを指定する。引数を配列で渡す
sayThis = sayThis.bind({ hello: 'hello' }, 1); //bindメソッドを使用してthisを指定する。新しい関数を返す
// sayThis.call({ hi: 'hi' }, 1, 2); //callなどメソッドを使用してもbindが優先され、変わらない。
// sayThis(2); //bindメソッドは引数を固めることができる

const pastaCalculator = {
  servingSize: 60,
  member: 4,
  // get total() {
  //   return this.servingSize * this.member;
  // },
  // set total(newValue) { //同じアクセサプロパティは１つのプロパティになる。
  //   this.member = newValue / this.servingSize;
  // },
  // total: 240 //同じプロパティは最後が優先される
};
Object.defineProperty(pastaCalculator, 'total', {
  configurable: true,
  enumerable: true,
  get() {
    return this.servingSize * this.member;
  },
  set() {
    this.member = newValue / this.servingSize;
  }
})
console.log(Object.getOwnPropertyDescriptor(pastaCalculator, 'total')); //プロパティを見ることができる
// pastaCalculator.total = 240; //setterを使用してプロパティを設定する
// console.log(pastaCalculator.total); //getterを使用してプロパティを取得する
const blog = {
  title: 'How to make cake',
  author: 'Yoshipi',
};
Object.preventExtensions(blog); //新規のプロパティを追加できない。
Object.isExtensible(blog); //新規プロパティを追加できるか確認することができる。
Object.seal(blog); //新規のプロパティを追加できない。既にあるプロパティも削除できない。
Object.freeze(blog); //新規のプロパティを追加できない。既にあるプロパティも削除できない。更新できない。

