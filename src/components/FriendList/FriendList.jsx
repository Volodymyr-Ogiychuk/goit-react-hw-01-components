import s from './FriendList.module.css'
import FriendListItem from './FriendListItem'

const FriendList = ({friends}) => {

    return (
        
        <ul className={s.friendList}>
        {friends.map(({avatar, isOnline, id, name}) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} /> 
        ))}
        </ul>
    );
};

export default FriendList;