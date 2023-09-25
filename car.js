class Car {
    constructor(options) {
      const defaultOptions = {
        fuel: 0,
        lowFuelConsumption: 0,
        durability: 0,
        speed: 0,
        name: "Unknown Car",
      };
      const newOptions = {...defaultOptions, ...options};
      return {...newOptions};
    }
  
    defaultFuel = 5;
  }
  // let civilian = new Car({fuel: 2,lowFuelConsumption: 2,durability: 2,speed:4});
  // console.log(civilian);