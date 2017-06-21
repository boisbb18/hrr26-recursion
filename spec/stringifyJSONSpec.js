// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      console.log( stringifiableObjects);
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
     // console.log('Expected 1 -> ',test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      console.log("expected 2 -> ",expected);
      expect(result).to.equal(expected);
    });

  });
});
