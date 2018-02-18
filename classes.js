// function Automobile(wheels){
//     this.wheels = wheels
//     this.setColor
// }



// function Sedan(model, year, make){
//     this.model = model
//     this.year = year
//     this.make = make
//     this.doors = 4
    

    

// }
// function Camry(){

// }
// Sedan.prototype = new Automobile(4)


// Camry.prototype = new Sedan(`Toyota`, `Camry`, 'year')

// let camry = new Camry()

// console.log(camry.doors)
// console.log(camry.wheels)
// camry.year = 2010
// console.log(camry.year)
class Automobile{
    constructor(wheels){
        this.wheels = wheels
        this.color = null
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
}


class Motorcycle extends Automobile {
    constructor(make, model,year){
        super(2)
        this.make = make
        this.model = model
        this.year = year

        
    }
}

const motorcycle = new Motorcycle()

class Sedan extends Automobile{
    constructor(doors){
        this.doors = doors
    }
}


class Maybach{
    constructor(make, model, year){
        super(4)
        this.make = make
        this.model = model
        this.year = year
    }
    
}

const MyNewCar = new Maybach(`Mercedes`, `maybach`, `2018`)