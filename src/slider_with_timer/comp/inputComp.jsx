import React from 'react';

const InputComp = ({slideId, anim,handleButtonClick}) => {
   const handleClick = () => {
      handleButtonClick(slideId);
    };
   return (
      <div className="slider-indic"  onClick={handleClick}>
         <div className={`slider-indic-el ${anim ? "animate" : ""}`}></div>
      </div>
   );
};

export default InputComp;
