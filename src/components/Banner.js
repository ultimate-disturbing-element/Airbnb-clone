import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import "./Banner.css";
import { useHistory } from 'react-router-dom';
import { Search } from './Search';

const Banner = () => {
    const history = useHistory();
    const [showSearch,setShowSearch]=useState(false);
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search/>}
                <Button onClick={()=>setShowSearch(!showSearch)} variant="outlined" className="banner_searchButton">{showSearch ? "Hide": "Search Dates"}</Button>
            </div>
           <div className="banner_info">
               <h1>Get out and Stretch your Imagination</h1>
               <h5>Plan a different kind of Gataway to uncover the hidden gems near you.</h5>
               <Button  onClick={() =>history.push('/search')}    variant="outlined">Explore Nearby</Button>
           </div>
        </div>
    )
}

export default Banner;
