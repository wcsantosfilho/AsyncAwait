const fetch = require('node-fetch');

async function getPerson(id) {
	const response = await fetch(`http://swapi.dev/api/people/${id}/`);
	const person = await response.json();
	console.log(person.name);
}

getPerson(1);

