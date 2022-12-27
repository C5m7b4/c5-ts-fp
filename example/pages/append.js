import { compose, prop, append } from "../../src";

const person = {
  firstName: "mike",
  lastName: "bedingfield",
  job: "developer",
};

const getFirstName = prop("firstName");
const getLastName = prop("lastName");

const getFullName = () => append(getLastName(person))(getFirstName(person));

const greetPerson = compose(getFullName, append(`, welcome to the fold`));

console.log(greetPerson(person));
