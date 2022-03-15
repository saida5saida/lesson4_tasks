// Sual 1 
const array = ['cup', 'plate', 'spoon', 'knife', 'fork']
let products = array.length
while(products<6) {
products++
}
console.log(array)

// Sual 2 
const terevez = ['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']


// Sual 3 
// (1+2+3+...+99+100) = 
let number = 1
let sum = 0
while(number<101) {
    sum+=number
    number++
}
   console.log(sum) 

// Sual 5 - alinmadi
// 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin. 
let reqem = 10000
while(reqem%9999 === 0) {
    reqem--;
}
console.log(reqem)

