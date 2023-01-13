import React, { useState } from "react";
  
const ReadMore = (props) => {
  const text = props.children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    (text.length>=props.length)?(
    <p> 
      {isReadMore ? text.slice(0, props.length) : text}
      <span onClick={toggleReadMore} style={{color:"blue"}}>
        {isReadMore ? " ...Read more" : " Show less"}
      </span>
    </p>):text
  );
};

export default ReadMore;