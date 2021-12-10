const users = [
  { name: "Ali", age: 23 },
  { name: "Mehmet", age: 30 },
  { name: "Ayşe", age: 14 },
  { name: "Fatma", age: 35 },
];

//? push, map, find, filter, some, every, includes */

//? push -> Array sonuna eleman ekler (push, pop, shift, unshift vs.)
// users.push("Onur");
// console.log(users);

//? map -> Array'i return eder
// const data = users.map((name) => {
//   console.log(name);
// });

//? find -> Girilen koşula göre o datayı arar
// const data = users.find((result) => result.name === "Mehmet");
// console.log(data);

//? filter -> Girilen filtrelemeye göre arama yapar

// const data = users.filter((item) => item.age < 30);
// console.log(data);

//? some -> İçerisinde geçen kelimeyi kontrol eder, bir tane bile yakalarsa true döner

// const data = users.some((item) => item.name === "Onur");
// console.log(data);

//? every -> Bütün elemanları kontrol edip ona göre true veya false döner

// const data = users.every((item) => item.age > 12);
// console.log(data);

//? includes -> Aratılan elemana göre kontrol sağlar

// const fruits = ["Apple", "Banana", "Orange"];
// const isIncluded = fruits.includes("Apple");
// console.log(isIncluded);
