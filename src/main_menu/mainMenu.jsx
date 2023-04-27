import {useState, useEffect} from 'react';
import MainMenuList from './mainMenuList';
import './style.css';
const MainMenu =({searchFieldName})=>{
    const [scrollTop, setScrollTop] = useState(0);
    const [isShrinked, setIsShrinked] = useState('notShrinked');
    
      useEffect(() => {
        const handleScroll = event => {
          setScrollTop(window.pageYOffset);
        };
         window.addEventListener('scroll', handleScroll);
         if(scrollTop>80){
            return setIsShrinked('shrinked');
            } else {
            return setIsShrinked('notShrinked');
        }
        
      }, [scrollTop]);
    
    return(
        <div className={`mainMenu-m ${isShrinked}`}>
          <div className={`mainMenu`}>
            <input className="searchInput"
              type="search"
                onChange={searchFieldName}
                  placeholder="Search article..."
            />
            <MainMenuList/>
          </div>
        </div>
    );
}
export default MainMenu;