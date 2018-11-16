# GifTastic

Instructions

Your app should take the topics in this array and create buttons in your HTML.
Try using a loop that appends a button for each string in the array.

When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

Under every gif, display its rating (PG, G, so on).

This data is provided by the GIPHY API.
Only once you get images displaying with button presses should you move on to the next step.

Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
Deploy your assignment to Github Pages.
Rejoice! You just made something really cool.

Problem - Need to build an app that makes a call to the Giphy API and returns 10 returns with the rating.

Solution / Technical Approach - Created an Ajax call to the Giphy API that picks 10 gifs. Added a for loop to loop through all 10 gifs and to add them to div's that were created with jQuery through the DOM. Inside the for loop, there is also a variable to get and store the rating for each gif. Used a function to loop through the array of video games and to convert them to buttons. Created logic to take the value from the search box and to append it to the end of the array to create a new button for the user search. Used an event listener to toggle the gifs from paused to moving based on the user clicking the specific gif.
