class Calculator {
    constructor() {
        this.operation = "";
        this.operators = ["+", "-", "*", "/", "^"];
    }
    
    input(text) {
        if(this.operation == "Error, division by 0")
            this.inputClear();

        if(this.operation.length == 0 && text == '^') {
            return;
        }

        if(this.canCalculBeforeInput(text)) {
            this.baseCalcul();
        }

        var lastChar = this.operation[this.operation.length - 1];
        if(this.operators.includes(text) && this.operators.includes(lastChar) && (text != '-' || lastChar == text)) {
            this.operation = this.operation.slice(0, -1);
        }

        this.operation += text;
        $(".resultat").text(this.operation);
    }
    
    inputClear() {
        this.operation = "";
        $(".resultat").text("");
    }
    
    inputRemoveLast() {
        if(this.operation.length == 0)
            return;

        this.operation = this.operation.slice(0, -1);
        $(".resultat").text(this.operation);
    }

    canCalculBeforeInput(input) {
        debugger
        var lastChar = this.operation[this.operation.length - 1];
        var operationWithoutFirstChar = this.operation.slice(1);
        return !this.operators.includes(lastChar) && this.operators.includes(input) && (operationWithoutFirstChar.includes("+") || operationWithoutFirstChar.includes("-") || operationWithoutFirstChar.includes("*") || operationWithoutFirstChar.includes("/") || operationWithoutFirstChar.includes("^"));
    }

    baseCalcul() {
        let separator = [];
        let result = 0;
        let operator;
        
        for(var i = 1; i < this.operation.length; i++) {
            if(this.operators.includes(this.operation[i]) && operator == undefined) {
                separator = [this.operation.slice(0, i), this.operation.slice(i + 1)];
                operator = this.operation[i];
            }
        }

        switch(operator) {
            case "+":
            result = this.sum(parseInt(separator[0]), parseInt(separator[1]));
            break;
            case "-":
            result = this.substract(parseInt(separator[0]), parseInt(separator[1]));
            break;
            case "*":
            result = this.multiply(parseInt(separator[0]), parseInt(separator[1]));
            break;
            case "/":
            result = this.divide(parseInt(separator[0]), parseInt(separator[1]));
            break;
            case "^":
            result = this.puissance(parseInt(separator[0]), parseInt(separator[1]));
            break;
        }
        
        $(".resultat").text(result);
        this.operation = result.toString();
    }
    
    complexCalcul(complexOperator) {
        var result = 0;
        switch(complexOperator) {
            case "²":
            result = this.carre(parseInt(this.operation));
            break;
            case "√":
            result = this.racineCarre(parseInt(this.operation));
            break;
        }

        $(".resultat").text(result);
        this.operation = result.toString();
    }

    sum(a, b) {
        return a + b;
    }
    
    divide(a, b) {
        if(b == 0)
            return "Error, division by 0";

        return a / b;
    }
    
    multiply(a, b) {
        return a * b;
    }
    
    substract(a, b) {
        return a - b;
    }
    
    carre(a) {
        return a * a;
    }
    
    racineCarre(a) {
        return Math.sqrt(a);
    }
    
    pourcentage(a) {
        return a / 100;
    }
    
    puissance(a, b) {
        return Math.pow(a, b);
    }
}

module.exports = {
    Calculator: Calculator
}