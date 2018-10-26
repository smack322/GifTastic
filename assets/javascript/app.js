var videoGames = ["Mario Party", "Call of Duty", "Pac man", "Frogger", "Donkey Kong", "NBA 2K", "Halo 3", "Resident Evil", "Gears of War", "Zelda"];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayMovieInfo() {

        var newVideoGame = $(this).attr("game-input");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tmOo7eIP6fwRQamT2cAG7bLv5lC4qaxj&q=" + newVideoGame + "&limit=10&offset=0&rating=R&lang=en";
        // Creating an AJAX call for the specific movie button being clicked
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

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var gameImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            gameImage.attr("src", results[i].images.fixed_height_still.url);
            gameImage.attr("data-state", "still");
            gameImage.attr("data-animate", results[i].images.fixed_height.url);
            gameImage.attr("data-still", results[i].images.fixed_height_still.url);

            // Appending the paragraph and image tag to the animalDiv
            gameDiv.append(p);
            gameDiv.append(gameImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#movies-view").prepend(gameDiv);
          }
        });

      }

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < videoGames.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("movie-btn");
          // Adding a data-attribute
          a.attr("game-input", videoGames[i]);
          // Providing the initial button text
          a.text(videoGames[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a movie button is clicked
      $("#add-game").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var newVideoGame = $("#game-input").val().trim();

        // Adding movie from the textbox to our array
        videoGames.push(newVideoGame);


        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie-btn"
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

      $(document).on("click", ".movie-btn", displayMovieInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();