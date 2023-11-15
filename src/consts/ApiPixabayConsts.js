export const API_KEY = process.env.REACT_APP_API_KEY;

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getPhotosUrl = (imageName, page) => {
    return `${BASE_URL}/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
}