import SkyHighBuilding from './6-sky_high.js';

// 6-sky_high.test.js

describe('SkyHighBuilding', () => {
  test('should correctly set sqft and floors when instantiated', () => {
    const building = new SkyHighBuilding(1000, 10);
    expect(building._sqft).toBe(1000);
    expect(building._floors).toBe(10);
  });

  test('should inherit from Building', () => {
    const building = new SkyHighBuilding(1000, 10);
    expect(building instanceof SkyHighBuilding).toBe(true);
    expect(building instanceof Object.getPrototypeOf(SkyHighBuilding)).toBe(true);
  });
});