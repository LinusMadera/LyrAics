import config from "config.js";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': config.XRapidAPIKey,
		'X-RapidAPI-Host': 'sridurgayadav-chart-lyrics-v1.p.rapidapi.com'
	}
};

fetch('https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));