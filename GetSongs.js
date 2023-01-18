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

class Song {
    constructor(options){
        this.options = options;
    }

    async getSong(searchTerm = "") {
        if(!searchTerm) throw new Error("search term is missing")
        const encodedSearchTerm = encodeURIComponent(searchTerm);
        try {
            const responseSongs = await fetch(`https://genius-song-lyrics1.p.rapidapi.com/search/?q=${encodedSearchTerm}`, this.options);
            if (!responseSongs.ok) {
                throw new Error(`Error fetching song data for search term ${searchTerm}. status: ${responseSongs.status}, statusText: ${responseSongs.statusText}`);
            }
            const jsonSongs = await responseSongs.json();
            const {hits} = jsonSongs;
            const {result} = hits[0];
            const {language, id, title, header_image_thumbnail_url, artist_names} = result;
            const songData = {
                lan: language, 
                id: id,
                title: title, 
                thumb: header_image_thumbnail_url,
                artist: artist_names,
                songs: [],
                lyrics: ""
            };
            const saveSongs = (hits) => hits.map(({result}) => ({id: result.id, title: result.title}));
            songData.songs = saveSongs(hits);
            songData.lyrics = await this.getLyrics(songData.id);
            // const json = JSON.stringify(save);
            return songData;
        } catch(err) {
            err.message = 'Error fetching song search';
            console.error(err.message);
        }
    }

    async getLyrics(SongId) {
        if(!SongId) throw new Error("Error fetching lyrics: SongId is missing")
        try {
            const responseLyrics = await fetch(`https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${SongId}`, this.options);
            if (!responseLyrics.ok) {
                throw new Error(`Error fetching lyrics for id ${SongId}. status: ${responseLyrics.status}, statusText: ${responseLyrics.statusText}`);
            }
            const jsonLyrics = await responseLyrics.json();
            const htmlLyrics = jsonLyrics.lyrics.lyrics.body.html;
            const lyrics = htmlLyrics.replace(/<[^>]+>/g, '');
            return lyrics;
        } catch (err) {
            err.message = 'Error fetching song lyrics';
            console.error(err.message);
        }
    }
}

const song = new Song(options);
const songData = await song.getSong(searchTerm);
console.log(songData)