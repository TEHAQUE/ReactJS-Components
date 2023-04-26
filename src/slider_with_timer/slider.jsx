import React,{useState, useEffect} from 'react';
import InputComp from './comp/inputComp';
import './styl.css';
const Slider = ({sliderList}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(null);

  const changeSlide = (index) => { //function that change slide on click
    setSlideIndex(index);
    clearInterval(slideTimer);
    setSlideTimer(
      setTimeout(() => {
        setSlideIndex((slideIndex + 1) % sliderList.length); // the value is divided by the length of the array, after reaching the last index the function returned to the first argument
      }, 20000) // here you can change slide display time 20000 = 20s
    );
  };

  useEffect(() => {
    setSlideTimer(
      setTimeout(() => {
        setSlideIndex((slideIndex + 1) % sliderList.length);
      }, 20000) // here you can change slide display time 20000 = 20s
    );
    return () => {
      clearInterval(slideTimer);
    };
  }, [slideIndex]);

  return (
    <>
    {/* this is slider */}
      <div 
        className="slider"
          style={{backgroundImage: `url(${sliderList[slideIndex].img})`}}
          >
      </div>
       {/* if you don't want buttons to change the slide, skip this component  */}
       <div className="slider-menu">
         <div className="slider-indic-bar">
            {sliderList.map((user, i) =>{
               return <InputComp 
                  key={sliderList[i].id}
                     slideId={i}
                       anim={slideIndex === i ? true : false}
                         handleButtonClick={changeSlide}
                   />
                })
              }
            </div>
         </div>
      </>
    );
  };
export default Slider;
