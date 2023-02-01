import { axiosAdmin } from "../Axios";

const productApis = {
    postProducts : (request) => {
        try {
            const response = axiosAdmin.post("/product",request)
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getProducts : () => {
        try {
            const response = axiosAdmin.get("/product")
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default productApis 