import React, { useState } from "react";
import SearchResults from "./SearchResults";
import "./style.css";
const Search = () => {
  const [image, setImage] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImage(data);
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Images"
          value={image}
          onChange={inputEvent}
        />
        {image === "" ? null : <SearchResults name={image} />}
      </div>
    </>
  );
};

export default Search;
