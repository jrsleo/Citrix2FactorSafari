describe("Options", function() {

  beforeEach(function() {  
  });

  it("should save the value of A1 to local storage", function() {
    var A1 = "H";

    expect(save_options()).toEqual("H");
  });

});