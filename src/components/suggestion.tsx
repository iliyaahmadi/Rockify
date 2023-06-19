import '../styles/components/_suggestion.scss';

function suggestion() {
  return (
    <div className="suggestion-container">
      <div className="suggestion-container__header">
        <h2>برای تو</h2>
        <div> مشاهده همه </div>
      </div>
      <div className="suggestion-container__body suggestion-body">
        <div
          style={{
            backgroundImage: 'url("src/assets/img/youryear.jpg")',
          }}
          className="suggestion-body__item"
        >
          <p>سال تو</p>
          <h2>1401</h2>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/popmusic.jpg")',
          }}
          className="suggestion-body__item"
        >
          <p>بهترین های</p>
          <h2>موسیقی پاپ</h2>
        </div>
        <div
          style={{
            backgroundImage: 'url("src/assets/img/artist.jpg")',
          }}
          className="suggestion-body__item"
        >
          <p>بهترین</p>
          <h2>آرتیست های تو</h2>
        </div>
      </div>
    </div>
  );
}

export default suggestion;
