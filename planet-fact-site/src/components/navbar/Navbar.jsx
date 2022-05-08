import styles from './Navbar.module.css';
import '../../global.css'
import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg'
import { ReactComponent as Chevron } from '../../assets/icon-chevron.svg'
import { useRef, useState } from 'react';
import anime from 'animejs';

const Navbar = ({planetData, planetSwitch}) => {    // Destructuring props props.planetData => planetData
    const menuAnimation = useRef(null);
    const staggeredAnimation = useRef(null);

    const [open, setOpen] = useState(false);

    const switchPlanet = planet => {
        planetSwitch(planet)
        setOpen(prev => !prev);
        if (window.screen.width <= 640) {
            staggeredAnime(-550, [0, -270], -50, "easeInOutExpo")
            menuAnimation.current.play();
            staggeredAnimation.current.play();
        }
    }

    const staggeredAnime = (listX, itemX, stagger, ease)  => {
        let ele = document.getElementById('planet-list')
        let elem = document.querySelectorAll("li[class^=Navbar_link-wrapper]")
        menuAnimation.current = anime({
            targets: ele,
            translateX: listX,
            autoplay: false,
            easing: ease
        });
        staggeredAnimation.current = anime({
            targets: elem,//'.toggle-item',
            translateX: itemX,
            delay: anime.stagger(stagger),
            easing: ease
        })
    }
    const toggleMenu = () => {
        
        if (!open) {
            staggeredAnime(2, [-270, 0], 50, "spring(1, 80, 10, 10)")
            
            menuAnimation.current.play();
            staggeredAnimation.current.play();
            setOpen(prev => !prev)
        }
        else {
            setOpen(prev => !prev)
         
            staggeredAnime(-550, [0, -270], -50, "easeInOutExpo")
         
            menuAnimation.current.play();
            staggeredAnimation.current.play();
        }
    }
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <h2>THE PLANETS</h2>
                <div className={styles.toggler} onClick={toggleMenu}><Hamburger /></div>
            </div>
            <div className={styles["planet-list"]} id="planet-list">
                <ul className={styles["planet-link"]}>
                    {planetData && planetData.map((planet) => {
                        return (
                                <li key={planet.name} className={`${styles["link-wrapper"]}`} onClick={() => switchPlanet(planet)}>
                                    <div className={`${styles.circle} ${`${planet.name}-link`}`}></div>
                                    <h3 className={styles.name}>{planet.name}</h3>
                                    <Chevron />
                                </li>

                        );
                    })}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;