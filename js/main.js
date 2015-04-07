// defining 'car' OBJECT with some PROPERTIES

var car = {
	brand: "Prius",
	wheels: 4,
	year: 2010
};

console.log(car.brand);





// defining 'beer' OBJECT with some PROPERTIES
var beer = {
	brand: "Bud light",
	bottle: "Glass",
	flavor: "Light",
	number: 6
};

console.log(beer.brand);







//literal method of 'user' object
var user = {
	firstname: "Marcie",
	lastname: "Van Auken",
	age: 27,
	profession: "Graphic designer"
};

console.log(user.profession);


//constructor method of 'user' object above
function User(firstname,lastname,age,profession) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.profession = profession;
}

var marcie = new User("Marcie", "Van Auken", 27, "Graphic Designer");
var elyse = new User("Elyse", "Van Auken", 27, "nanny");
var laura = new User("Laura", "Lacy", 25, "barista");

console.log(marcie.age);
console.log(elyse.lastname);
console.log(laura.profession);





//another constructor example
function Car(brand,year,mileage) {
	this.brand = brand;
	this.year = year;
	this.mileage = mileage
}

var honda = new Car("honda", "2010", "100mph");
var toyota = new Car("toyota", "2013", "80mph");

console.log(honda.year);
console.log(toyota.mileage);






//constructor object 'person' with function -- I wanted it to print out "Carols profession is a librarian - Welcome Carol!" but it is printing out "Carol's profession is a 50-Welcome librarian!"
function Person(gender,age,profession,fname) {
	this.fname = fname;
	this.gender = gender;
	this.age = age;
	this.profession = profession;
}

var carol = new Person("Carol", "female", 50, "librarian");
// console.log(carol.age); - testing to see if above is working... it does!

Person.prototype.profInfo = function() {
	return "Carol's profession is a " + this.profession + "-";
}

Person.prototype.greeting = function() {
	return "Welcome " + this.fname;
}

console.log((carol).profInfo() + (carol).greeting() + "!");






