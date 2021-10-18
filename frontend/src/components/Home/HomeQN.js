import styles from './Home.module.css';


const HomeQN= () => {

    return (
        <div
            className={styles.QN_outer_container}
        >
            <div
                className={styles.QN_overlay_container}
            >
                <div
                className={styles.QN_inner_container}
                >
                    <div
                        className={styles.header_text}
                    >
                        <h3>Queens</h3>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeQN;