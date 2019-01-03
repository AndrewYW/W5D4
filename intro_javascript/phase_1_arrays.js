Array.prototype.uniq = function() {
  let uniques = [];
  this.forEach(function (ele){
    if (!uniqueArray.includes(el)) {
      uniques.push(ele);
    }
  });
  return uniques;
};

Array.prototype.twoSum = function() {
  const match = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        match.push([i, j]);
      }
    }
  }

  return match;
};

Array.prototype.transpose = function() {
  const columns = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length })
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j][i] = this[i][j];
    }
  }

  return columns;
};
