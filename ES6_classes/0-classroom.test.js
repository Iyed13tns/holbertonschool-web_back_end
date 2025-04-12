import ClassRoom from './0-classroom';

// 0-classroom.test.js

describe('ClassRoom', () => {
    test('should correctly set maxStudentsSize when instantiated', () => {
        const maxStudentsSize = 30;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });

test('should throw an error if maxStudentsSize is not provided', () => {
  expect(() => new ClassRoom()).toThrow();
});

test('should throw an error if maxStudentsSize is not a number', () => {
  expect(() => new ClassRoom('30')).toThrow();
  expect(() => new ClassRoom(null)).toThrow();
  expect(() => new ClassRoom(undefined)).toThrow();
});

test('should correctly handle a maxStudentsSize of 0', () => {
  const classroom = new ClassRoom(0);
  expect(classroom._maxStudentsSize).toBe(0);
});

test('should correctly handle a negative maxStudentsSize', () => {
  const classroom = new ClassRoom(-5);
  expect(classroom._maxStudentsSize).toBe(-5);
});

test('should correctly handle a large maxStudentsSize', () => {
  const classroom = new ClassRoom(1000);
  expect(classroom._maxStudentsSize).toBe(1000);
});
    test('should handle a maxStudentsSize of 0', () => {
        const maxStudentsSize = 0;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });

    test('should handle a large maxStudentsSize', () => {
        const maxStudentsSize = 1000;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });

    test('should handle a negative maxStudentsSize', () => {
        const maxStudentsSize = -10;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });
});
