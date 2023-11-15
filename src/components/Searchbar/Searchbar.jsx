import PropTypes from 'prop-types';
import {toast} from "react-toastify";
import styles from "./Searchbar.module.css";
import { useState } from 'react';

export default function Searchbar({onSubmit}) {

  const [imageName, setImageName] = useState("");
    
  const handleChange= (e) => {
    setImageName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if(imageName.trim() === "") {
       toast.error("Please fill out the field");
       return;
    }

    onSubmit(imageName);
    setImageName("");
  };

      return(
       <header className={styles.searchbar}>
  <form onSubmit = {handleSubmit} className={styles.SearchForm}>
    <button type="submit" className={styles.SearchForm_button}>
      <span className={styles.ButtonLabel}>Search</span>
    </button>

    <input
      className={styles.SearchInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={imageName}
      onChange={handleChange}
    />
  </form>
</header> 
      );
    };

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
