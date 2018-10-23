
// create array of topics for gifs
console.log("connected!");
var videoGames = ["Mario Party", "Call of Duty", "Pac man", "Frogger", "Donkey Kong", "NBA 2K", "Halo 3", "Resident Evil", "Gears of War", "Zelda"];
console.log(videoGames);
// create buttons for each topic in the videoGames variable

function addButton () {
    for (var i=0; i < videoGames.length; i++){
        var btn = document.createElement("button");
        var t = document.createTextNode(videoGames[i]);
        btn.appendChild(t);
        document.body.appendChild(btn);
}
}
addButton();

//create an on function to make a call to the API when one of the buttons is clicked (use an ajax call)

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=tmOo7eIP6fwRQamT2cAG7bLv5lC4qaxj";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

// the gif will not start playing until the user clicks on the specific gif... it will then stop when the user clicks it again

// take the value from the search box and push it into the videoGames array - it should turn into a button

// API Key: tmOo7eIP6fwRQamT2cAG7bLv5lC4qaxj




