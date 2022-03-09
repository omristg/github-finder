import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const UserPreview = ({ user: { login, avatar_url } }) => {

    return (
        <div className="card shadow-md compact side bg-base-100">
            <div className="card-body flex-row items-center space-x-4">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14 ">
                            <img src={avatar_url} alt="img" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <Link to={`/user/${login}`} className="text-base-content text-opacity-40">
                        Visit profile
                    </Link>
                </div>

            </div>
        </div>
    )
}

UserPreview.propTypes = {
    user: PropTypes.object.isRequired
}