/**
 * Write a program that prints the numbers from 1 to 100.
 * Multiples of three print "Fizz" instead of the number
 * Multiples of five print "Buzz".
 * Numbers which are multiples of both three and five print "FizzBuzz?".
 *
 */


describe("Kata FizzBuzz",
	function ()
	{
		it("Multiples of three print 'fizz' instead of the number",
			function()
			{
				expect(fizzBuzz(3)).toBe('fizz');
			});

    it("Multiples of five print 'buzz' instead of the number", function(){
        expect(fizzBuzz(5)).toBe('buzz');
    });
    it("Multiples of three and five print 'fizzbuzz' instead of the number", function(){
        expect(fizzBuzz(15)).toBe('fizzbuzz');
     });
    it("doesn't Multiples of three and five print 'fizzbuzz' instead of the number", function(){
        expect(fizzBuzz(13)).not.toBe('fizzbuzz');
     });
    it("doesn't Multiples of three and five print '17' instead of the number", function(){
        expect(fizzBuzz(17)).toEqual(17);
     });
    it("Print numbers from 1 to 100", function(){

        expect(printFizzBuzz()).toBe();
    });
  it("if the parameter is a string", function(){
        expect(fizzBuzz('hola')).toEqual(null);
    });

  it("If the number contains three print fizz ", function(){
        expect(fizzBuzz(13)).toEqual('fizz');
    });
  it("If the number contains three print fizz ", function(){
        expect(fizzBuzz(12234113)).toEqual('fizz');
    });
  it("If the number contains five print buzz ", function(){
        expect(fizzBuzz(122541101)).toEqual('buzz');
    });
	}
);
