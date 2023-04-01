import {useState, useEffect} from 'react';
import BgLayer from './comp/bgLayer';
import B4 from '../../img/b4.png'
import B3 from '../../img/b3.png'
import B2 from '../../img/b2.png'
import B1 from '../../img/b1.png'

const Parallax = () => {
       const [images, setImages] = useState([[B4, 0.05],[B3, 0.1],[B2, 0.2],[B1, 0.25]]);
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
