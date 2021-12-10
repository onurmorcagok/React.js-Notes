const hello = (name) => {
  console.log(`Hello ${name}`);
};

const topla = (a, b) => {
  console.log(a + b);
};

const cikar = (a, b) => {
  console.log(a - b);
};

const user = {
  name: "Onur",
  surname: "Morcagök",
};

const persons = [
  {
    name: "Umut",
    surname: "Morcagök",
    job: "Student",
  },
  {
    name: "Onur",
    surname: "Morcagök",
    job: "Dev",
  },
];

export { topla, cikar, user, persons };

export default hello;
