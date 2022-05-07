import { useEffect, useRef, useState } from 'react';
import styles from './Planet.module.css';
import anime from 'animejs';

const Planet = (props) => {
    const tabsList = ['Overview', 'Structure', 'Surface'];
    const [planet, setPlanet] = useState(props.planet);

    const [activeTab, setActiveTab] = useState('Overview')
    const animeTab = useRef(null)
    
    

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

       animeTab.current.play();
       setActiveTab(tab)
    }

    const underlineAnimation = (target, widthVal) => {
        animeTab.current = anime({
            targets: target,
            width: widthVal,
            autoplay: false,
            easing: 'spring(1, 100, 12, 10)'
        })
    }

    useEffect(() => {
        toggleTab('Overview')
        setPlanet(props.planet)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.planet])

    return (
        <>
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
            {planet && <div className={styles.container}>
                
            { activeTab === 'Overview' && 
                <div>
                    overview
                    <img src={require(`../../assets/${planet.images.planet}`)} alt="planet_img" />
                    {/* <img src={require(`../../assets/planet-mercury.svg`)?.default} alt="planet_img" /> */}
                    {/* <img src={require('../../assets/geology-uranus.png')} alt="planet_img" /> */}
                </div>

                
            }
            {activeTab === 'Structure' && 
            <div>Structure</div>}
            {activeTab === 'Surface' && 
            <div>Surface</div>}
            </div>}
        </>
    )
}

export default Planet;