const express = require("express");

const app = express();

let contacts = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const getCurrentDatetime = () => {
  const date = new Date();
  return date.toLocaleString();
};

const getInfo = () =>
  `<p>Phonebook has info for ${contacts.length} people.</p>` +
  `<p>${getCurrentDatetime()}</p>`;

app.get("/api/persons", (req, res) => {
  res.json(contacts);
});

app.get("/info", (req, res) => {
  res.send(getInfo());
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return res.status(404).end();
  }

  res.json(contact);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
