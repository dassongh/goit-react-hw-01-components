import Container from './components/container/Container';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import data from './components/statistics/data.json';
import user from './components/profile/user.json';
import './App.css';

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
    </div>
  );
}

export default App;
