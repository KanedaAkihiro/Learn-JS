//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ 変数定義・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・

// 変数定義（セミコロンはつける方がおススメ）
// 変数宣言または初期値と呼ぶ
let count = 0;
console.log(count);

// 変数を定義→変数に値を代入
count = 30;
console.log(count);

// 変数宣言で初期値を定義しなかった場合
let undefind;

// 変数を定義しないとコンソール上ではundefindと表記される
// エラーやバグを探すときに便利かも
console.log(undefind);

//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ 定数定義・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
// 必ず一定の値になるものは定数(Const)で定義する
const daysInweek = 7;

//  constを定義する理由
// リファクタが楽になる（一か所しか変更しなくてよい）
// 可読性の向上
// 実装するときはつねにconstで定義する

//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ 命名規則・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
// 変数にはどんな特殊な記号も入れることができない
// 例 tomato-1
// let test? = 0;

// 記号が入れれる例外な記号は２つ
// $（ダラーマーク）・_(アンダーバー)
let $tomato = 1;
let tomato_1 = 1;

// 数字は戦闘につけて定義してはいけない
// let 7tomatoCount;

//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ 変数に変数を代入・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
let mas = 1 + 1;
let result = mas;
console.log(result);
