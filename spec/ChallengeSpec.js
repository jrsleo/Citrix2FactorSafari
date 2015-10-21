describe("Challenge question", function() {
	var label = "";


  beforeEach(function() {  
  	label = "  Enter a response to the grid challenge [B5] [D2] [F1] [H4] [J3] using a card with serial number 9872934876."
  });

  it("has a value", function() {
    expect(parse(label)).toBeDefined();
  });

  it("has a length of 5 objects", function() {
  	console.log(parse(label));
  	expect(parse(label).length).toEqual(5);
  });



});