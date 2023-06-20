import '../styles/components/_categories.scss';

function categories() {
  return (
    <div className="categories">
      <div
        style={{
          backgroundImage: 'url("src/assets/img/dj.jpg")',
        }}
        className="categories__head head"
      >
        <div className="categories__head--blur"></div>
        <div className="head__btn">
          <img src="src/assets/icons/play.svg" alt="play button" />
        </div>
        <div className="head__title">
          <p>اهنگ های تو</p>
          <b>روی ریپیت</b>
        </div>
      </div>
      <div className="categories__items"></div>
    </div>
  );
}

export default categories;
