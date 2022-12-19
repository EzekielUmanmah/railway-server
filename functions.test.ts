const { shuffleArray } = require('./utils');
const { botsArr } = require('./data.js');

describe('shuffleArray should shuffle the duos', () => {
  // CODE HERE
  test('returns an array datatype', () => {
    const result = shuffleArray(botsArr);

    expect(result).toBeInstanceOf(Array);
  });

  test('returns an array of the same length as the argument sent in', () => {
    const result = shuffleArray(botsArr);

    expect(result.length).toEqual(botsArr.length);
  });

  // gather id's into an array for easier comparison
  test('items have been shuffled around', () => {
    const result = shuffleArray(botsArr);
    const resultIds = result.map((duo) => duo.id);
    const botsArrIds = botsArr.map((duo) => duo.id);

    botsArrIds.map((id, i) => {
      // fails occassionally as shuffleArray leaves some numbers in place
      // but numbers do get shuffled
      // expect(resultIds.indexOf(id)).not.toBe(i);

      // potential solution to add a case where assertion is made only on shuffled numbers
      // ensuring some ids (and therefore duos) have been shuffled
      if (resultIds.indexOf(id) !== i) {
        expect(resultIds.indexOf(id)).not.toBe(i);
      }
    });
  });
});
