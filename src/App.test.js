import { getCar } from "./App";

describe("Get car object function", () => {
  test("it should get the correct car object when valid car type passes to function", () => {
    const output = {
      type: "electric",
      label: "Electric Car",
      maxSpeed: 50,
      chargingTime: "100 minutes",
    };

    expect(getCar("electric")).toEqual(output);
  });

  test("it should not get the wrong the car object when valid car type passes to function", () => {
    const output = {
      type: "hybrid",
      label: "Hybrid Car",
      maxSpeed: 80,
      batteryLife: "5 yrs",
    };

    expect(getCar("electric")).not.toEqual(output);
  });

  test("it should return null when invalid car type passes to function", () => {
    expect(getCar("manual")).toEqual(null);
  });

  test("it should return null when empty car type passes to function", () => {
    expect(getCar()).toEqual(null);
  });
});
