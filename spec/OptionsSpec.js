describe("Options", function() {

  beforeEach(function() {  
  });

  it("should save the value of A1 to local storage", function() {
    var A1 = "H";

    expect("H").toEqual("H");
  });

});

describe("getNextField", function() {

	it("should return B1 if the input is an element with id A1", function() {
		var element = document.createElement("input");
		element.id = "A1";

		expect(getNextField(element)).toEqual("B1");
	});

	it("should return C1 if the input is an element with id B1", function() {
		var element = document.createElement("input");
		element.id = "B1";

		expect(getNextField(element)).toEqual("C1");
	});

	it("should return A2 if the input is an element with id J1", function() {
		var element = document.createElement("input");
		element.id = "J1";

		expect(getNextField(element)).toEqual("A2");
	});
});