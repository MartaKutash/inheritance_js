//In ES6
class IntBuilder {
	constructor(integer) {
	  this.integer = integer;
	}
	get() {
	  return this.integer;
	}

	plus (...args) {
	  let res = 0;
	  for (let num of args) {
		res += num;
	  }
	  this.integer += res;
	  return this
	}

	minus (...args) {
	  let res = 0;
	  for (let num of args) {
		res += num;
	  }
	  this.integer -= res;
	  return this;
	}

	multiply(n)  {
	  this.integer *= n;
	  return this;
	}

	divide(n) {
	  this.integer /= n;
	  return this;
	}

	mod(n) {
	  this.integer %= n;
	  return this;
	}

	static random(from, to) {
		if (from > to) {
		  return "Error!"
		} else {
		  return Math.round(Math.random() * (to - from) + from);
		}
	  }
  }

  let intBuilder = new IntBuilder(0);
  console.log(intBuilder
	.plus(2, 3, 2)
	.minus(1, 2)
	.multiply(2)
	.divide(4)
	.mod(3)
	.get())
  console.log(IntBuilder.random(5, 20));

  //1st child class inherited from base

  class numBuilder_1 extends IntBuilder {
	constructor(integer, score) {
	  super(integer);
	  this.score = score;
	}
	getScore() {
	  return this.score;
	}
  }

  const numberConstructor_1 = new numBuilder_1(15, 8);
  console.log (numberConstructor_1
  .plus(2, 3, 2)
	.minus(1, 2)
	.multiply(2)
	.divide(4)
	.mod(3)
	.get())
  console.log(numberConstructor_1.getScore());


  //2nd child class inherited from base
  class numBuilder_2 extends IntBuilder {
	constructor(integer) {
	  super(integer);
	}
  }

  const numberConstructor_2 = new numBuilder_2(2);
  console.log (numberConstructor_2
  .plus(2, 3, 2)
	.minus(1, 2)
	.multiply(2)
	.divide(4)
	.mod(3)
	.get());


// In ES5
  function StringBuilder(str) {
	this.str = str;
  }

  StringBuilder.prototype.get = function() {
	return this.str;
  };

  StringBuilder.prototype.plus = function(...args) {
	for (let chars of args) {
		this.str = this.str + chars;
	}
	return this;
  };

  StringBuilder.prototype.minus = function(n) {
	this.str = this.str.slice(0, -n);
	return this;
  }

  StringBuilder.prototype.multiply = function(int) {
	this.str = this.str.repeat(int);
	return this;
  }

  StringBuilder.prototype.divide = function(n) {
	let k = Math.floor(this.str.length / n);
	this.str = this.str.slice(0, k);
	return this;
  }

  StringBuilder.prototype.remove = function(str) {
	let find = str;
	let re = new RegExp(find, 'g');
	this.str = this.str.replace(re, '');
	return this;
  }

  StringBuilder.prototype.sub = function(from, n) {
	  this.str = this.str.substr(from, n)
	return this;
  }


  let strBuilder = new StringBuilder('Hello'); // 'Hello';
  console.log(strBuilder
	.plus(' all', '!')
	.minus(4)
	.multiply(3)
	.divide(4)
	.remove('l')
	.sub(1,1)
	.get ());

	function StringBuilder_1(str, x) {
		StringBuilder.call(this, str);
		this.x = x;
	  }

	  StringBuilder_1.prototype = Object.create(StringBuilder.prototype);

	  StringBuilder_1.prototype.firstLetter = function(x) {
		this.str = this.str[x];
		return this;
	  }

	  let strBuilder_1 = new StringBuilder_1('Privet'); // 'Hello';
	  console.log(strBuilder_1
		.plus(' all', '!')
		.minus(4)
		.multiply(3)
		.divide(4)
		.remove('v')
		.sub(1,3)
		.get())
	  console.log(strBuilder_1.firstLetter(0).get());


	  function StringBuilder_2(str, name) {
		StringBuilder.call(this, str);
		this.name = name;
	  }

	  StringBuilder_2.prototype = Object.create(StringBuilder.prototype);

	  StringBuilder_2.prototype.getName = function() {
		return this.name;
	  }

	  let strBuilder_2 = new StringBuilder_2('Privet', 'Marta');
	  console.log(strBuilder_2
		.plus(' all', '!')
		.minus(4)
		.multiply(3)
		.divide(4)
		.remove('v')
		.sub(1,3)
		.get())
	  console.log(strBuilder_2.getName());
