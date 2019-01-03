function range(start, end) {
  if (start === end) {
    return [];
  }

  let res = range(start, end - 1);
  res.push(end-1);
  return res;
}

function sumRec(arr) {
  if (arr.length === 0){
    return 0;
  }

  let last = arr[arr.length-1];
  return sumRec(arr.slice(0, arr.length-1)) + last;
}

function exp1(base, exp) {
  return exp === 0 ? 1 : (base * exp1(base, exp - 1 ));
}

function exp2(base, exp) {
  if (exp === 0){
    return 1;
  }

  if (exp % 2 === 0) {
    let res = exp2(base, exp / 2);
    return res * res;
  } else {
    let res = exp2(base, ((exp - 1) / 2));
    return res * res * base;
  }
}

function fibonacci(n) {
  
}

function deepdup(arr) {

}

function bsearch(arr, target) {

}

function mergesort(arr) {

}

function subsets(arr) {

}