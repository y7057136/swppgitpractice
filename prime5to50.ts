function prime5to50(): string {
	let message : string = ""

	let tmpmsg = " is a prime number&#13;&#10;";
	for(var i = 5; i <= 50; i ++){
		if(isPrime(i)){
			message = message + i + tmpmsg;
		}
	}

	// TODO: fill up the message string with the proper content.

	return message
}

function isPrime(n): boolean {
	var p = true;
	for (var i=2; i < n; i++){
		if(n % i == 0){
			p = false;
		}
	}
	return p;
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
