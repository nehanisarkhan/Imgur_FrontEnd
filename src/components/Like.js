import React, { useState } from "react";

function Like(props) {
  const [count, setCount] = useState(props.count);
  const [isLiked, setIsLiked] = useState(false);

  const handleButtonClick = () => {
    if (isLiked) {
      setIsLiked(false);
      setCount(count - 1);
    } else {
      setIsLiked(true);
      setCount(count + 1);
    }
  };

  return (
    <>
      <button className={isLiked ? "isLiked" : ""} onClick={handleButtonClick}>
        {isLiked ? "Unlike" : "Like"}
        {count}
      </button>
    </>
  );
}

export default Like;
