import calculate from '../calculate';
import DataObject from '../../objects/DataObject';

describe('Pressing AC resets everything', () => {
  test('resets everything', () => {
    const expected = new DataObject();

    const result = calculate(expected, 'AC');

    expect(result).toEqual(expected);
  });
});

describe('Pressing a number', () => {
  describe('creates new number when there is no previous digit', () => {
    test('when no operation has been specified yet', () => {
      const dataObject = new DataObject();
      const expected = new DataObject(null, '3', null);

      const result = { ...dataObject, ...calculate(dataObject, '3') };

      expect(result).toEqual(expected);
    });

    test('when an operation has already been specified', () => {
      const dataObject = new DataObject('50', null, '/');
      const expected = new DataObject('50', '1', '/');

      const result = { ...dataObject, ...calculate(dataObject, '1') };

      expect(result).toEqual(expected);
    });
  });

  describe('concatenates with previous digit(s)', () => {
    test('when no operation has been specified yet', () => {
      const dataObject = new DataObject(null, '3', null);
      const expected = new DataObject(null, '31', null);

      const result = { ...dataObject, ...calculate(dataObject, '1') };

      expect(result).toEqual(expected);
    });

    test('when an operation has already been specified', () => {
      const dataObject = new DataObject('50', '3', 'x');
      const expected = new DataObject('50', '32', 'x');

      const result = { ...dataObject, ...calculate(dataObject, '2') };

      expect(result).toEqual(expected);
    });
  });
});

describe('Pressing an operation updates the operation and sets the total', () => {
  test('when no operation has been specified yet', () => {
    const dataObject = new DataObject(null, '91', null);
    const expected = new DataObject('91', null, '/');

    const result = { ...dataObject, ...calculate(dataObject, '/') };

    expect(result).toEqual(expected);
  });

  describe('when an operation has already been specified', () => {
    test('when second operand has not been entered yet', () => {
      const dataObject = new DataObject('88', null, '-');
      const expected = new DataObject('88', null, '-');

      const result = { ...dataObject, ...calculate(dataObject, '-') };

      expect(result).toEqual(expected);
    });

    test('when second operand has already been entred', () => {
      const dataObject = new DataObject('20', '4', '/');
      const expected = new DataObject('5', null, '+');

      const result = { ...dataObject, ...calculate(dataObject, '+') };

      expect(result).toEqual(expected);
    });
  });
});

describe('Pressing equal', () => {
  describe('does nothing if either operation or second operand is missing', () => {
    test('when an operation has not been specified yet but a second operand has been entered', () => {
      const dataObject = new DataObject(null, '91', null);
      const expected = new DataObject(null, '91', null);

      const result = { ...dataObject, ...calculate(dataObject, '=') };

      expect(result).toEqual(expected);
    });

    test('when a second operand has not been entered yet', () => {
      const dataObject = new DataObject('87', null, '/');
      const expected = new DataObject('87', null, '/');

      const result = { ...dataObject, ...calculate(dataObject, '=') };

      expect(result).toEqual(expected);
    });
  });

  test('applies operation', () => {
    const dataObject = new DataObject('6', '80', '+');
    const expected = new DataObject('86', null, null);

    const result = { ...dataObject, ...calculate(dataObject, '=') };

    expect(result).toEqual(expected);
  });
});

describe('Pressing +/-', () => {
  test('does nothing when nothing has been entered yet', () => {
    const dataObject = new DataObject(null, null, null);
    const expected = new DataObject(null, null, null);

    const result = { ...dataObject, ...calculate(dataObject, '+/-') };

    expect(result).toEqual(expected);
  });

  test('changes the sign of the latest operand', () => {
    const dataObject = new DataObject('10', '-3', null);
    const expected = new DataObject('10', '3', null);

    const result = { ...dataObject, ...calculate(dataObject, '+/-') };

    expect(result).toEqual(expected);
  });

  test('changes the sign of total if there is no operand', () => {
    const dataObject = new DataObject('33', null, null);
    const expected = new DataObject('-33', null, null);

    const result = { ...dataObject, ...calculate(dataObject, '+/-') };

    expect(result).toEqual(expected);
  });
});

describe('Pressing decimal', () => {
  describe('adds decimal when latest displayed section has no decimal yet', () => {
    test('when it is the initial 0', () => {
      const dataObject = new DataObject(null, null, null);
      const expected = new DataObject('0.', null, null);

      const result = { ...dataObject, ...calculate(dataObject, '.') };

      expect(result).toEqual(expected);
    });

    test('when it is a total', () => {
      const dataObject = new DataObject('9', null, null);
      const expected = new DataObject('9.', null, null);

      const result = { ...dataObject, ...calculate(dataObject, '.') };

      expect(result).toEqual(expected);
    });

    test('when it is an operand', () => {
      const dataObject = new DataObject('80', '3', '+');
      const expected = new DataObject('80', '3.', '+');

      const result = { ...dataObject, ...calculate(dataObject, '.') };

      expect(result).toEqual(expected);
    });

    test('when it is an operation', () => {
      const dataObject = new DataObject('71', null, '+');
      const expected = new DataObject('71', '0.', '+');

      const result = { ...dataObject, ...calculate(dataObject, '.') };

      expect(result).toEqual(expected);
    });
  });

  describe('does not add decimal when latest displayed number already has decimal', () => {
    test('when it is a total', () => {
      const dataObject = new DataObject('10.2', null, null);
      const expected = new DataObject('10.2', null, null);

      const result = { ...dataObject, ...calculate(dataObject, '.') };

      expect(result).toEqual(expected);
    });

    test('when it is an operand', () => {
      const dataObject = new DataObject(null, '30.4', null);
      const expected = new DataObject(null, '30.4', null);

      const result = { ...dataObject, ...calculate(dataObject, '.') };

      expect(result).toEqual(expected);
    });
  });
});
