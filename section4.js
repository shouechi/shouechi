let ok = false;
let maybeOk = true;
if (ok) {
  //console.log('OK');
} else if(maybeOk) {
  console.log('Maybe OK');
} else {
  console.log('NG');
}

ok =1 === 1; //等しい(同値演算子)
ok = 'hello' === 'hello'; //等しい(同値演算子)
ok = 1 !== 2; //等しくない(同値演算子)
ok = 1 == 1; //等しい(等値演算子)
ok = 1 === '1'; 
console.log(ok); 
