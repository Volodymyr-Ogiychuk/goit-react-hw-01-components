import s from './FriendList.module.css'
import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types'

const FriendList = ({friends}) => {
    return (
        <ul className={s.friendList}>
        {friends.map(({avatar, isOnline, id, name}) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} /> 
        ))}
        </ul>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;