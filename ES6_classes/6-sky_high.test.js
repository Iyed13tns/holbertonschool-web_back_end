import SkyHighBuilding from './6-sky_high';

// 6-sky_high.test.js

describe('SkyHighBuilding', () => {
  test('should correctly set sqft and floors when instantiated', () => {
    const building = new SkyHighBuilding(2000, 10);
    expect(building.sqft).toBe(2000);
    expect(building.floors).toBe(10);
  });

  test('should correctly return floors using the getter', () => {
    const building = new SkyHighBuilding(1500, 5);
    expect(building.floors).toBe(5);
  });

  test('should return the correct evacuation warning message', () => {
    const building = new SkyHighBuilding(3000, 20);
    expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 20 floors');
  });

  test('should throw an error if sqft is not provided', () => {
    expect(() => new SkyHighBuilding()).toThrow();
  });

  test('should throw an error if floors is not provided', () => {
    expect(() => new SkyHighBuilding(1000)).toThrow();
  });
});