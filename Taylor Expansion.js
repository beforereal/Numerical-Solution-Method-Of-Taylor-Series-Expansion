/* 
  Numerical Solution to Taylor Series Expansion */

// Number of significant figures 

  var n=4

// Percent Errors

  var eps_s= 0.5 * Math.pow(10,(2-n));
  
  var eps_a= 1;

// True Value

 var TrueValue= Math.sqrt(Math.cos(1.04));

  
  
// factorilalize function for numarator of expansion


function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

 //variables

  var previousSum= 1;

  var k=1;
  var numerator= Math.pow(-1,k)*Math.pow(1.04,2*k);
  var denominator = factorialize(2*k);

  var LastTerm = Math.sqrt(numerator/denominator);

  while ( eps_a > eps_s); {

  var sum=previousSum+LastTerm;

  var eps_t = Math.abs(((TrueValue-sum)/TrueValue)*100);
  
  eps_a = Math.abs(((sum-previousSum)/sum)*100);
  previousSum = sum
  k= k+1
  console.log(k, sum, eps_t, eps,a);
  }
 
   
  
 




  





