import {
  deepMergeObjects,
  filterObject,
  getArrayOfObjectKeys,
  getArrayOfReadableObjectKeys,
  makeInheritanceObject,
  overrideMergeObjects
} from './objectHelpers';

describe('DeepMergeObjects', () => {
  it('should merge root level properties as well as nested ones', () => {
    const baseObject = { a: { a1: 'A1' }, c: 'C' };
    const overrideObject = { a: { a2: 'A2' }, b: { b1: 'B1' } };
    const expectedObject = {
      a: { a1: 'A1', a2: 'A2' }, b: { b1: 'B1' }, c: 'C'
    };
    expect(deepMergeObjects({
      baseObject, overrideObject
    })).toEqual(expectedObject);
  });

  it('should merge array values, not just override', () => {
    const baseObject = { a: ['A', 'B'] };
    const overrideObject = { a: ['C'], b: ['D'] };
    const expectedObject = { a: ['A', 'B', 'C'], b: ['D'] };
    expect(deepMergeObjects({
      baseObject, overrideObject
    })).toEqual(expectedObject);
  });
});

describe('OverrideMergeObjects', () => {
  it('should merge root level properties as well as nested ones', () => {
    const baseObject = { a: { a1: 'A1' }, c: 'C', d: {} };
    const overrideObject = { a: { a2: 'A2' }, b: { b1: 'B1' } };
    const expectedObject = {
      a: { a1: 'A1', a2: 'A2' }, b: { b1: 'B1' }, c: 'C', d: {}
    };
    expect(overrideMergeObjects({
      baseObject, overrideObject
    })).toEqual(expectedObject);
  });

  it('should add properties that are undefined in an override', () => {
    const baseObject = { a: { a1: 'A1' }, c: 'C' };
    const overrideObject = { b: { b1: 'B1' } };
    const expectedObject = { a: { a1: 'A1' }, b: { b1: 'B1' }, c: 'C' };
    expect(overrideMergeObjects({
      baseObject, overrideObject
    })).toEqual(expectedObject);
  });

  it('should not merge array values, just override', () => {
    const baseObject = { a: ['A', 'B'] };
    const overrideObject = { a: ['C'], b: ['D'] };
    const expectedObject = { a: ['C'], b: ['D'] };
    expect(overrideMergeObjects({
      baseObject, overrideObject
    })).toEqual(expectedObject);
  });
});

describe('MakeInheritanceObject', () => {
  describe('Creates a simplfied object that uses spreaders to inherit from the first and only overrides unique properties for the second', () => {
    it('Returns an empty object that spreads the base if the two objects are the same', () => {
      const base = {
        a: 1,
        b: '2',
        c: true
      };
      const compare = {
        a: 1,
        b: '2',
        c: true
      };

      const output = makeInheritanceObject({ base, compare, baseObjectName: 'base' });

      expect(JSON.stringify(output)).toEqual('"{...base}"');
    });

    it('Returns an empty object with no spreader if valueOnly is set to true and the two objects are the same', () => {
      const base = {
        a: 1,
        b: '2',
        c: true
      };
      const compare = {
        a: 1,
        b: '2',
        c: true
      };

      const output = makeInheritanceObject({
        base, compare, baseObjectName: 'base', valueOnly: true
      });

      expect(JSON.stringify(output)).toEqual('"{}"');
    });

    it('Handles boolean values', () => {
      const base1 = {
        a: false,
        b: true
      };
      const compare1 = {
        a: false,
        b: true
      };
      const compare2 = {
        a: true,
        b: false
      };

      const output1 = makeInheritanceObject({ base: base1, compare: compare1, baseObjectName: 'base1' });
      const output2 = makeInheritanceObject({ base: base1, compare: compare2, baseObjectName: 'base1' });

      expect(JSON.stringify(output1)).toEqual('"{...base1}"');
      expect(JSON.stringify(output2)).toEqual('"{...base1, a:true, b:false}"');
    });

    it('Only returns properties and values that are unique to the compare', () => {
      const base = {
        a: 1,
        b: '2',
        c: true
      };
      const compare = {
        d: 'test'
      };

      const output = makeInheritanceObject({ base, compare, baseObjectName: 'base' });

      expect(output).toEqual('{...base, d:"test"}');
    });

    it('Converts complex objects', () => {
      const base = {
        a: 1,
        b: '2',
        c: true,
        innerObj: {
          a: 1,
          b: '2',
          c: true
        }
      };
      const compare = {
        d: 'test',
        innerObj: {
          d: 'test'
        }
      };

      const output = makeInheritanceObject({ base, compare, baseObjectName: 'base' });

      expect(output).toEqual('{...base, d:"test", innerObj:{...base.innerObj, d:"test"}}');
    });

    it('Converts extra complex objects', () => {
      const base = {
        a: 1,
        b: '2',
        c: true,
        innerObj: {
          a: 1,
          b: '2',
          c: true
        }
      };
      const compare = {
        b: '2',
        d: 'test',
        innerObj: {
          a: 1,
          e: 'test',
          innerObj2: {
            a: 1,
            f: 'test2'
          }
        }
      };

      const output = makeInheritanceObject({ base, compare, baseObjectName: 'base' });

      expect(output).toEqual('{...base, d:"test", innerObj:{...base.innerObj, e:"test", innerObj2:{"a":1,"f":"test2"}}}');
    });
  });
});

