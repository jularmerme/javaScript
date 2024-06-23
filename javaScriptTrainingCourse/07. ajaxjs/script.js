/****
 * 
 * AJAX stands for Asynchronous JavaScript And XML

  It allows for performing javascript actions asynchronously.
  Generally used in conjunction with http requests, as we can wait
  for the response in the background while still doing other things.

  One of the biggest advantages of JS is the responsiveness it provides
  to our webpages. We can easily respond to events on our frontend and manipulate
  the DOM using basic JS functions.

 * But the magic JS does not end there. We can use JS to make asynchronous
  requests to servers. We do this with AJAX.

  We want our application to continue to be responsive, while waiting
  for the server to respond. By sending the request and receiving the
  response asynchronously, we accomplish this.
  
  Note that AJAX has XML in it's name, but that primarily has its origin in
  and older era, where XML was used far more frequently as a data interchange
  format. Nowadays, we primarily use JSON. There are still some places that
  use XML, but JSON is a bit more popular.

 */

// Target our button that will trigger the event
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  // Do Ajax
  // 1. Create HttpRequest object
  let xhr = new XMLHttpRequest();

  let form = document.getElementById("field").value;

  // 2. Define the behaviors of our response as they come back from the server
  /***
   * A readyState is a property which signiifies that stat that the reques is
   * currently in.
   *
   * There are several states:
   * 0 : UNSET : opening of the request has yet to be called
   * 1 : OPENED : open() has benn called
   * 2 : HEADERS_RECEIVED : send() has been called and the header of the response
   *      as well as the status are now available
   * 3 : LOADING : downloading the responses, Therefore, the response text (which is
   *      xhr property) is holding partial data
   * 4 : DONE : the entire operation is now complete
   *
   *  Why need readyStates?
   *  Often you can implement other transitions or animations to your webpages by trigerring
   *  them at given readySates
   *
   */

  xhr.onreadystatechange = function () {
    // 200 status code is a OK response
    // which means that everything was processed correctly
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      readHTML(data);
    }
  };

  // 3. open a request
  xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${form}`);

  xhr.send();
});

function readHTML(data) {
  let resp = document.getElementById("input");

  resp.append("Name: " + data.name);
  resp.append(document.createElement("br"));

  resp.append("ID: " + data.id);
  resp.append(document.createElement("br"));

  let image = document.createElement("img");
  image.setAttribute("src", data.sprites.front_default);
  image.setAttribute("height", "100");
  image.setAttribute("width", "100");

  resp.append(image);
  resp.append(document.createElement("hr"));
}
