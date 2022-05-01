// import {ReactComponent as Moon} from './assets/icon-moon.svg';
import './index.css';
// import { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import UserCard from './components/UserCard';
import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState({});

  const baseUrl = 'https://api.github.com/users/';
  const findDev = async username => { 
    let usr = await fetch(baseUrl+username).then(res => res.json())
    setUser(usr)
  }

  useEffect(() => {
    findDev('octocat')
  },[])

  return (
    <div className='app'>
      <main>
        <Header />
        <Search findDev={findDev} />
        <UserCard user={user}/>
      </main>
    </div>
  );
}

export default App;