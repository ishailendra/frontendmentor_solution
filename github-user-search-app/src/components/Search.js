import { useRef } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg'
const Search = (props) => {
    const gitUsername = useRef('')
    const findDev = username => {
        if(username) {
            props.findDev(username);
        }
    }
    return (
        <div className="card">
            <SearchIcon />
            <input type="text" name="search-user" id="search-user" placeholder='Search GitHub user name...' ref={gitUsername}/>
            <button onClick={() => findDev(gitUsername.current.value)}>Search</button>
        </div>
    );
}

export default Search;