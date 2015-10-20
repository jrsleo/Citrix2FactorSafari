describe("Challenge question", function() {

  beforeEach(function() {  
  });

  it("has a value", function() {
    var label = parse();

    expect(label).toBeDefined();
  });

  it("has the value of test", function() {
  	var label = parse();

  	expect(label).toEqual("test");
  });

});