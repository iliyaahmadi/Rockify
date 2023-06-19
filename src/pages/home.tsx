import Navbar from '../components/navbar';
import RecentlyPlayed from '../components/recentlyPlayed';
import '../styles/components/_home.scss';

function home() {
  return (
    <div className="home">
      <Navbar />
      <RecentlyPlayed/>
    </div>
  );
}

export default home;
