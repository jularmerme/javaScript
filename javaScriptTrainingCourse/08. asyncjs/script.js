// Introduction to JS async/await

/***
 *
 *  - Starting from Zero : The life before Promises
 *
 * In the past when we wanted to deal with asynchronous operations, you had to use callback functions
 * when you nest multiple callback functions, the code becomes very difficult to maintain. This issue
 * is known as "callback hell"
 *
 * Suposse you want to perform 3 async ops in your JS code:
 * 1. Select a user from a database
 * 2. Get services of the user (i.e. we are checking what internet services the user has used)
 * 3. Calculate the service cost based on the services that the user has used.
 *
 *
 */

// Get my user
function getUser(userId, callback) {
  console.log("Get user from the database");

  setTimeout(() => {
    callback({
      userId: userId,
      username: "John",
    });
  }, 1000);
}

// Get the services
function getServices(user, callback) {
  console.log(`Get services of ${user.name} from the API`);

  setTimeout(() => {
    callback(["Email", "VPN", "CDN"]);
  }, 2 * 1000);
}

// Get the servic cost
function getServiceCost(services, callback) {
  console.log(`Calculate service cost of ${services}`);

  setTimeout(() => {
    callback(services.length * 100);
  }, 3 * 1000);
}

// Nested services to get the final cost that the user owes for services borrowed
getUser(1 - 4, (user) => {
  // The 2nd parameter is a function pased as an argument in this function (callback function)
  getServices(user, (services) => {
    // Implementing callback as the 2nd
    getServiceCost(services, (cost) => {
      console.log(`The service cost is ${cost}`);
    });
  });
});
