import React, { useState } from "react";
import "../../style/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isModal, setmodal] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [btn, setBtn] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setBtn(value !== "123");
    setBtn("");
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to={"/"}>
              <h1>BOOKSHOP</h1>
            </Link>
            <Link to={"/as"}></Link>
          </div>
          <div className="logo1">
            <input type="text" placeholder="Search here" />
            <div className="ic">
              <button>
                <ion-icon name="cart-outline"></ion-icon>
              </button>
              <h4>Корзина</h4>
            </div>
            <div className="ic">
              <button onClick={() => setmodal(true)}>
                <ion-icon name="person-outline"></ion-icon>
              </button>
              <h4>Админ</h4>
            </div>

            {/* //////////////// */}

            <div
              className="modal-window"
              style={{ display: isModal ? "" : "none" }}
            >
              <div className="modal-content">
                <button className="cick" onClick={() => setmodal(false)}>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
                <div className="mo">
                  <div className="as">
                    <input
                      type="text"
                      placeholder="Введите значение"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <Link to={btn ? "#" : "/As"}>
                      <button onClick={() => setmodal(false)} disabled={btn}>
                        Нажми меня
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* //////////////// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
