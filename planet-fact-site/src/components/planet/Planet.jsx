import { useEffect, useRef, useState } from 'react';
import styles from './Planet.module.css';
import anime from 'animejs';
import { ReactComponent as Source } from '../../assets/icon-source.svg'
const Planet = (props) => {
    const tabsList = ['Overview', 'Structure', 'Surface'];
    const [planet, setPlanet] = useState(props.planet);

    const [activeTab, setActiveTab] = useState('Overview');
    const tabAnim = useRef(null);
    const flyInAnim = useRef(null);
    // const roundingAnim = useRef(null);

    

    const toggleTab = tab => {
        let activeTab = document.getElementById(tab);
        activeTab.style.display = 'block';
        
        tabsList.map(tabItem => {
            if(tabItem !== tab) {
                let item = document.getElementById(tabItem);
                if(item.style.display !== "") {
                    underlineAnimation(item, ['100%', '0%']);
                    item.style.display = 'none';
                }
            }
            return null;
        })

        underlineAnimation(activeTab, ['0%', '100%'])

       tabAnim.current.play();
       setActiveTab(tab)

       setTimeout(() => {
        let target = document.getElementById('planet_img');
        
        flyInAnimation(target);
        flyInAnim.current.play();

        if(tab === 'Surface') {
            let target = document.getElementById('planet_img_geo');
        
            flyInAnimation(target);
            flyInAnim.current.play();
        }
       
    }, 0);


    }

    const underlineAnimation = (target, widthVal) => {
        tabAnim.current = anime({
            targets: target,
            width: widthVal,
            autoplay: false,
            easing: 'spring(1, 100, 12, 10)'
        })
    }

    const flyInAnimation = (target) => {
        flyInAnim.current = anime({
            targets: target,
            translateX: [
                { value: -1500, duration: 0, delay: 0},
                { value: 0, duration: 1500, delay: 0, easing: 'easeOutExpo'},
            ],
            translateY: [
                { value: 1500, duration: 0, delay: 0},
                { value: 0, duration: 1500, delay: 0, easing: 'easeOutExpo'},
            ],
            scale: [
                { value: 7, duration: 100, delay: 0},
                { value: 1, duration: 1500, delay: 0, easing: 'easeOutExpo'},
            ],
            autoplay: false,
            loop: false
        })
    }

    /*
    const roundingAnimation = target => {
        console.log("Rounding: ", target, target.innerHTML);
        roundingAnim.current = anime({
            targets: target,
            value: [0, target.innerHTML],
            round: 1,
            easing: 'easeInOutExpo',
            
            loop: false
        })
    }


        let roundingTarget = document.querySelectorAll("h2[class^=Planet_key-value]")
        roundingAnimation(roundingTarget[0])
        roundingAnim.current.play();
*/
    useEffect(() => {
        toggleTab('Overview');
        setPlanet(props.planet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.planet])

    return (
        <div className={styles["planet-container"]}>
            <nav className={styles['planet-details-tab']}>
                <ul className={styles['details-tab']}>
                    {tabsList.map(tab => {
                        return (
                            <li key={tab} onClick={() => toggleTab(tab)}>
                                <a href="#structure"><h3>{tab}</h3></a>
                                <div id={tab} className={styles.underline}></div>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            {planet && <div className={styles["info-container"]}>
                
                {activeTab === 'Overview' &&
                    <>
                        <div className={styles["image-wrapper"]}>
                            <img id='planet_img' src={require(`../../assets/${planet.images.planet}`)} alt="planet_img" />
                        </div>
                        {/* <img src={require(`../../assets/planet-mercury.svg`)?.default} alt="planet_img" /> */}
                        {/* <img src={require('../../assets/geology-uranus.png')} alt="planet_img" /> */}
                        <h2 className={styles["planet-name"]}>{planet.name}</h2>
                        <p>{planet.overview.content}</p>
                        <div className={styles.source}>Source:&nbsp;&nbsp;<a href={planet.overview.source}>Wikipedia</a><Source /></div>

                    </>


                }
                {activeTab === 'Structure' &&
                    <>
                        <div className={styles["image-wrapper"]}>
                            <img id='planet_img' src={require(`../../assets/${planet.images.internal}`)} alt="planet_img" />
                        </div>
                        <h2 className={styles["planet-name"]}>{planet.name}</h2>
                        <p>{planet.structure.content}</p>
                        <div className={styles.source}>Source:&nbsp;&nbsp;<a href={planet.structure.source}>Wikipedia</a><Source /></div>

                    </>
                }
                {activeTab === 'Surface' &&
                    <>
                        <div className={styles["image-wrapper"]}>
                            <img id='planet_img' src={require(`../../assets/${planet.images.internal}`)} alt="planet_img" />
                            <img id='planet_img_geo' className={styles.geology} src={require(`../../assets/${planet.images.geology}`)} alt="planet_img" />
                        </div>
                        <h2 className={styles["planet-name"]}>{planet.name}</h2>
                        <p>{planet.geology.content}</p>
                        <div className={styles.source}>Source:&nbsp;&nbsp;<a href={planet.geology.source}>Wikipedia</a><Source /></div>
                    </>
                }

            <div className={styles["properties-grid"]}>
                <div className={styles.property}>
                    <p className={styles["key-name"]}>Rotation Time</p>
                    <h2 className={styles["key-value"]}>{planet.rotation}</h2>
                </div>
                <div className={styles.property}>
                    <p className={styles["key-name"]}>Revolution Time</p>
                    <h2 className={styles["key-value"]}>{planet.revolution}</h2>
                </div>
                <div className={styles.property}>
                    <p className={styles["key-name"]}>Radius</p>
                    <h2 className={styles["key-value"]}>{planet.radius}</h2>
                </div>
                <div className={styles.property}>
                    <p className={styles["key-name"]}>Average Temp.</p>
                    <h2 className={styles["key-value"]}>{planet.temperature}</h2>
                </div>

            </div>
            </div>}
            
        </div>
    )
}

export default Planet;