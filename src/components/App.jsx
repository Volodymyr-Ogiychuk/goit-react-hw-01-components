
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory';

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
      <Profile />
      <FriendList />
      <TransactionHistory />
      <Statistics />

    </div>
  );
};
