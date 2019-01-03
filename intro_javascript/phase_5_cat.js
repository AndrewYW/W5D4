function Cat (name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return '${this.owner} loves ${this.name}';
};

Cat.prototype.cuteStatement = function() {
  return 'Everyone lives ${this.name}';
};

Cat.prototype.meow = function() {
  return 'meow';
};


const cat1 = new Cat("Bob", "Bib");
const cat2 = new Cat("Ted", "Tod");

cat1.meow = function() {
  return 'purr';
}

console.log(cat1.meow);
console.log(cat2.meow);
