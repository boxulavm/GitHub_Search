import React, { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

        const { user, loading, getUser } = githubContext

        useEffect(() => {
            getUser(match.params.login);
            // eslint-disable-next-line
        }, []);

        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;


        if(loading) return <Spinner />

        return (
        <div className='container mt-5'>

                <div className="card shadow">
                        <h2 className="card-header text-info">
                            {name}
                        </h2>
                        <div className="card-body">
                            <h3>@{login}</h3>
                            <div className="text-center ">
                            <img src={avatar_url} className="card-img-top rounded-circle" alt={login} />
                            {' '}
                            Hireable: {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" /> }
                        </div>

                        </div>

                        <ul className='list-group m-2'>

                            <li className='list-group-item'>
                                    <strong>GitHub Profile: </strong><a href={html_url} target="blank">{html_url}</a>
                            </li>


                            {location && (
                                <li className='list-group-item'>
                                    <strong>Location: </strong>{location}
                                </li>
                                )
                            }

                            { bio && (
                            <li className='list-group-item'>
                                <strong>Bio: </strong>{bio}
                            </li>
                            )
                            }

                            {blog && (
                            <li className='list-group-item'>
                            <strong>Website: </strong>: <a href={blog} target='blank'>{blog}</a>
                            </li>
                            )
                            }             

                        </ul>
                        
                        
                        <div className="row p-3">
                            <span className="badge">Followers: {followers}</span>
                            <span className="badge">Following: {following}</span>
                            <span className="badge">Public Repos: {public_repos}</span>
                            <span className="badge">Public Gists: {public_gists}</span>
                        </div>

                    </div>


            <Link to='/' className='btn btn-info my-5'>Back to Search</Link>

        </div>

        )
    }

export default User;