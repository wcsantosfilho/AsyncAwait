const randomProm = new Promise((resolve, reject) => {
	if (Math.random() > 0.5) {
		resolve('Sucess');
	} else {
		reject('Failure');
	}
});

//Promise Chain
randomProm
	.then((value) => {
		console.log('inside then1');
		console.log(value);
		return value
	}).then((value) => {
		console.log('inside then2');
		console.log(value);
		return value
	}).catch((value) => {
		console.log('inside catch');
		console.log(value);
});	
