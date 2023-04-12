import React,{useState, useEffect} from 'react';
import InputComp from './comp/inputComp';
import './styl.css';
const Slider = ({sliderList}) => {
  const [slideId,setSlideId] = useState(0);
  const initialArray = [true, false, false, false, false];
  const [isAnimating, setIsAnimating] = useState(initialArray);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setSlideId((slideId + 1) % initialArray.length); // the value is divided by the length of the array, after reaching the last index the function returned to the first argument
        setIsAnimating(prevState =>
          prevState.map((user, i) => i === slideId ? true : false)
        );
      }, 20000); // here you can change slide display time 20000 = 20s
      return () => clearTimeout(timer);
    }, [slideId]);
     //function that change slide on click
    const handleButtonClick = index => {
      setSlideId(index);
      setIsAnimating(prevState =>
        prevState.map((user, i) => i === index ? true : false)
      );
    };
  
  return (
    <>
    // this is slider
      <div 
        className="slider"
          style={{backgroundImage: `url(${sliderList[slideId].img})`}}
          >
      </div>
      // if you don't want buttons to change the slide, skip this component 
       <div className="slider-menu">
         <div className="slider-indic-bar">
            {sliderList.map((user, i) =>{
               return <InputComp 
                  key={sliderList[i].id}
                     slideId={i}
                       anim={isAnimating[i]}
                         handleButtonClick={handleButtonClick}
                   />
                })
              }
            </div>
         </div>
      </>
    );
  };
export default Slider;