const assert = (description, condition) => {
    if (!condition) throw new Error(`Test failed: ${description}`);
    console.log(`Test passed: ${description}`);
};

// Manual Test Cases for Sample Functions
const sum = (a, b) => a + b;
const isPositive = (num) => num > 0;

// Test Cases
assert("sum(2, 3) should be 5", sum(2, 3) === 5);
assert("sum(-2, -3) should be -5", sum(-2, -3) === -5);
assert("isPositive(5) should be true", isPositive(5) === true);
assert("isPositive(-5) should be false", isPositive(-5) === false);
