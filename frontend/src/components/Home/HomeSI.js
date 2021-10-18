import styles from './Home.module.css';


const HomeSI = () => {

    return (
        <div
            className={styles.SI_outer_container}
        >
            <div
                className={styles.SI_overlay_container}
            >
                <div
                className={styles.SI_inner_container}
                >
                    <div
                        className={styles.header_text}
                    >
                        <h3>Staten Island</h3>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeSI;