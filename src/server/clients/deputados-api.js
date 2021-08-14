import axios from "axios";

const client = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/api/v2",
  headers: { accept: "application/json" },
});

export default client;
