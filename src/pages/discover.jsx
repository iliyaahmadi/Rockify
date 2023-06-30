import '../styles/pages/_discover.scss';
import Navbar from '../components/navbar';
import Categories from '../components/categories';

function discover() {
  return (
    <div className="discover">
      <Navbar title="دسته بندی ها" search={true} />
      <Categories />
    </div>
  );
}

export default discover;
