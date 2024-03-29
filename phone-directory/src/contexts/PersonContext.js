import { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

export const PersonContext = createContext();

const PersonContextProvider = (props) => {
  const [persons, setPersons] = useState([
    {
      id: uuidv4(),
      name: "Thomas Hardy",
      email: "thomashardy@mail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
    },
    {
      id: uuidv4(),
      name: "Dominique Perrier",
      email: "dominiqueperrier@mail.com",
      address: "Obere Str. 57, Berlin, Germany",
      phone: "(313) 555-5735",
    },
    {
      id: uuidv4(),
      name: "Maria Anders",
      email: "mariaanders@mail.com",
      address: "25, rue Lauriston, Paris, France",
      phone: "(503) 555-9931",
    },
    {
      id: uuidv4(),
      name: "Fran Wilson",
      email: "franwilson@mail.com",
      address: "C/ Araquil, 67, Madrid, Spain",
      phone: "(204) 619-5731",
    },
    {
      id: uuidv4(),
      name: "Martin Blank",
      email: "martinblank@mail.com",
      address: "Via Monte Bianco 34, Turin, Italy",
      phone: "(480) 631-2097",
    },
    {
      id: uuidv4(),
      name: "Ali Bal",
      email: "alibal@mail.com",
      address: "Ataturk Street 34, Istanbul, Turkey",
      phone: "(480) 555-1123",
    },
  ]);

  useEffect(() => {
    const persons = localStorage.getItem("persons");
    setPersons(JSON.parse(persons));
  }, []); // First render

  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
  });

  const sortedPerson = persons.sort((a, b) => (a.name < b.name ? -1 : 1)); // initial personList sorted

  const addPerson = (name, email, address, phone) => {
    setPersons([...persons, { id: uuidv4(), name, email, address, phone }]);
  };

  const deletePerson = (id) => {
    setPersons(persons.filter((person) => person.id !== id)); // If person.id is not equal to incoming id
  };

  const updatePerson = (id, updatedPerson) => {
    setPersons(
      persons.map((person) => (person.id === id ? updatedPerson : person))
    );
  };

  return (
    <PersonContext.Provider
      value={{ sortedPerson, addPerson, deletePerson, updatePerson }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
