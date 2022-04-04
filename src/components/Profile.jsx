import PropTypes from 'prop-types';
function Profile ({logo,username,biography}) {
    return (
        <div className="Profile">
            <figure>
                <img src={logo} alt="user profile"/>
            </figure>
            <h3>{username}</h3>
            <p>{biography}</p>
        </div>
    )
}
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
}
export default Profile;