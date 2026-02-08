import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f53e2788ba3f439d91df05a70749419c",
  },
});
