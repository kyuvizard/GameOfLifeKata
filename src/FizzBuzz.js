var fizzBuzz = function(number)
{
  var result = "";
  if(typeof(number)== "string")
    return null;

	result += printFizz(number);
  result += isMultipleby5(number);
  if(result=='')
    return number;
  return result;

};

var printFizzBuzz = function(){
  for (var i = 1; i < 100; i++) {
    console.log(fizzBuzz(i));
  };
};

function printFizz(number)
{

  var v = number % 3 == 0;
  if(v || ContainsNumber(number,3))
    return 'fizz';
  return '';
}

function isMultipleby5(number)
{
  var v = number % 5 == 0;
  if(v|| ContainsNumber(number,5))
    return 'buzz';
  return '';
}

function ContainsNumber(number, index)
{
  while(number > 0)
  {
    var x = number % 10;
    if(x == index) return true;
    number /= 10;
  }
  return false;
}