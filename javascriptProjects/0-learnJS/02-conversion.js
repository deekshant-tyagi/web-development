let score = "44abc"
// console.log(typeof(score));
let convertNumber = Number(score);
// console.log(typeof(convertNumber));
// console.log(convertNumber);//{issue} in js [it shows NaN]
// "44" => 44 easily convert
// "44abc" => NaN Not a Number
// null = number
// undefined = NaN
// true = 1 & false = 0


// null means empty{absence of any value[google]} not a zero.




let numb = 44
let srtingnumb = String(numb)
// console.log(srtingnumb);
// console.log(typeof srtingnumb);
// number converted into string.

// <---- Tricky conversion --->
// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log(1 + 2 + "2");//32
// console.log("1" + "2" + 2);//122


console.log(null > 0)//false
console.log(null == 0)//false
console.log(null >= 0) // it is true beacuase equality operator convert null to 0 which satisfy the condition


// strict check === & loose check ==
console.log("2" === 2);//false
console.log("2" == 2);//true
