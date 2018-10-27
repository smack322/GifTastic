// array to store the categoies for the buttons
var videoGames = ["Mario Party", "Call of Duty", "Pac man", "Frogger", "Donkey Kong", "NBA 2K", "Halo 3", "Resident Evil", "Gears of War", "Zelda"];

      // function to call the API, bring back data under the parameters of 10 giphs, and setting the images to freeze & play
      function displayGameInfo() {

        var newVideoGame = $(this).attr("game-input");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tmOo7eIP6fwRQamT2cAG7bLv5lC4qaxj&q=" + newVideoGame + "&limit=10&offset=0&rating=R&lang=en";
        // Creating an AJAX call for the button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            console.log(response);

            var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var gameDiv = $("<div>");

            // Creating a paragraph tag to store the giph rating & text to print the Rating to the page
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var gameImage = $("<img>");
            // Setting the image for still and animate so that they appear as still and then on one click move & 2 clicks freeze again
            gameImage.attr("src", results[i].images.fixed_height_still.url);
            gameImage.attr("data-state", "still");
            gameImage.attr("data-animate", results[i].images.fixed_height.url);
            gameImage.attr("data-still", results[i].images.fixed_height_still.url);

            // Appending the paragraph and image tag to the animalDiv
            gameDiv.append(p);
            gameDiv.append(gameImage);

            // add the div to the page before the "#gifs-appear-here" div
            $("#games-view").prepend(gameDiv);
          }
        });

      }

      // Function for displaying movie data
      function renderButtons() {

        // Clear out the movies prior to adding new movies 
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < videoGames.length; i++) {

          // make each item in the array a button
          var a = $("<button>");
          a.addClass("game-btn");
          a.attr("game-input", videoGames[i]);
          a.text(videoGames[i]);
          $("#buttons-view").append(a);
        }
      }

      // on click event to handle adding new topics to array
      $("#add-game").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var newVideoGame = $("#game-input").val().trim();

        // Adding movie from the textbox to our array
        videoGames.push(newVideoGame);


        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding on click listened to determine frozen vs moving giphs
      $(document).on("click", "img", function() {
          var state = $(this).attr("data-state");
          if(state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
          }
          else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
          }   
      });

      $(document).on("click", ".game-btn", displayGameInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();