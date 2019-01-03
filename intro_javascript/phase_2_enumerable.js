
Array.prototype.myEach = function(func) {
  for(let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

Array.prototype.myMap = function(func) {
  const result = []

  this.myEach(ele => result.push(func(ele)));

  return result;
};

Array.prototype.myReduce = function(func, ini) {
  let arr = this;

  if (ini === undefined) {
    ini = arr[0];
    arr = arr.slice(1);
  }

  let res = ini;
  arr.myEach(ele => res = func(res, ele));

  return res;
}