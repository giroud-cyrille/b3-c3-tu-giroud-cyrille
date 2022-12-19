
const Calculator = require('../src/calculator').Calculator;
const expect = require('chai').expect;

describe('Calculator', function() {
    describe('Try sum function', function() {
        it('should return 3 when 1 + 2', function() {
            let c = new Calculator();
            expect(c.sum(1, 2)).to.equal(3);
        });
    });

    describe('Try substract function', function() {
        it('should return 3 when 5 - 2', function() {
            let c = new Calculator();
            expect(c.substract(5, 2)).to.equal(3);
        });
    });

    describe('Try multiply function', function() {
        it('should return 3 when 1 * 3', function() {
            let c = new Calculator();
            expect(c.multiply(5, 3)).to.equal(15);
        });
    });

    describe('Try multiply function with one parameter negative', function() {
        it('should return -15 when 5 * -3', function() {
            let c = new Calculator();
            expect(c.multiply(5, -3)).to.equal(-15);
        });
    });

    describe('Try multiply function with both parameters negative', function() {
        it('should return 15 when -5 * -3', function() {
            let c = new Calculator();
            expect(c.multiply(-5, -3)).to.equal(15);
        });
    });

    describe('Try divide function', function() {
        it('should return 3 when 6 / 2', function() {
            let c = new Calculator();
            expect(c.divide(6, 2)).to.equal(3);
        });
    });

    describe('Try divide function by 0', function() {
        it('should return "Error, division by 0" when 6 / 0', function() {
            let c = new Calculator();
            expect(c.divide(6, 0)).to.equal("Error, division by 0");
        });
    });

    describe('Try carre function', function() {
        it('should return 9 when 3 * 3', function() {
            let c = new Calculator();
            expect(c.carre(3)).to.equal(9);
        });
    });

    describe('Try carre function with negative parameter', function() {
        it('should return 9 when -3²', function() {
            let c = new Calculator();
            expect(c.carre(-3)).to.equal(9);
        });
    });

    describe('Try racineCarre function', function() {
        it('should return 3 when racineCarre 9', function() {
            let c = new Calculator();
            expect(c.racineCarre(9)).to.equal(3);
        });
    });

    describe('Try puissance function', function() {
        it('should return 27 when 3 * 3', function() {
            let c = new Calculator();
            expect(c.puissance(3, 3)).to.equal(27);
        });
    });
});