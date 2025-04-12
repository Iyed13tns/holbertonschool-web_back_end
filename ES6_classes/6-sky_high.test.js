import SkyHighBuilding from './6-sky_high.js';

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

    test('should return the correct number of floors using the floors getter', () => {
        const building = new SkyHighBuilding(1000, 15);
        expect(building.floors).toBe(15);
    });

    test('should return the correct evacuation warning message', () => {
        const building = new SkyHighBuilding(1000, 20);
        expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 20 floors');
    });
});