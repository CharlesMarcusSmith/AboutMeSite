export function getPizzaGif() {
  // Create a new instance of an HTTP request
  var request = new XMLHttpRequest();
  // Set up the URL endpoint we want to reach
  const URL = "https://api.giphy.com/v1/gifs/random?api Key=1kym23Y6kQm4gMKJIbP3ahifu95feDge&tag=pizza&rating=g";
  
  // Make the request
  request.open('GET', URL); // Change requestUrl to URL
  request.responseType = 'json';
  request.send();

  // Do something with the successful response
  request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
          var response = request.response;
          var imageUrl = response.data.images.original.url; // Use the correct path for the image URL
          document.getElementById('pizza-gif').src = imageUrl;
      } else {
          console.error('Request failed with status:', request.status);
      }
  };
}