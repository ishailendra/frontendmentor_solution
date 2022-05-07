import styles from './Navbar.module.css';
import '../../global.css'
import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg'
import { ReactComponent as Chevron } from '../../assets/icon-chevron.svg'
import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const Navbar = () => {
    const [planetData, setPlanetData] = useState()
    // const [playing, setPlaying] = useState(false);
    const animation = useRef(null);
    const anim = useRef(null);

    const getPlanetData = async () => {
        let data = await fetch("data.json")
            .then(res => res.json())
        // console.log(data[0].name);
        setPlanetData(data)

    }


    useEffect(() => {
        getPlanetData();
    }, [])

    const staggeredAnime = (listX, itemX, stagger, ease)  => {
        let ele = document.getElementById('planet-list')
        animation.current = anime({
            targets: ele,
            translateX: listX,
            autoplay: false,
            easing: ease
        });
//[-270, 0],
        anim.current = anime({
            targets: '.toggle-item',
            translateX: itemX,
            delay: anime.stagger(stagger),
            easing: ease
        })
    }
    const toggleMenu = () => {
        let ele = document.getElementById('planet-list')
        
        if (!ele.classList.contains('hide')) {
            staggeredAnime(2, [-270, 0], 50, "spring(1, 80, 10, 10)")
            

            animation.current.play();
            anim.current.play();
            ele.classList.add('hide')
        }
        else {
            ele.classList.remove('hide')
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
                            <>
                                <li key={planet.name} className={`${styles["link-wrapper"]} toggle-item`}>
                                    <div className={`${styles.circle} ${styles[`${planet.name}-link`]}`}></div>
                                    <a href="http://locahost:3000"><h3>{planet.name}</h3></a>
                                    <Chevron />
                                </li>

                            </>
                        );
                    })}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;