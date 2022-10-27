
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import data from '../data/data.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template WORKS
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
/>
      <FriendList friends={friends} />
      <TransactionHistory items = {transactions} />
      <Statistics title="Upload stats" stats={data} />

    </div>
  );
};
