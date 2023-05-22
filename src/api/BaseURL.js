import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://demo.daoobapi.cti.college/api/",
});

export default baseUrl;
