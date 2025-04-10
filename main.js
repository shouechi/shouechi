let conut = 0;
conut = 30;
let newCount = 0;
const daysInWeek = 7;
let tomatoConut; //いい書き方
let TomatoCount; //悪い書き方
let tomato_conut; //悪い書き方
let $tomato$Conut; //ドルマーク使用可能
let _tomato_Conut; //アンダースコア使用可能
let tomatoConut7; //数字から始まる変数名は使用できない
let トマトカウント; //日本語の変数名も使用可能

let additionResult = 2 + 5;
let result = 5;
result = result + 1;
result += 1;
result++; //前の値を返す
++result; //後の値を返す
let number = 10; //interger型
number = -4;
number = 32.42; //folat型
let string = 'Hello'; //string型
const userName = 'Yoshipi';
string = 'Hello' + userName + '!'; //文字列の結合
string = `Hello ${userName}`; //テンプレートリテラル
string = `\`\\`;
// 改行の仕方
string = 'Hello\nYoshipi!'; // backslashを使う
string = `Hello Yoshipi!`; // テンプレートリテラルを使う

const userInput = '10.9';
let calcResult;
// 使用頻度が高い
calcResult = Number(userInput) + 10;
calcResult = parseInt(userInput) + 10; //整数に変換
calcResult = parseFloat(userInput) + 10; //小数点を含む数値に変換
calcResult = +userInput + 10; //Number型に変換
const tenNumber = 10;
//使用頻度は低い
calcResult = '10' + String(tenNumber);
calcResult = '10' + tenNumber.toString(); //数値を文字列に変換

let boolean = true;
boolean = false;

let array = ['apple', 'banana', 'grape']; //配列
array = [1, 2, 3];
array = [1, 'apple', true, array];
array = ['apple', 'banana', 'grape'];
array = [];
array.push('apple');
const coffee = {
  name: 'Chocoleate Mocha', //nameプロパティ
  size: 350, //sizeプロパティ
  isHot: true,
  toppings: ['Cinnamon', 'Carmel'],
  nutritions: {
    calories: 430,
    sugars: 53,
    caffeine: 100,
  }, //オブジェクトの中にオブジェクト入れることも可能
}; //オブジェクト
let userInfo = null; //何もない状態(明示的にnullを指定、undefinedは使用しない)

