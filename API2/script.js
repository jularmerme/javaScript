function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Response not ok.");
    })
    .then((data) => {
      console.log(data.data);
      const insertHtml = document.querySelector("#app");
      const html = data.data
        .map((user) => {
          return `
            <div class="single-user">
              <img src="${user.avatar}" alt="${user.first_name}" >
              <p>Name: ${user.first_name}</p>
              <p>Email: ${user.email}</p>
            </div>
          `;
        })
        .join("");
      console.log(html);
      insertHtml.innerHTML = html;
      console.log(insertHtml);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

fetchData();

function postData() {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "morpheus",
      job: "leader",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

postData();
