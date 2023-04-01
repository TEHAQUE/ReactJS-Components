import {useState, useEffect} from 'react';

const BgLayer = ({img, depth}) => {
   const [scrollTop, setScrollTop] = useState(0)
   useEffect(()=>{
      const handleScroll = () => setScrollTop(window.scrollY);
      window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
   })
   return (
      <div className='bg-layer'
      style={{backgroundImage: `url(${img})`, transform: `translateY(-${scrollTop * depth}px)`}}></div>
   );
};

export default BgLayer;
