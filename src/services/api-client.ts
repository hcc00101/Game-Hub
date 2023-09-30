import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d527dcc0a3a84dfcb20a23597c252839",
  },
});
