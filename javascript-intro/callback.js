import axios from "axios";

// setInterval(() => {
//   console.log("execute");
// }, 1000);

//? Callback Func

// const sayHello = (cb) => {
//   cb();
// };

// sayHello(() => {
//   console.log("Hello");
// });

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((data) => data.json())
//   .then((res) => console.log("user", res));

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => data.json)
//   .then((res) => console.log("post", res));

// async function getData() {
//   const user = await fetch("https://jsonplaceholder.typicode.com/users/1").then(
//     (data) => data.json()
//   );
//   const post1 = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   ).then((res) => res.json());

//   console.log("User:", user);
//   console.log("Post:", post1);
// }

// getData();

// async function getData() {
//   const result = await axios("https://jsonplaceholder.typicode.com/users/1");
//   console.log(result.data);
// }

// getData();

//? Promise

// const getUsers = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 1) {
//       resolve("Success");
//     }
//     reject("Error!");
//   });
// };

// getUsers(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const result = await axios("https://jsonplaceholder.typicode.com/users/");

    resolve(result.data);
    reject("ERROR!");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const result = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(result.data);
    reject("ERROR!");
  });
};

//! Anonymous function

// (async () => {
//   try {
//     const users = await getUsers();
//     const post = await getPost(1);

//     console.log(users);
//     console.log(post);
//   } catch (e) {
//     console.log(e);
//   }
// })();

//* Promise.all()

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
