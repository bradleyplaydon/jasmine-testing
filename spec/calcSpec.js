describe("Calculator", function() {
  beforeEach(function(){
     calc = new Calculator;
  });
  describe("Addition tests", function(){
    it("should return 42", function(){
      calc.add(22);
      calc.add(20);
      expect(calc.value).toBe(42);
    });
    it("should return 26", function(){
      calc.add(7);
      calc.add(19);
      expect(calc.value).toBe(26);
    });
    it("should return an error if we don't supply two numbers", function(){
       spyOn(window, "alert");
       calc.add("Hitchhikers");
       expect(window.alert).toHaveBeenCalledWith("Error!");
    });
  });
  describe("Subtraction tests", function(){
    it("Should return 5", function(){
      calc.subtract(10, 5);
      expect(calc.value).toBe(5);
    });
    it("Should return 15", function(){
      calc.subtract(20, 5);
      expect(calc.value).toBe(15);
    });
    it("Should return an error if we don't supply two numbers", function(){
      spyOn(window, "alert");
      calc.subtract(1);
      expect(window.alert).toHaveBeenCalledWith("Error!");
    });
  });
});
