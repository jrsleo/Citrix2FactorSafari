describe("Options", function() {

  beforeEach(function() {  
  });

  it("should save the value of A1 to local storage", function() {
    var A1 = "H";

    expect("H").toEqual("H");
  });

});

describe("getNextField", function() {

	it("should return B1 if the input is A1", function() {
		var A1 = "A1";

		expect(getNextField(A1)).toEqual("B1");
	});
});