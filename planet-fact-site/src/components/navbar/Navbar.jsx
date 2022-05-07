import styles from './Navbar.module.css';
import '../../global.css'
import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg'
import { ReactComponent as Chevron } from '../../assets/icon-chevron.svg'
import { useRef, useState } from 'react';
import anime from 'animejs';

const Navbar = ({planetData, planetSwitch}) => {    // Destructuring props props.planetData => planetData
    const animation = useRef(null);
    const anim = useRef(null);

    const [open, setOpen] = useState(false);

    const switchPlanet = planet => {
        planetSwitch(planet)
        // let ele = document.getElementById('planet-list')
        // ele.classList.remove('hide')
        setOpen(prev => !prev);
        staggeredAnime(-550, [0, -270], -50, "easeInOutExpo")
        animation.current.play();
        anim.current.play();
    }

    const staggeredAnime = (listX, itemX, stagger, ease)  => {
        let ele = document.getElementById('planet-list')
        let elem = document.querySelectorAll("li[class^=Navbar_link-wrapper]")
        // console.log(elem);
        animation.current = anime({
            targets: ele,
            translateX: listX,
            autoplay: false,
            easing: ease
        });
        anim.current = anime({
            targets: elem,//'.toggle-item',
            translateX: itemX,
            delay: anime.stagger(stagger),
            easing: ease
        })
    }
    const toggleMenu = () => {
        // let ele = document.getElementById('planet-list')
        
        if (!open) {
            staggeredAnime(2, [-270, 0], 50, "spring(1, 80, 10, 10)")
            
            animation.current.play();
            anim.current.play();
            // ele.classList.add('hide');
            setOpen(prev => !prev)
        }
        else {
            // ele.classList.remove('hide')
            setOpen(prev => !prev)
         
            staggeredAnime(-550, [0, -270], -50, "easeInOutExpo")
         
            animation.current.play();
            anim.current.play();
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