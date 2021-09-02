import React from "react";

const SearchResults = (props) => {
  const img = `https://source.unsplash.com/600x600/?${props.name}`;
  return (
    <>
      <img src={img} alt="search-images" />
    </>
  );
};

export default SearchResults;
