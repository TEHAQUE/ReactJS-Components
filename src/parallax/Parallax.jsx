import React,{useState, useEffect} from 'react';
import BgLayer from './comp/bgLayer';

const Parallax = ({images}) => {
   return (
         <div className='comp-wrapper'>
            <div className='comp'>
               {images.map((i, user)=>{
                  return(
                     <BgLayer key={`bgLayer ${user}`} img={i[0]} depth={i[1]}/>
                  )
               })}
            </div>
         </div>
   );
};

export default Parallax;
