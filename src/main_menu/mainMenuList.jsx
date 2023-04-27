import React from "react";
import {Link} from "react-router-dom";

const MainMenuList =()=>{
    return(
        <div className="mainMenuList">
            <Link to="/news" className="mainMenuBtn" >News</Link>
            <Link to="/podcasts" className="mainMenuBtn" >Podcasts</Link>
            <Link to="/" className="mainMenuLogo">SW News</Link>
            <Link to="/articles" className="mainMenuBtn" >Articles</Link>
            <Link to="/gallery" className="mainMenuBtn" >Gallery</Link>
        </div>
    )
}
export default MainMenuList;