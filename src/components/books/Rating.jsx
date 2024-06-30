import React, { memo } from 'react';

import star from "../../assets/star.svg";

const Rating = memo(({ value }) => {
  const stars = Array(value).fill(star);

  return (
    <>
      {
        stars.map((star, index) =>(
          <img 
            src={star} 
            key={index} 
            alt="star" 
            width="14"
            height="14"
          />
        ))
      }
    </>
  )
})

export default Rating