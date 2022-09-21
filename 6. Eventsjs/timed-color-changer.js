function changeBlue() {
  let parent = document.getElementById("parent-1");
  //set the color change to be delayed by 3 seconds
  setTimeout(() => {
    console.log("Please wait...");
    parent.classList.add("color-bluegradient");
  }, 3000);

  console.log("Done : The background color is now blue");
}

// Now make changeGreen Function
