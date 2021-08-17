const randomProm = new Promise((resolve, reject) => {
	console.log('randomProm executed');
	if (Math.random() > 0.5) {
		resolve('Sucess');
	} else {
		reject('Failure');
	}
});

//async keyword creates an async function which returns a promise
async function ansyncExample() {
	try {
		const outcome = await randomProm;
		console.log(outcome);
	} catch (error) {
		console.log('catch error: ',error);
	}

	// This return value is wrapped in a promise
	return 'AsyncReturnVal';
}

// ansyncExample() returns a promise, we can call its corresponding then method
ansyncExample().then((value) => {
	console.log(value);
});

console.log('I get executed before the async code because this is synchronous');
