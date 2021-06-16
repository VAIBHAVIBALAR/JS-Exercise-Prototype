/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
 Person.prototype.eat = function(edible){
   if(this.stomach.length <= 10){
     this.stomach.push(edible);
   }
 }
 
 Person.prototype.poop = function(){
   this.stomach = [];
 }
 Person.prototype.toString = function(){
   return `${this.name}, ${this.age}`
 }
 
 const vai = new Person('vai', 25);
 console.log(vai)
 console.log(vai.eat('pizza'));
 console.log(vai.eat('pasta'));
 console.log(vai.eat('salad'));
 console.log(vai.eat('spagetti'));
 console.log(vai.eat('BBQ'));
 console.log(vai.eat('cheese'));
 console.log(vai.eat('fruits'));

 console.log(vai.stomach);
 vai.poop();

  
  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model , milesPerGallon)
  {
   
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;

  }

  Car.prototype.fill = function(gallons)
  {
    this.tank = this.tank + gallons;
  }

  Car.prototype.drive = function(distance)
  {
   if(distance > 0 && this.tank !== 0)
   {
    this.odometer++;
    this.tank = this.tank - this.milesPerGallon;
    console.log(this.odometer);
    console.log(this.tank);
   }else if(distance > 0 && this.tank == 0)
   {
     return  `I ran out of fuel at ${this.odometer} miles`;
   }
   
  }
   
  const suzuki = new Car('Flat', '100');
  console.log(suzuki);
  console.log(suzuki.fill(0));
  console.log(suzuki.drive(400));

  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) 
 {
   Person.call(this, name, age);
   this.favoriteToy = favoriteToy;
   
  }

  Baby.prototype = Object.create(Person.prototype);

  Baby.prototype.play = function()
  {
    return `"Playing with ${this.favoriteToy}", ${this.favoriteToy} being the favorite toy. `
  }
 const harry = new Baby('harry', 2, 'softtoy' );
 console.log(harry);
 console.log(harry.play());
 console.log(harry.eat('granola'));
 console.log(harry.eat('plums'));
 console.log(harry.eat('carrot'));
 console.log(harry.eat('cheese'));
 console.log(harry.eat('cake'));
 console.log(harry.stomach);


  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:

    1. Global binding- suppose we have a function in the global context and 
    when we try to console.log this keyword we get the result as window or console object. 
    Its not considered a good practice to use Global binding

    2.Implicit Binding- Here we have object with context. So whenever a function
     is called by a preceding dot, the object left of the dot gets this

    3.New binding - We construct a new object using the new keyword and when a function
     is invoked as a constructor function 'this' points to the newly created object.

    4.Explicit binding- It mainly includes the call, apply and bind. Through call it
     immediately invokes the function , we pass in arguments 1 by 1, through apply it  
     immediately invokes the function , we pass arguments as an array, bind does not 
     immediately invoke the function, instead it returns a brand new function that can be invoked later,
     we pass in the arguments 1 by 1
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}