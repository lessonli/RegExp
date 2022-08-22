

// 使用 正则表达式边界修复错误字符串

let buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) 使用 ^ 修正字符串开始处和换行后的匹配。

let reg = /^t/gim 
 buggyMultiline = reg[Symbol.replace](buggyMultiline,'h')
// let str_1 = str.replace(buggyMultiline, 'h')
// console.log(str);
// console.log(str_1);

// 2) 使用 $ 修正字符串结尾处的匹配。

let reg2 = /aa$/g
buggyMultiline= reg2[Symbol.replace](buggyMultiline,"ee")
// console.log(str2, '2');

// 3) 使用 \b 修正单词和空格边界上的字符。

let reg3 = /\bi/ 
buggyMultiline= reg3[Symbol.replace](buggyMultiline, 't')
// console.log(buggyMultiline, '3');

let reg4 = /\Bo/g
buggyMultiline= reg4[Symbol.replace](buggyMultiline, 'e')
console.log(buggyMultiline, '4');



let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// 使用正则 /^A/ 选择以'A'开头的水果。

let  fruitsStartsWithA = fruits.filter(item=> /^A/.test(item))



// 使用正则 /^A/ 选择以非A'开头的水果。

let fruitsStartsWithNotA = fruits.filter(item=> /^[^A]/.test(item))

// console.log(fruitsStartsWithNotA, 'fruitsStartsWithNotA');


let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// 选择包含以 “en” 或 “ed” 结尾的单词的描述： 因为是什么 结尾 因此加了边界

let enEdSelection = fruitsWithDescription.filter(item=> /(en|ed)\b/.test(item))
// console.log(enEdSelection, 'enEdSelection');


// 向前断言 x(?=y) 匹配 被y 跟随的x
//  向前否定断言 x(?!y)
let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";


let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi
// console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]


let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]


//  向后断言 反向预查   反向肯定(?<=)x   反向否定预查 (?<!y)x

//  (?<=y)x 匹配x   y 后面是x 的时候 
console.log(/(?<=y)x/[Symbol.match]('yx'));




// 向前 匹配   先行 断言 y 前面是 x 的时候 也叫做 正向肯定预查 x(?=y)  正向否定预查 x(?!y)
console.log(/x(?=y)/[Symbol.match]('xy'));