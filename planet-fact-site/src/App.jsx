import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Planet from './components/planet/Planet';

const App = () => {
  const [activePlanet, setActivePlanet] = useState();
  const [planetData, setPlanetData] = useState()

  

  const getPlanetData = useCallback(async () => {
    let data = await fetch("data.json")
      .then(res => res.json())
    setPlanetData(data)

  }, [])

  const getSelectedPlanet = (planet) => {
    setActivePlanet(planet)
  }


  useEffect(() => {
    getPlanetData();
  }, [getPlanetData])

  useEffect(() => {
    if(planetData)setActivePlanet(planetData[0]) 
  }, [planetData])

  return (
    <div className="App">
      <Navbar planetData={planetData} planetSwitch={getSelectedPlanet}/>
      <Planet planet={activePlanet} />
    </div>
  );
}

export default App;