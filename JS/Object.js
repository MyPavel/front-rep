const c = "misha";

const num = {
    a: 1,
    [c]: ' - loh'
}

num.b = 2;

console.log(num)
console.log(num.b)
console.log(num.c)
console.log(c + num.misha)
console.log(c + num[c])

const obj = {a: 1, c: undefined}; 
console.log('a'  in obj);
console.log('b'  in obj);
console.log('c'  in obj);
'a' in obj; // true

'b' in obj; // false

'c' in obj; // true

