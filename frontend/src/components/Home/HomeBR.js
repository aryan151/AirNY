import styles from './Home.module.css';


const HomeBR = () => {

    return (
        <div
            className={styles.BR_outer_container}
        >
            <div
                className={styles.BR_overlay_container}
            >
                <div
                className={styles.BR_inner_container}
                >
                    <div
                        className={styles.header_text}
                    >
                        <h3>Bronx</h3>
                        <p>TEXTTEXTEXT</p>

                    </div>    
                </div>
            </div>
        </div>
    )
};

export default HomeBR;