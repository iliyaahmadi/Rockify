import React from 'react';
import '../styles/components/_signupform.scss';
import { Link } from 'react-router-dom';

function signupform() {
  return (
    <div className="signupform">
      <div className="signupform__head">
        <h2>سلام !</h2>
        <p>ثبت نام کن و رایگان به اهنگ های موردعلاقت گوش بده.</p>
      </div>
      <form action="">
        <div className="signupform__inputs">
          <input type="text" placeholder="نام کاربری" />
          <input type="text" placeholder="ایمیل" />
          <input type="text" placeholder="رمز عبور" />
          <input type="text" placeholder="تکرار رمز عبور" />
          <button type="submit">ورود</button>
        </div>
        <div className="signupform__signup">
          <p> قبلا اکانت ساختی ؟</p>
          <Link to="/login">ثبت نام</Link>
        </div>
      </form>
      <div className="signupform__seporator">یا ادامه بده با</div>
      <div className="signupform__other">
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

export default signupform;
