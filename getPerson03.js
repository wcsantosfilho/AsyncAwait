const fetch = require('node-fetch');

async function getPerson(id) {
	const response = await fetch(`http://swapi.dev/api/people/${id}/`);
	const person = await response.json();
	return person;
}

getPerson(1)
	.then(person => console.log(person.name));

