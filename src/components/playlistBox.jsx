import '../styles/components/_playlistbox.scss';

function playlistBox() {
  return (
    <div className="box">
      <div
        className="box__img"
        style={{ backgroundImage: 'url(src/assets/img/nirvana.jpg)' }}
      />
      <div className="box__title">
        <h2>راک</h2>
      </div>
      <div className="box__owner">
        <p>از</p>
        <p>iliyx</p>
      </div>
    </div>
  );
}

export default playlistBox;
