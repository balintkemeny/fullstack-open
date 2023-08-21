const express = require("express");
const morgan = require("morgan");

const app = express();
const range = 10000;

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

const getNewId = () => Math.floor(Math.random() * range);

morgan.token("postBody", (req, res) =>
  req.method === "POST" ? JSON.stringify(req.body) : ""
);

app.use(express.json());
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :postBody"
  )
);

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

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  contacts = contacts.filter((c) => c.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;
  if (!name || !number) {
    return res.status(400).json({
      error: "missing name or number",
    });
  }

  const alreadyExistingContact = contacts.find((c) => c.name === name);
  if (alreadyExistingContact) {
    return res.status(400).json({
      error: "name must be unique",
    });
  }

  const newContact = {
    id: getNewId(),
    name: name,
    number: number,
  };

  contacts = contacts.concat(newContact);
  res.json(newContact);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
