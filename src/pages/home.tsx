import Navbar from '../components/navbar';
import RecentlyPlayed from '../components/recentlyPlayed';
import Suggestion from '../components/suggestion';
import Popular from '../components/popular'
import '../styles/components/_home.scss';


function home() {
  return (
    <div className="home">
      <Navbar />
      <RecentlyPlayed />
      <Suggestion />
      <Popular/>
    </div>
  );
}

export default home;
