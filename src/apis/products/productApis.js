import { axiosClient } from "../base_adapter";

const productApis = {
  getAll: async () => {
    try {
      const res = await axiosClient.get("/products");
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};

export default productApis;
