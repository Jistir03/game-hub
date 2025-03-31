import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a53514fa87c9466793f7535abd7b6edd",
  },
});
