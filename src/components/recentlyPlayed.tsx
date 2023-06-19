import '../styles/components/_recentlyplayed.scss';

function recentlyPlayed() {
  return (
    <div className="recent-container">
      <div className="recent-container__header">
        <h2>به گوش کردن ادامه بده</h2>
        <div> مشاهده همه </div>
      </div>
      <div className="recent-container__body body">
        <div
          style={{
            backgroundImage: 'url("src/assets/img/traditional.jpg")',
          }}
          className="body__item"
        >
          <p>سنتی</p>
          <h2>موسیقی مردمی</h2>
        </div>
        <div
          style={{ backgroundImage: 'url("src/assets/img/weekend.jpg")' }}
          className="body__item"
        >
          <p> اخر هفته</p>
          <h2>جاده شمال</h2>
        </div>
        <div
          style={{ backgroundImage: 'url("src/assets/img/chill.jpg")' }}
          className="body__item"
        >
          <p> چیل</p>
          <h2>کتاب خوانی</h2>
        </div>
        <div
          style={{ backgroundImage: 'url("src/assets/img/mood.jpg")' }}
          className="body__item"
        >
          <p> موذ</p>
          <h2>صبح بارونی</h2>
        </div>
      </div>
    </div>
  );
}

export default recentlyPlayed;
