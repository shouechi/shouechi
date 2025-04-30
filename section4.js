let ok = false;
let maybeOk = true;
if (ok) {
  //console.log('OK');
} else if(maybeOk) {
  // console.log('Maybe OK');
} else {
  // console.log('NG');
}

ok =1 === 1; //等しい(同値演算子)
ok = 'hello' === 'hello'; //等しい(同値演算子)
ok = 1 !== 2; //等しくない(同値演算子)
ok = 1 == 1; //等しい(等値演算子)
ok = 1 === '1'; 

const coffee1 = { name: 'Cafe Latte'}
const coffee2 = { name: 'Cafe Latte'}
ok = coffee1 === coffee2; //オブジェクトは参照型なのでfalse
ok = coffee1.name === coffee2.name; //プロパティの値を比較する場合はtrue
const fruits1 = ['apple', 'banana']
const fruits2 = ['apple', 'banana']
ok = fruits1 === fruits2; //配列は参照型なのでfalse

ok = 1 > 0; 
ok = 'a' < 'b'; //文字列の比較はUnicodeコードポイントで比較される
ok = 'A' < 'a'; //大文字と小文字の比較は大文字が小さい
ok = 'false' //falseではあるが文字列として認識されためture
if (ok) { //真偽地は文字や数字を扱うと自動的にtureかfalseに変換される
  // console.log('OK');
} else {
  // console.log('NG');
}
ok = false && false; //falseとなる
ok = false || false; //falseとなる
ok = 'hello' && 'hi'; //左がturueなら右側が返される,左がfalseなら左側が返される
ok = '' || 'hi'; //左がturueなら左側が返される,左がfalseなら右側が返される
const userInput = '';
const userName = userInput || 'Guest'; //userInputが空文字の場合は'Guest'が代入される(デフォルトの値でよく使用される)
const x = 15;
ok = x > 10 && x < 20; //&&は短絡評価されないので両方の条件が評価される
ok = x ===10 || x > 12 && userName; //順序は、>,===,&&,||の順で評価される
if (ok) { 
  // console.log('OK');
} else {
  // console.log('NG');
}
const username = '' ?? 'Guest'; //usernameがnullまたはundefinedの場合は''が代入される
ok = !true; //falseになる
ok = !'hello'; 
ok = !x;
ok = !!x; //真偽値を反転させる

const hello = 'hell2';
{// 変数helloはこのブロック内でのみ有効
  const hello = 'hell1';
}
if (ok) {} //ブロック文は複数の処理をしたい場合に使用する
ok = false;
ok = ok ? 'OK' : 'NG'; //三項演算子はif文の短縮形

function vagetableColor(vagetable){ 
  switch (vagetable) { //break文がないと次のcaseに移る
    case 'tomato':{ //ブロック文を使用することで、変数のスコープを制限できる
      const message = 'tomato is red'; 
      console.log(message);
      break;
    } 
    case 'carrot': //ケースを２つ書くケース
    case 'pumkin':{
      const message = `${vagetable}is orange` ;
      console.log(message);
      break;
    }
    case 'onion':{
      const message = 'onion is white';
      console.log(message);
      break;
    }
    default:{
      const message = 'not found';
      console.log(message);
      break;
    }
  }
}
// vagetableColor('tomato');
let count = 0;
while (count < 10) {
  console.log(count);
  count += 1;
}
let tomatoCount = 0;
do {
  console.log(tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10); //do whileとwhileの違いは最初に実行される文があるかないか