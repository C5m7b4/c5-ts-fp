import { ArrayList } from "../../src";

const al = new ArrayList();
al.push({ id: 1, name: "mike" });
al.push({ id: 2, name: "tommy" });
al.push({ id: 3, name: "tj" });
al.push({ id: 4, name: "ben" });
al.push({ id: 5, name: "jimmy" });

console.log(al);

console.log(al.get(2));

al.pop();
console.log(al);

al.delete(2);
console.log(al);
