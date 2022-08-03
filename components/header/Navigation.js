import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ConfigContainer from "./ConfigContainer";
import NavigationItem from "./NavigationItem";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from './Navigation.module.scss';

function Navigation() {
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    return ( 
    <nav className={styles.navMenu}>
        <ul id={styles.nav_desktop}>
            <NavigationItem position={0} text={'01.home'} redirect='#homeSection'/>

            <NavigationItem position={31} text={'02.about'} redirect='#aboutme'/>

            <NavigationItem position={62} text={'03.work'} redirect='#work'/>

            <NavigationItem position={99} text={'04.contact'} redirect='#contact'/>
        </ul>

        <div id={styles.nav_mobile} className={isMobileNavActive ? styles.active : styles.desactive}>
            <div className={styles.background} >
                <FontAwesomeIcon 
                icon={faXmark} 
                className={styles.xmark}
                style={{height: '30px', position: 'absolute', top: '20px', right: '30px'}}
                onClick={() => setIsMobileNavActive(false)}
                />
            </div>
            

            <ul>
                <NavigationItem position={0} text={'01.home'} redirect='#homeSection'/>

                <NavigationItem position={31} text={'02.about'} redirect='#aboutme'/>

                <NavigationItem position={62} text={'03.work'} redirect='#work'/>

                <NavigationItem position={99} text={'04.contact'} redirect='#contact'/>
            </ul>
        </div>

        <ConfigContainer setIsMobileNavActive={setIsMobileNavActive} isMobileNavActive={isMobileNavActive}/>
    </nav>
     );
}

export default Navigation;