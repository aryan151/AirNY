import { useHistory } from 'react-router-dom';
import './Home.css'

function Home() {
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/listings")
  }

  return (  
    <div className="Homepage">  
      <form className="FlexibleForm" onSubmit={handleSubmit}>
        <div>test</div>
        <button className="FlexibleButton" type="submit">Explore</button>
      </form>
      <p> Explore Nearby</p>
    </div>
  );
}

export default Home;    