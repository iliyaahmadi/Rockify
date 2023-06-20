import '../styles/components/_recentlyplayed.scss';

function recentlyPlayed() {
  return (
    <div className="recent-container">
      <div className="recent-container__header">
        <h2>به گوش کردن ادامه بده</h2>
        <div> مشاهده همه </div>
      </div>
      <div className="recent-container__body recent-body">
        <div
          style={{
            backgroundImage: 'url("src/assets/img/traditional.jpg")',
          }}
          className="recent-body__item"
        >
          <div className="recent-body__item--blur"></div>
          <p>سنتی</p>
          <h2>موسیقی مردمی</h2>
        </div>
        <div
          style={{ backgroundImage: 'url("src/assets/img/weekend.jpg")' }}
          className="recent-body__item"
        >
          <div className="recent-body__item--blur"></div>
          <p> اخر هفته</p>
          <h2>جاده شمال</h2>
        </div>
        <div
          style={{ backgroundImage: 'url("src/assets/img/chill.jpg")' }}
          className="recent-body__item"
        >
          <div className="recent-body__item--blur"></div>
          <p> چیل</p>
          <h2>کتاب خوانی</h2>
        </div>
        <div
          style={{ backgroundImage: 'url("src/assets/img/mood.jpg")' }}
          className="recent-body__item"
        >
          <div className="recent-body__item--blur"></div>
          <p> موذ</p>
          <h2>صبح بارونی</h2>
        </div>
      </div>
    </div>
  );
}

export default recentlyPlayed;
