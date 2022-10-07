
function make_album(artistName, album_title, no_of_tracks = null) {
    let album = {
        artist_name: artistName,
        album_title: album_title
    }

    // Optional Parameter
    if(no_of_tracks != null){
        album['number_of_tracks'] = no_of_tracks;
    }

    return album;
}

let album1 = make_album("Atif Aslam", "Race 2");
let album2 = make_album("Ali Zaffar", "PSL 5");
let album3 = make_album("Lil Nas X", "Industrial babe");

console.log(album1);
console.log(album2);
console.log(album3);

console.log(make_album("Eminem", "When I Collapse", 15));