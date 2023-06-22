import '../styles/components/_categories.scss';

function categories() {
  return (
    <div className="categories">
      <div
        style={{
          backgroundImage: 'url("src/assets/img/dj.jpg")',
        }}
        className="categories__head categories-head"
      >
        <div className="categories__head--blur"></div>
        <div className="categories-head__btn">
          <img src="src/assets/icons/play.svg" alt="play button" />
        </div>
        <div className="categories-head__title">
          <p>اهنگ های تو</p>
          <b>روی ریپیت</b>
        </div>
      </div>
      <div className="categories__body categories-body">
        <div
          style={{
            backgroundImage: 'url("src/assets/img/rap.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>رپ</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/rock.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>راک</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/metal.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>متال</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/workout.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>ورزش</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/beach.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>ساحلی</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/rap.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>رپ</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/rock.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>راک</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/chill.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>چیل</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/chill.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>چیل</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/traditional.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>محلی</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/Artist.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>ریمیکس</p>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/beach.jpg")',
          }}
          className="categories-body__item"
        >
          <div className="categories-body__item--blur"></div>
          <p>ساحلی</p>
        </div>
      </div>
    </div>
  );
}

export default categories;
