import { useState } from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types';
import Modal from "components/Modal/Modal";


const ImageGalleryItem = ({webformatURL, largeImageURL, tags}) => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal((showModal) => !showModal);
    };


    return (
        <li className={styles.galleryItem}>
        <img className={styles.galleryItem_image}
        onClick={toggleModal}
        src={webformatURL}
         alt={tags}
          />
          
          {showModal && (
            <Modal 
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={toggleModal}
            />
          )}
        </li>
    );
    }

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    largeImage: PropTypes.func.isRequired,
}

export default ImageGalleryItem;