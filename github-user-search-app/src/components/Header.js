import { useEffect, useState } from 'react';
import { ReactComponent as Moon } from '../assets/icon-moon.svg';
import { ReactComponent as Sun } from '../assets/icon-sun.svg'

const Header = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
      if(dark) {
          document.documentElement.dataset.theme = 'dark'
      }
      else {
        document.documentElement.dataset.theme = '';
      }
    }, [dark])
    
    return (
        <div className="header">
            <h1>devfinder</h1>
            <div className="switch-wrap" onClick={() => setDark(!dark)}>
                {/* <p>{!dark ? 'DARK' : 'LIGHT'}</p>
                <button>{!dark ? <Moon /> : <Sun />
                }</button> */}
                {!dark ? (<>DARK&nbsp;<Moon /></>) : (<>LIGHT&nbsp;<Sun /></>)}
            </div>
        </div>
    );
}

export default Header;