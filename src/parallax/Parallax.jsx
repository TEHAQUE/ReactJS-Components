import React,{useState, useEffect} from 'react';
import BgLayer from './comp/bgLayer';
import '.style.css';

const Parallax = ({images}) => {
   return (
         <div className='comp-wrapper'>
            {images.map((i, user)=>{
               return(
                  <BgLayer key={`bgLayer ${user}`} img={i[0]} depth={i[1]}/>
               )
            })}
         </div>
   );
};

export default Parallax;
