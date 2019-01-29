/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Happier", "A$ap Forever", "Neon Guts", "She", "Get You"];
$('.songs').empty();
songs.forEach(function(song) {
    console.log(song);
    
});

/*(var i = 0; 1 < songs.length; i ++)(
    $('.songs').append("<li>" + songs[i] + "</li>");
    }
    for (var i = 0 ;1 < plusOne)
    });
    */


// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var links = ["https://www.youtube.com/watch?v=m7Bc3pLyij0", "https://www.youtube.com/results?search_query=asap+forever",
    "https://www.youtube.com/watch?v=nTOj3UQhkLA", "https://www.youtube.com/watch?v=mFNaFeIm4bU", "https://www.youtube.com/watch?v=uQFVqltOXRg"
];

$('.links').empty();
links.forEach(function(links){
    console.log(links);
});

var Artist = ["Marsmello", "Asap Rocky", "Lil Uzi", "Frank Ocean", "Daniel Ceaser"];
$('.Artist').empty();
Artist.forEach(function(song){
    console.log(Artist);
    
});
var songLengths = ["3 minutes","4 minutes","4 minutes","5 minutes","4 minutes"];
$('songLengths').empty();
songLengths.forEach(function(songLengths){
    console.log(songLengths);
});

// BELOW Use forEach Loop to display the data from each of your array's in the correct div


function emptySongInfo() {
    $("#songs").empty();
    var songs
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo() {
    // BELOW write the code to add new items to each of the arrays.
    var addSongInfo = []
    for (var i = 0; 1 < addSongInfo.length; i++){
        $('.addSongInfo').append("<li>" + addSongInfo[i] + "</li>");
    }
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
