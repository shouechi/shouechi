'use strict'; // strictモードを有効にする

console.log(globalThis); //グローバルオブジェクト
 {//varと同じ動作になる
  function sayTomao() { //ブロック文に関数を定義しないようにする
    var tomato = 'tomato'; 
  }
 }
 sayTomao();
 //primitive
let x = 8; //メモリに保存されている
//object
let y = {x: 0} //メモリのyとは違うところに保存されおり、yには番地が保存されている

const coffee = {name: 'Cafee Latte'};
const coffee2 = coffee; //constは再代入を防いでいる、オブジェクトの場合でも変わることはある。
coffee2.name = 'Espresso'; //cofeeも変更される
const coffee3 = {name: 'Cafee Latte'};
coffee === coffee3; //別のオブジェクト、アドレスになるためfalseになる


