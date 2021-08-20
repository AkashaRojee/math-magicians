import operate from '../../logic/operate';

describe('Basic operations acceptable', () => {
  const numberOne = 8;
  const numberTwo = 4;

  test('adds two numbers', () => {
    const result = operate(numberOne, numberTwo, '+');
    expect(result).toBe('12');
  });

  test('subtracts numberTwo from numberOne', () => {
    const result = operate(numberOne, numberTwo, '-');
    expect(result).toBe('4');
  });

  test('multiplies two numbers', () => {
    const result = operate(numberOne, numberTwo, 'x');
    expect(result).toBe('32');
  });

  test('performs division given a divisor and a divinded', () => {
    const result = operate(numberOne, numberTwo, '/');
    expect(result).toBe('2');
  });

  test('performs modulo operation given a divisor and a divinded', () => {
    const result = operate(numberOne, numberTwo, '%');
    expect(result).toBe('0');
  });
});

describe('Non acceptable operations', () => {
  const numberOne = 8;
  const numberTwo = 4;
  test('do not support * as an operation', () => {
    const unsupportedOperation = () => operate(numberOne, numberTwo, '*');
    expect(() => unsupportedOperation()).toThrow("Unknown operation '*'");
  });

  test('do not support ÷ as an operation', () => {
    const unsupportedOperation = () => operate(numberOne, numberTwo, '÷');
    expect(() => unsupportedOperation()).toThrow("Unknown operation '÷'");
  });
});

describe('Working with negative numbers', () => {
  const numberOne = -8;
  const numberTwo = 4;
  test('returns correct value when adding a possitive integer to a negative integer', () => {
    const result = operate(numberOne, numberTwo, '+');
    expect(result).toBe('-4');
  });

  test('returns correct value when subtracting a negative integer from a positive integer', () => {
    const result = operate(numberTwo, numberOne, '-');
    expect(result).toBe('12');
  });
});

describe('Division by zero', () => {
  const numberOne = 8;
  const numberTwo = 0;
  test('returns correct value when adding a possitive integer to a negative integer', () => {
    const result = operate(numberOne, numberTwo, '/');
    expect(result).toBe('Undefined');
  });
});
