import s from './FriendList.module.css'
import FriendListItem from './FriendListItem'
import friends from '../../data/friends.json'

const FriendList = () => {
    return (
        <>
        <p>Task Friends</p>
            <ul className={s.friendList}>
            {friends.map(({ id, ...rest }) => (
                <FriendListItem key = {id} {...rest} /> 
            ))}
            </ul>
        </>
    );
};

export default FriendList;