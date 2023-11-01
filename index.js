/*function nFactorielle(n){
    if(n === 1 || n === 0) return 1;
    if(n < 0) return "error";

    return n * nFactorielle(n - 1);
}

console.log(nFactorielle(4));*/

function factorielle(n){
	var i, n, f = 1;
    if(n < 0) return "error";

	for(i = 1; i <= n; i++)  
	{
		f = f * i;   // ou f *= i;
	}  
  return f;
}

console.log(factorielle(1));
console.log(factorielle(0));
console.log(factorielle(-5));
console.log(factorielle(7));





