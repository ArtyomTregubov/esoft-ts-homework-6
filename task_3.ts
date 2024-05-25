
  type Car = {
    company: string;
    model: string;
    year: number;
  };
  
  
  type Bike = {
    company: string;
    type: 'road' | 'mountain';
  };
  
  
  function isCar(vehicle: any): vehicle is Car {
    return (vehicle as Car).year !== undefined;
  }
  
  
  function printVehicleInfo(vehicle: Car | Bike) {
    if (isCar(vehicle)) {
      console.log(`Car: ${vehicle.company} ${vehicle.model} ${vehicle.year}`);
    } else {
      console.log(`Bike: ${vehicle.company} ${vehicle.type}`);
    }
  }