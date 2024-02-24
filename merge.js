/*
create function mergesort
parameter is the array to be used
base case: if a[n] < a[n+1] return the array

mergeSort(a.length / 2 = arraySubs)

create a new array for this sorted array
then begin to sort each split halves as the function progresses
mergeSort()
merge each half, sort, repeat

the halves should become bigger and bigger each time until array fully merged

n = 0
mergeSort(a.length / 2 = a [[]])

a[n] > n + 1

first need to get array
if that array's indexes are already in order return the array
otherwise divide the array by half
return each split end into new arrays
keep spliting the arrays until there is 1 or 2 left for each array
then compare each array's indexes
put the lower one into a new array, followed by the higher
repeat this process until reaching one final new array which will equal a

mergeSort(a)
if (a[index] < a[index + 1] === true) then return the array
mergeSort(newArray = array.length / 2)
*how do I add each new split array to a new variable
*/

/* function mergeSort (a) {
  if (a[n] < a[n + 1]) {
    return a
  }
  const chunkSize = 2
  const slicedArrays = []
  let i = 0
  mergeSort(a = slicedArrays.push(a.slice(i, i + chunkSize)))
  let b = 0
  let c = 0
  let d = 0
  let e = 0
  let arrayZero = slicedArrays[b][d]
  let arrayOne = slicedArrays[c][e]
  if (arrayZero < arrayOne) {
    mergeSort(slicedArrays[slicedArrays.length].append(indexZero))
    if (d = 0) {
      arrayZero = slicedArrays[b][d + 1]
    }
  } else if (arrayOne < arrayZero) {
    mergeSort(slicedArrays[slicedArrays.length].append(indexOne))
    if (e = 0) {
      arrayOne = arrayOne[c][e + 1]
    }
  }
  arrayZero = slicedArrays[0][0+1]
  if (d === 1 && arrayOne[c][0] < arrayOne[c][1]) {
    mergeSort(slicedArrays[slicedArrays.length].append(indexOne))
  }
  arrayOne = arrayOne[c][e+1]
  mergeSort(slicedArrays[slicedArrays.length].append(indexOne))
  b = b + 1
  c = c + 1
} */

/* the merge sort function's intention is 
to breakdown a big unsorted array's contents into smaller arrays
then slowly begin to rebuild that array
by comparing each of the smaller pieces
to see which is bigger
the large array is rebuilt in this exact same method of comparison */

/* mergeSort()
turn [5, 2, 1, 7, 4] into [5,2], [1], [7, 4]
5 > 2, [2, 5], [1], 7 > 4, [4, 7]
2 > 1, [1, 2, 5]
1 < 4, [1], 2 < 4, [1, 2], 5 > 4, [1, 2, 4], 5 < 7, [1, 2, 4, 5], [1, 2, 4, 5, 7]
*/

/* mergeSort(a) {
  if(a.length === 0) {
    return
  }
  /*breakdown of arrays
  if(a.length % 2 === 0) {
    mergeSort(a = a.slice([a.length / 2])
  }
  if(a.length % 2 === 1) {
    mergeSort(a = a.slice([a.length + 1 / 2]))
  }
  /*rebuilding
  let b = a[x][y]
  let c = a[x][z]
  let x = 0
  let y = 0
  if(b.value < c.value) {
    mergeSort(a[x + 1])
  }
  if(c.value < b.value) {
    mergeSort(a.splice(x, 2, y, z))
    x + 1
  }
  if(c.value === null) {
    mergeSort()
  }
}
*/
