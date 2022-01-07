import './Home.css'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"  
import { useHistory } from 'react-router-dom'; 
import {fetchListings} from '../../store/listings' 

function Home() {
    const history = useHistory()
    const dispatch = useDispatch()

    const splashbtnclick = (e) => {
      e.preventDefault();
      history.push("/listings")
    }
  
    useEffect(()=> {
        dispatch(fetchListings()) 
    }, [dispatch])

  return (   
    <div>
        <div className="Homepagefirst"> 
            <form className="topsplash" onSubmit={splashbtnclick}>
            <div>Not sure where to go? Perfect.</div>
            <button className="topbtnsplash" type="submit">I'm flexible</button>
        </form>
    </div>
    <div>
    <p>test</p> 
    </div>
  </div>

    
)
};
export default Home;      