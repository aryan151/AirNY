import styles from './Home.module.css';


const HomeMan = () => {

    return (
        <div
            className={styles.Man_outer_container}
        >
            <div
                className={styles.Man_inner_container}
            >
                <div
                    className={styles.header_text} 
                >
                        <h3>Manhattan</h3> 
                </div>
            </div>
        </div>
    )
};


export default HomeMan;