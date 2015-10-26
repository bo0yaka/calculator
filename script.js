var MyModule = (function() {
    
    var variables = {result:""};
    
    function addition(num1, num2) {
        
      return num1 + num2;
        
    }
    
    function substraction(num1, num2) {
        
        return num1 - num2;
        
    }
    
    function multiplication(num1, num2) {
        
        return num1 * num2;
        
    }
    
    function division(num1, num2) {
        
        return num1 / num2;
    }
    
    return {
        resultOfAddition : addition,
        resultOfSubstraction : substraction,
        resultOfMultiplication : multiplication,
        resultOfDivision : division
    };
    
})();

MyModule.resultOfAddition(100,2);
MyModule.resultOfSubstraction(100,2);
MyModule.resultOfMultiplication(100,2);
MyModule.resultOfDivision(100,2);