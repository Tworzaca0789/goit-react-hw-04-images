import axios from "axios";
import { getPhotosUrl } from "consts/ApiPixabayConsts";

const getAPI = (imageName, page) => {
    return axios.get(getPhotosUrl(imageName,page))
};
   export default getAPI;