// Each function returns a car object according to the car type.
// E.g. If the type is 'Electric', then 'getElectricCar()' will return an Electric Car object.

// Each car type has parts and properties which are common to all types.
// They also have unique parts and properties of their own.
// E.g. Electric car has battery charging time but others might don't have that property.

// Therefore, the relevant function is responsible for creating and passing all those data.

export const getElectricCar = () => {
  return {
    type: "electric",
    label: "Electric Car",
    maxSpeed: 50, // Common property
    chargingTime: "100 minutes", // Unique part or property
  };
};

export const getTwoWheelsCar = () => {
  return {
    type: "twoWheels",
    label: "2 Wheels Car",
    maxSpeed: 35, // Common Property
    carPart: "an unique part", // Unique part or property
  };
};

export const getSportCar = () => {
  return {
    type: "sport",
    label: "Sport Car",
    maxSpeed: 250, // Common Property
    sportPart: "name of the part", // Unique part or property
  };
};

/*
  This function is added to show the extensibility
  Whenever a new car type is introduced, a new function needs to add following the same pattern.
  E.g. The new car type is hybrid, so getHybridCar will return a hybrid car object.
*/

export const getHybridCar = () => {
  return {
    type: "hybrid",
    label: "Hybrid Car",
    maxSpeed: 80, // Common Property
    batteryLife: "5 yrs", // Unique part or property
  };
};