describe('FilterObject', () => {
  it('Iterates across all levels of a JSON object trimming anything that does not contain a match', () => {
    const testObj = {
      a: { a1: 'A1', a2: 'A2' }, b: { b1: 'B1' }, c: 'C', d: {}
    };

    const expectedResult = {
      c: 'C'
    };

    const testResult = filterObject(testObj, { search: 'C' });
    expect(testResult).toEqual(expectedResult);
  });

  it('Can find and filter deeply nested matches', () => {
    const testObj = {
      a: { a1: 'A1', a2: 'A2' }, b: { b1: 'B1' }, c: 'C', d: { e: { f: { g: 'G' } } }, e: { g: 'G' }, f: {}, g: 'G'
    };

    const expectedResult = {
      d: {
        e: {
          f: {
            g: 'G'
          }
        }
      },
      e: {
        g: 'G'
      },
      g: 'G'
    };

    const testResult = filterObject(testObj, { search: 'G' });
    expect(testResult).toEqual(expectedResult);
  });

  it('Can find number matches', () => {
    const testObj = {
      a: { a1: 1, a2: 2 }, b: { b1: 1 }, c: 1, d: { e: { f: { g: 5 } } }, e: { g: 5 }, f: {}, g: 5
    };

    const expectedResult = {
      d: {
        e: {
          f: {
            g: 5
          }
        }
      },
      e: {
        g: 5
      },
      g: 5
    };

    const testResult = filterObject(testObj, { search: 5 });
    expect(testResult).toEqual(expectedResult);
  });

  it('Can find key value matches', () => {
    const testObj = {
      a: { a1: 1, a2: 2 }, b: { b1: 1 }, c: 1, d: { e: { f: { g: 5 } } }, e: { g: 5 }, f: {}, g: 5
    };

    const expectedResult = {
      b: { b1: 1 }
    };

    const testResult = filterObject(testObj, { search: { b1: 1 } });
    expect(testResult).toEqual(expectedResult);
  });

  it('Can find nested key value matches', () => {
    const testObj = {
      a: { a1: 1, a2: 2 }, b: { b1: 1 }, c: 1, d: { e: { f: { b1: 1, g: 5 } } }, e: { g: 5, b1: 1 }, f: {}, g: 5
    };

    const expectedResult = {
      b: {
        b1: 1
      },
      d: {
        e: {
          f: {
            b1: 1
          }
        }
      },
      e: {
        b1: 1
      }
    };

    const testResult = filterObject(testObj, { search: { b1: 1 } });
    expect(testResult).toEqual(expectedResult);
  });

  it('Returns false if there are no matches', () => {
    const testObj = {
      a: { a1: 1, a2: 2 }, b: { b1: 1 }, c: 1, d: { e: { f: { b1: 1, g: 5 } } }, e: { g: 5, b1: 1 }, f: {}, g: 5
    };

    const expectedResult = false;

    const testResult = filterObject(testObj, { search: 'fred' });
    expect(testResult).toEqual(expectedResult);
  });
});

describe('GetArrayOfObjectKeys', () => {
  it('Creates a string array of all the keys including the nested ones from a JSON object', () => {
    const testObj = {
      fredFlinstone: {
        partner: 'Wilma',
        friend: 'Barney'
      },
      wilmaFlinstone: {
        partner: 'Fred',
        friend: 'Betty'
      },
      bettyRubble: {
        partner: 'Barney',
        friend: 'Wilma'
      },
      barneyRubble: {
        partner: 'Betty',
        friend: 'Fred'
      }
    };

    expect(getArrayOfObjectKeys(testObj)).toEqual(
      [
        'fredFlinstone',
        'partner',
        'friend',
        'wilmaFlinstone',
        'bettyRubble',
        'barneyRubble'
      ]
    );
  });
});

describe('GetArrayOfReadableObjectKeys', () => {
  it('Creates a readable string array of all the keys including the nested ones from a JSON object', () => {
    const testObj = {
      fredFlinstone: {
        partner: 'Wilma',
        friend: 'Barney'
      },
      wilmaFlinstone: {
        partner: 'Fred',
        friend: 'Betty'
      },
      bettyRubble: {
        partner: 'Barney',
        friend: 'Wilma'
      },
      barneyRubble: {
        partner: 'Betty',
        friend: 'Fred'
      }
    };

    expect(getArrayOfReadableObjectKeys(testObj)).toEqual(
      [
        'fred flinstone',
        'partner',
        'friend',
        'wilma flinstone',
        'betty rubble',
        'barney rubble'
      ]
    );
  });
});
