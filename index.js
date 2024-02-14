const express = require("express");
const app = express();
const PORTA = 8081;

// ROUTER===========================================
app.get("/", function (requisition, response) {
  const Person = [
    {
      id: 1,
      ifirstName: "Sabino",
      lastName: "Capingana",
      email: "scapingana@gmail.com",
      telefone: 4567,
    },
    {
      id: 2,
      ifirstName: "Joé",
      lastName: "Capingana",
      email: "jose@gmail.com",
      telefone: 4567,
    },
    {
      id: 3,
      ifirstName: "Pedro",
      lastName: "António",
      email: "antónio@gmail.com",
      telefone: 4567,
    },
  ];
  const personJson=JSON.stringify(Person);
  const personList=JSON.parse(personJson);
  response.send(personList);
});

// LOCALHOST==================================================
app.listen(PORTA, () => {
  console.log(`O SERVIDOR ESTÁ RODANDO NA PORTA ${PORTA}`);
});
