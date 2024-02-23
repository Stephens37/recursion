#!/usr/bin/env node

/* function fibs (t) {
  let fibArray = []
  if (t === 0) {
    console.log(fibArray)
    return fibArray
  }
  fibArray.push(0)
  if (t === 1) {
    console.log(fibArray)
    return fibArray
  }
  fibArray.push(1)
  if (t === 2) {
    console.log(fibArray)
    return fibArray
  }
  for (let i = 2; i < t; i++) {
    let newFibNum = fibArray[i - 1] + fibArray[i - 2]
    fibArray.push(newFibNum)
  }
  console.log(fibArray)
  return fibArray
}

fibs(8) */

/* (function fibsRec (t, a) {
  a = []
  if (t === 0) {
    console.log(a)
    return a
  }
  a.push(0)
  if (t === 1) {
    console.log(a)
    return a
  }
  a.push(1)
  if (t === 2) {
    console.log(a)
    return a
  }
  fibsRec(t - 1, a.push(a[a.length - 1] + a[a.length - 2]))
  console.log("hi")
}

fibsRec(8, [])
create function fibs
parameter is how many times fib sequence will occur and be added to array
if parameter equals zero return the array
parameter minus one every recursive action
array created starting with zero one
this array will add the last two numbers [-1] and [-2]
the result will be pushed to the end of the array
*/

function fibsRec(t, a) {
  if (t === 0) {
    console.log(a);
    return a;
  }
  if (a.length === 0) {
    a.push(0);
  }
  if (t === 1) {
    console.log(a);
    return a;
  }
  if (a.length === 1) {
    a.push(1);
  }
  if (t === 2) {
    console.log(a);
    return a;
  }
  a.push(a[a.length - 1] + a[a.length - 2]);
  fibsRec(t - 1, a);
}

fibsRec(8, []);
