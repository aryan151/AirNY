import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Home.module.css';


const HomeHeader = () => {
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/listings")
      } 

    return (
        <div
            className={styles.header_outer_container}
        >
            <div
                className={styles.header_inner_container}
            >
                <div
                    className={styles.header_text} 
                >
                    <h2>Not sure where to go?</h2>
                    <p>Perfect.</p>
                <button  onClick={handleSubmit}  className="styles.FlexibleButton" type="submit">Explore</button>
                       
                </div>
            </div>
        </div>
    )
};


export default HomeHeader;