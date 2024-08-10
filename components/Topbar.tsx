import React from "react";
import styles from './topbar.module.css'
const Topbar: React.FC = () =>{
    return(
        <>
        <div className={`${styles.topbar_main}`}>
            <div className={`${styles.topbar}`}>
                <div className="logo_main">
                    <p className={`${styles.logo}`}>
                        <span>Good</span>
                        <span>Food</span>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Topbar;