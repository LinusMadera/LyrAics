let baseLyrics = `When I was younger
I found and planted a seed
The very next day
Expecting a tree
Over me
When I went back home
20 years had passed and I couldn't believe
What I had done was standing
Over me
Some people's minds just aren't worth changing
Some people's games just aren't worth playing
My peace of mind ain't always worth saving
I was just too young to see
I, I was just too young to see
The truth will set you free
Turn! Turn! Turn!
The truth will set you free
Some people's minds just aren't worth changing
Some people's games just aren't worth playing
My peace of mind ain't always worth saving
I was just too young to see
I was just too young to see
I fell from the nest
And into a dream
Like fruit from the tree
It changed what I believed
Changing me
Shaping, shifting, forming my wings
Carving, climbing, up to higher things
Say what you mean
Do what you feel
Don't believe everything you hear
We're all mad down here
Turn! Turn! Turn!
The truth will set you free
Some people's minds just aren't worth changing
Some people's games just aren't worth playing
My peace of mind ain't worth saving
I was just too young to see
I was just too young to see
Turn the masses
Turn the masses
Turn the masses
Turn the masses
A time to love and a time to hate
A time for war and a time for peaceful change
A time to plant a seed and a time to rip it out
A season for truth and a reason for doubt
When to fight and when to run
Know when to speak and when to bite your tongue
There's a time to heal and a time for blood
There's a time for violence
Violence
Let yourself go
In the faith that you'll arrive back
All in one piece
It's alright
There's nothing else you need to do
Now, look
Do you know what you're doing?
You're trying to hold yourself together
As if your skin weren't strong enough to contain you`

function LineSplit(lyrics){
    return lyrics.split("\n");
}

let indexSong= (lyrics,nonRepeatLyrics) => {
    let indexArray = []
    for (i of lyrics){
        let indexOfCurrentLine= nonRepeatLyrics.indexOf(i);
        if ( indexOfCurrentLine != -1){
            indexArray.push(indexOfCurrentLine)
        }
    }
    return indexArray;
}

let rebuildSong = (noRepeatsStrings,indexedSong) => {
    let song = []
    for (x of indexedSong) {
        song.push(noRepeatsStrings[x]);
    }
    return song
}

let filteredString = [...new Set(LineSplit(baseLyrics))];
let stringSet = new Set(LineSplit(baseLyrics));
let indexedSong = indexSong(LineSplit(baseLyrics),filteredString);

console.log(filteredString);
console.log(stringSet);
console.log(indexedSong);
console.log(rebuildSong(filteredString,indexedSong));