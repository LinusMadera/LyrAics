import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPID_API_KEY,
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

async function fetchData() {
    try {
        const response = await fetch('https://genius-song-lyrics1.p.rapidapi.com/search/?q=nothing%20more', options);
        const jsonResponse = await response.json();
        const {hits} = jsonResponse;
        const {result} = hits[0];
        const {language, id, title, header_image_thumbnail_url, artist_names} = result;

        const save = {
            lan: language, 
            id: id,
            title: title, 
            thumb: header_image_thumbnail_url,
            artist: artist_names,
            songs: []
        };

        const saveSongs = (hits) => {
            return hits.map(({result}) => ({id: result.id, title: result.title}));
        }
        save.songs = saveSongs(hits);
        console.log(save);
    } catch(err) {
        console.error(err);
    }
}

fetchData();
