let baseLyrics = `Lyrics line 1
Lyrics line 2
Lyrics line 3
Lyrics line 4
Lyrics line 5
Lyrics line 6`

//Object divides songs into array, removes duplicate lines and stores each line as a index of the array with no line duplicates.
//Lyrics with no duplicate lines can still retain some context (more than if it was compressed), and is smaller which makes it faster and cheaper to translate using the gpt API.
//After each line gets translated the song is reconstructed in the same order, now with the translated lines array.
class Song {
    constructor(lyrics) {
        if (typeof lyrics !== 'string' || lyrics.trim() === '') {
            throw new Error('Invalid input, expected non-empty string');
        }
        this.lyrics = lyrics;
        this.lyricArray = this.splitLyricsIntoLines();
        this.lyricNoRepeatedLine = this.removeDuplicateLines();
        this.fullIndexedSong = this.createLineIndex();
    }
    
    splitLyricsIntoLines() {
        return this.lyrics.split('\n');
    }
    
    removeDuplicateLines() {
        return [...new Set(this.lyrics.split('\n'))];
    }
    
    createLineIndex() {
        const nonRepeatLyrics = this.removeDuplicateLines();
        const indexArray = [];
        for (let i of this.lyricArray) {
            const indexOfCurrentLine = nonRepeatLyrics.indexOf(i);
            if (indexOfCurrentLine !== -1) {
                indexArray.push(indexOfCurrentLine);
            }
        }
        return indexArray;
    }
    
    reconstructSong() {
        let song = [];
        for (let x of this.fullIndexedSong) {
            song.push(this.lyricNoRepeatedLine[x]);
        }
        return song.join('\n');
    }
}

const song = new Song(baseLyrics);

//Log tests:
// console.log(song.lyricArray);
// console.log(song.lyricNoRepeatedLine);
// console.log(song.fullIndexedSong);
// console.log(song.reconstructSong());