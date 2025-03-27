export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    if (trueOrFalse) {
        // Using block-scoped variables to avoid redeclaration issues
        let task = true; // This is scoped to the if block
        let task2 = false; // This is scoped to the if block
    }

    return [task, task2];
}