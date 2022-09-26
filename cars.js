class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // method named information
    information(){
        // console commands for the output
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
}

// let myVehicle = new Vehicle('VW', 'Golf', 2022);
// myVehicle.information();

// car class will inherit data from Vehicle class
class Car extends Vehicle{
    constructor(make, model, year, doors){
        // this is super class
        super(make, model, year);
        this.doors = doors;
    }
    information(){
        super.information();
        console.log(`Doors: ${this.doors}.`)
    }
}

let myCar = new Car ('VW', 'Golf', 2010, 5);
myCar.information();