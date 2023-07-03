import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (contact) => {
  const request = axios.post(baseUrl, contact);
  return request.then((response) => response.data);
};

const contactService = {
  getAll,
  create,
};

export default contactService;
