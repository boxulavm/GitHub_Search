import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext)

    const [ text, setText ] = useState('');

    const onChange = e => {
        setText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('Please enter something', 'warning')
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }
        
        return (
            <div className='container my-5'>
                <form onSubmit={onSubmit} >
                    <input className="form-control" type="text" placeholder="Search For Users..." value={text} onChange={onChange} ></input>
                    <div className="text-center">
                        <input type="submit" value='Search' className='btn btn-outline-warning mt-3 search-btn' />
                        {' '}
                        
                    </div>
                </form>
                <div className="text-center">
                    { githubContext.users.length > 0 && (
                    <button onClick={githubContext.clearUsers} className='btn btn-outline-secondary mt-3 search-btn'>Clear</button>
                    )}
                </div>
            </div>
        )
    }

export default Search;