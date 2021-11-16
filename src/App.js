import Container from './components/container/Container';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendsList from './components/friendsList/FriendsList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './components/transactionHistory/transactions.json';
import friends from './components/friendsList/friends.json';
import data from './components/statistics/data.json';
import user from './components/profile/user.json';

function App() {
  return (
    <div>
      <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data}/>
      </Container>
      <Container>
        <Statistics stats={data}/>
      </Container>
      <Container>
        <FriendsList friends={friends}/>
      </Container>
      <Container>
        <TransactionHistory transactions={transactions}/>
      </Container>
    </div>
  );
}

export default App;
