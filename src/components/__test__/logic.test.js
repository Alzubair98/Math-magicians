import calculate from '../../logic/calculate';
import operate from '../../logic/operate';

describe('calculate, operate Testing', () => {
  const obj = {
    total: 1,
    next: 2,
    operation: '+',
  };
  const buttonName = 'AC';

  test('check the calculate functionality', () => {
    const value = calculate(obj, buttonName);
    expect(value).toMatchObject({
      total: null,
      next: null,
      operation: null,
    });
  });

  const obj1 = {
    total: 0,
    next: 0,
    operation: '+',
  };
  const buttonName1 = '0';

  test('2nd check the calculate functionality', () => {
    const value = calculate(obj1, buttonName1);
    expect(value).toMatchObject({});
  });
  // test the operate function

  const Operation = '+';
  const numberOne = 1;
  const numberTwo = 2;

  test('testing the operate function', () => {
    const operateValue = operate(numberOne, numberTwo, Operation);

    expect(operateValue).toBe('3');
  });

  test('testing the operate function', () => {
    const operateValue = operate(5, 5, '-');

    expect(operateValue).toBe('0');
  });

  test('testing the operate function', () => {
    const operateValue = operate(5, 5, 'x');

    expect(operateValue).toBe('25');
  });

  test('testing the operate function', () => {
    const operateValue = operate(5, 5, '÷');

    expect(operateValue).toBe('1');
  });
});
