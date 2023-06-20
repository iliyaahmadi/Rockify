import '../styles/components/_discover.scss';
import Navbar from '../components/navbar';
import Categories from '../components/categories';

function discover() {
  return (
    <div className="discover">
      <Navbar title="دسته بندی ها"/>
      <Categories />
    </div>
  );
}

export default discover;
