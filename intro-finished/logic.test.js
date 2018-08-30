const { add, updateQuantity, getData } = require('./logic');

describe('Test Add Function', () => {
  test('2 + 2 should be 4', () => {
    expect(add(2, 2)).toBe(4);
  });

  test('3 + 4 should be 7', () => {
    expect(add(3, 4)).toBe(7);
  });

  test('answer is defined', () => {
    expect(add).toBeDefined();
  });

  test('.1 + .2 should be .3', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('if given not a number should error', () => {
    expect(() => add('a', 0.2)).toThrowError();
  });
});

describe('tests updating quantity on an object', () => {
  let obj = { qty: 0, product: 'Bob Painting set' };

  beforeEach(() => {
    obj = { qty: 0, product: 'Bob Painting set' };
  });

  test('adds one and makes quantity 2', () => {
    expect(updateQuantity(obj)).toMatchObject({ qty: 1 });
  });

  test('has all properties', () => {
    expect(updateQuantity(obj)).toEqual({ qty: 1, product: 'Bob Painting set' });
  });

  test('does not modify original object', () => {
    expect(updateQuantity(obj)).not.toEqual(obj);
  });
});

describe('can do async tests', () => {
  test('can get data from server', () => {
    return getData().then(res => {
      expect(res.data.name).toBe('Luke Skywalker');
    });
  });
  test('gets 200 in response', () => {
    return getData().then(res => {
      expect(res.status).toBe(200);
    });
  });
});
