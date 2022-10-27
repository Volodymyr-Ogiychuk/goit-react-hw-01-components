import PropTypes from 'prop-types'
import s from './Profile.module.css'
import user from '../../data/user.json'

console.log('user', user);

const Profile = () => {
    const { avatar, username, tag, location, stats: { followers, views, likes }, } = user;
    return (
        <>
        <p>Task Profile</p>
        <div className={s.profile}>
            <div className={s.description}>
                
            <img
                src={avatar}
                alt="User avatar"
                className={s.avatar}
            />
            <p className={s.name}>{username}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.statsItem}>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{followers}</span>
            </li>
            <li className={s.statsItem}>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{views}</span>
            </li>
            <li className={s.statsItem}>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
    </>
    );
};

Profile.propTypes = { 
    user: PropTypes.object
}

export default Profile;