import styles from './Home.module.css';


const HomeBK = () => {

    return (
        <div
            className={styles.BK_outer_container}
        >
            <div
                className={styles.BK_overlay_container}
            >
                <div
                className={styles.BK_inner_container}
                >
                    <div
                        className={styles.header_text}
                    >
                        <h3>Brooklyn</h3>
                        <p>TEXTTEXTEXT</p>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeBK;