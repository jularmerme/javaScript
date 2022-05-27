let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", () => {
  // Instantiate a new XHR Object
  const xhr = new XMLHttpRequest();

  // Open a Object(GET/POST, PATH, ASYN-TRUE/FALSE)
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

  // When the response is ready
  xhr.onload = function () {
    if (this.status == 200) {
      // Changing string data inro JSON Object
      obj = JSON.parse(this.responseText);

      // Getting the ul element
      let list = document.getElementById("list");
      str = "";
      for (key in obj.data) {
        str += `<li>${obj.data[key].employee_name}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("File Not Found");
    }
  };
  // At last send the request
  xhr.send();
});
