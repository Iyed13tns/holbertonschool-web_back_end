import ClassRoom from './0-classroom';

// 0-classroom.test.js

describe('ClassRoom', () => {
    test('should correctly set maxStudentsSize when instantiated', () => {
        const maxStudentsSize = 30;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });
});
