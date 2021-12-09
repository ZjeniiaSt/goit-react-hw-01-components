import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';

import Statistics from './components/statistics/Statistics';
import data from './components/statistics/data.json';

import FriendsList from './components/friends-list/Friends-list';
import friends from './components/friends-list/friends.json';

import TransactionHistory from './components/transaction-history/Transaction-history';
import transaction from './components/transaction-history/transaction.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
