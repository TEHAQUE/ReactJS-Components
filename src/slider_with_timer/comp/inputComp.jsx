import React from 'react';

const InputComp = ({slideId, anim,handleButtonClick, animDuration}) => {
   const handleClick = () => {
      handleButtonClick(slideId);
    };
   return (
      <div className="slider-indic"  onClick={handleClick}>
         <div className={`slider-indic-el ${anim ? "animate" : ""}`} style={{animationDuration: animDuration + 's'}}></div>
      </div>
   );
};

export default InputComp;
