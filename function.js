function add(a, b) {//関数はオブジェクトの一種、文や宣言では関数宣言になる
  return a + b;
}//関数定義はどこでも宣言できる
// console.dir(add);
// console.log(add.name);//関数の名前
// console.dir(add.length);//関数の引数の数
const newAdd = add;
console.log(newAdd(1, 2));
let sayHi = function syaHi() {}//式のところに書いた場合は関数式、名前付き関数式
sayHi = function() {
  return 'hi';
}//無名関数
// console.log(sayHi());
const person = {
  name: 'yoshipi', //プロパティは値のこと
  syahi: function(){ //メソッドは関数のこと
    return 'hi';
  },
};
sayHi = (name) => ({
  name: name,
} )//アロー関数
sayHi = (name, message='I like cake.') => `hi ${name}! ${message}`;//デフォルトパラメーター（引数を渡さなれない場合）複数のパラメーターがあるときは最後にデフォルトパラメーターを書く。

let sum = (...nums) => { //レストパラメーター（引数を配列で受け取る）
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
}
let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
}
subtract(10, 3, (result) => {//コールバック関数
  console.log(chokolate);
  console.log(result);
});
// subtract(10, 4, (result) => {
//   alert(result);
// });