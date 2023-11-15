import { useEffect, useState } from "react";
import {toast, ToastContainer} from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import getAPI from "./ApiPixabay";

export default function App() {
  const [imageName, setImageName] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  if(imageName === ''){
  return
}
setLoading(true);

getAPI(imageName,page).then((response) => {
    const currentImages = response.data.hits.map(({id, tags, webformatURL, largeImageURL}) =>{
        return {id, tags, webformatURL, largeImageURL};
      }
      );

      if(currentImages.length === 0) {
      setLoading(false);
      toast.error("No found photo");
      }

      setImages((prevImages) => [...prevImages, ...currentImages])
      setLoading(false);
    })
  }, [page, imageName])


  const handleSubmit = (imageName) =>{
    setImageName(imageName);
    setImages([]);
    setPage(1);
  };

  const loadMoreBtn = () => {
    setPage((page) => page + 1);
    }

     return (
      <div>
      <Searchbar onSubmit= {handleSubmit}/>
      {images.length > 0 && <ImageGallery images={images}/>}
      {loading ? (
        <Loader/>
      ) : (
        images.length > 0 &&
        images.length % 12 === 0 && <Button more={loadMoreBtn}/>
      )}
      <ToastContainer autoClose={3000}/>
    </div>
  );
      };
    