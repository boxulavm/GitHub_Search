import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = props => { 
        const {login, avatar_url} = props.user;
        return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card user-card shadow p-3 m-1">
                <img src={avatar_url} className="card-img-top rounded-circle" alt={login} />
                <div className="card-body text-center">
                    <h5 className="card-title">{login}</h5>
                    <Link to={`/user/${login}`} className="btn btn-info">More</Link>
                </div>
            </div>
        </div>
        )
    }

export default UserItem
