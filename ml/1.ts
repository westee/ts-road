#!/usr/bin/env ts-node
console.log(process.argv)
console.log('hello world')
let a:number = parseInt(process.argv[2])
let b:number = parseInt(process.argv[3])

console.log(a+b);
