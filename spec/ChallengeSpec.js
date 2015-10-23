describe("Parse function", function() {
	var label = "";

  beforeEach(function() {  
  	label = "  Enter a response to the grid challenge [B5] [D2] [F1] [H4] [J3] using a card with serial number 9872934876."
  });

  it("returns a value", function() {
    expect(parse(label)).toBeDefined();
  });

  it("returns an array with 5 objects", function() {
  	expect(parse(label).length).toEqual(5);
  });

  it("results in array response of [B5,D2,F1,H4,J3]", function() {
    var test = parse(label);
    
    expect(test[0]).toEqual("B5");
    expect(test[1]).toEqual("D2");
    expect(test[2]).toEqual("F1");
    expect(test[3]).toEqual("H4");
    expect(test[4]).toEqual("J3");
  });
});