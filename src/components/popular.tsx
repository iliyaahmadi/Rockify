import '../styles/components/_popular.scss';

function popular() {
  return (
    <div className="popular-container">
      <div className="popular-container__header">
        <h2>محبوب ترین ها</h2>
      </div>
      <div className="popular-container__body popular-body">
        <div className="popular-body__item item">
          <img
            src="src\assets\img\blindinglights.jpg"
            alt="music cover "
            className="item__cover"
          />
          <div className="item__title">
            <b>blinding lights</b>
            <p>the weeknd</p>
          </div>
          <img
            src="src\assets\icons\play.svg"
            alt="play button"
            className="item__btn"
          />
        </div>
        <div className="popular-body__item item">
          <img
            src="src\assets\img\nirvana.jpg"
            alt="music cover "
            className="item__cover"
          />
          <div className="item__title">
            <b>smells like teen spirit</b>
            <p>nirvana</p>
          </div>
          <img
            src="src\assets\icons\play.svg"
            alt="play button"
            className="item__btn"
          />
        </div>
        <div className="popular-body__item item">
          <img
            src="src\assets\img\paradiselana.jpg"
            alt="music cover "
            className="item__cover"
          />
          <div className="item__title">
            <b>paradise</b>
            <p>lanadelrey</p>
          </div>
          <img
            src="src\assets\icons\play.svg"
            alt="play button"
            className="item__btn"
          />
        </div>
      </div>
    </div>
  );
}

export default popular;
