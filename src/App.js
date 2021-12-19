import Profile from './components/SocialProfile/Profile';
import user from './components/SocialProfile/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendsList from './components/FriendsList/FriendsList';
import friends from './components/FriendsList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transaction from './components/TransactionHistory/transaction.json';

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
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
