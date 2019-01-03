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
  if (n < 3){
    return [0,1].slice(0, n);
  }

  let res = fibonacci(n-1);
  res.push(res[res.length - 1] + res[res.length - 2]);
  
  return res;
}

function deepdup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }

  return arr.map((ele) => {
    return deepdup(ele);
  });
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  const mid = Math.floor(arr.length / 2);
  const midEle = arr[mid];

  if (target === midEle) {
    return mid;
  } else if (target < midEle) {
    const left = arr.slice(0, mid);
    return bsearch(left, target);
  } else {
    const right = arr.slice(mid + 1);
    const res = bsearch(right, target);
  }

  return res === -1 ? -1 : res + (mid + 1);
}

function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  } else { 
    const mid = Math.floor(arr.length / 2);

    const left = mergesort(arr.slice(0, mid));
    const right = mergesort(arr.slice(mid));

    return merge(left, right);
  }
}

function merge(left, right) {
  const res = [];

  while (left.length > 0 && right.length > 0) {
    let ele = (left[0] < right[0] ? left.shift() : right.shift());
    res.push(ele);
  }

  return res.concat(left, right);
}

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  const first = arr[0];
  const rest = subsets(arr.slice(1));

  const merged = rest.map(subset => [first].concat(subset));

  return res.concat(merged);
}