import React from 'react';
import '../styles/components/_loginform.scss';
import { Link } from 'react-router-dom';

function loginForm() {
  return (
    <div className="loginform">
      <div className="loginform__head">
        <h2>سلام !</h2>
        <p>ثبت نام کن و رایگان به اهنگ های موردعلاقت گوش بده.</p>
      </div>
      <form action="">
        <div className="loginform__inputs">
          <input type="text" placeholder="نام کاربری" />
          <input type="text" placeholder="رمز عبور" />
          <button type="submit">ورود</button>
        </div>
        <div className="loginform__signup">
          <p>اکانت نداری؟</p>
          <Link to="/signup">ثبت نام</Link>
        </div>
      </form>
      <div className="loginform__seporator">یا ادامه بده با</div>
      <div className="loginform__other">
        <div className="other-btn">
          <p>Facebook</p>
          <img src="src/assets/icons/facebook.svg" alt="facebook-icon" />
        </div>
        <div className="other-btn">
          <p>Google</p>
          <img src="src/assets/icons/google.svg" alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

export default loginForm;
