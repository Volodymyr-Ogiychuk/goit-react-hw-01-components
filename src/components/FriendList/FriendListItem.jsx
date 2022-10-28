import s from './FriendList.module.css'
import PropTypes from 'prop-types'

const FriendListItem = (props) => {
    const { avatar, name, isOnline } = props;
    return (
        <li className={s.item}>
            <span className={(isOnline) ? [s.status] : [s.statusIsOnline]}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="28" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendListItem;