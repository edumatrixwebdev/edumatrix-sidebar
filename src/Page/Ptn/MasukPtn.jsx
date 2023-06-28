import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChalkboardTeacher,
  faHistory,
  faHouse,
  faPhone,
  faRemove,
  faStethoscope,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import "./MasukPtn.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ptn from "../../Component/assets/ptn.png";
import Cardprice from "../../Component/Cardprice/Cardprice";
import Cardprice2 from "../../Component/Cardprice2/Cardprice2";
import Footer from "../../Component/Footer/Footer";

const MasukPtn = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/Home");
  };
  const goToKedokteran = () => {
    navigate("/Kedokteran");
  };
  const goToMasukPtn = () => {
    navigate("/MasukPtn");
  };
  const goToTeacher = () => {
    navigate("/Teacher");
  };
  const goToAlumni = () => {
    navigate("/Alumni");
  };

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <FontAwesomeIcon
            icon={faBars}
            className="icon-bars"
            onClick={showSidebar}
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <FontAwesomeIcon icon={faRemove} className="icon-close" />
              <div className="parent-title">
                <h3 className="title-sidebar">Matrix Indonesia</h3>
              </div>
            </li>
            <div className="parent-isi1" onClick={() => goToHome()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faHouse} /> Home
              </h4>
            </div>

            <div className="parent-isi2" onClick={() => goToKedokteran()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faStethoscope} /> Bimbel Kedokteran
              </h4>
            </div>

            <div className="parent-isi3-active" onClick={() => goToMasukPtn()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faUniversity} /> Masuk PTN
              </h4>
            </div>

            <div className="parent-isi4" onClick={() => goToTeacher()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faChalkboardTeacher} /> Our Teacher
              </h4>
            </div>

            <div className="parent-isi5" onClick={() => goToAlumni()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faHistory} /> Alumni Story
              </h4>
            </div>

            <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
              <div className="parent-isi6">
                <button className="btn-sidebar">Daftar Sekarang</button>
              </div>
            </a>

            <p className="copyright">
              © All rights reserved • Edumatrix Indonesia
            </p>
          </ul>
        </nav>
      </IconContext.Provider>

      {/* ISI PTN */}
      <div className="box-ptn">
        <div className="content-ptn">
          <div>
            <h1 className="title-ptn">
              Bimbel UTBK SNBT Bersama Edumatrix Indonesia
            </h1>
            <p className="desk-ptn">
              Bimbel UTBK SNBT by Edumatrix Indonesia adalah program Bimbel yang
              dikhususkan untuk Siswa yang ingin lolos UTBK SNBT dengan
              gemilang.
            </p>

            <div className="parent-detail">
              <div className="box-detail">
                <div className="icon">
                  <span className="icon-detail">
                    <img
                      className="icon-detail"
                      src="https://cdn-icons-png.flaticon.com/512/5064/5064943.png"
                      alt=""
                    />
                    <p className="desk-icon">
                      <strong>Siswa Belajar</strong>
                      <br />
                      <span style={{ color: "rgb(0, 149, 218)" }}>
                        <strong>12.000+</strong>
                      </span>
                    </p>
                  </span>
                  <span className="icon-detail">
                    <img
                      className="icon-detail"
                      src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                      alt=""
                    />
                    <p className="desk-icon">
                      <strong>Tutor Edumatrix Indonesia</strong>
                      <br />
                      <span style={{ color: "rgb(0, 149, 218)" }}>
                        <strong>5.000+</strong>
                      </span>
                    </p>
                  </span>
                  <span className="icon-detail">
                    <img
                      className="icon-detail"
                      src="https://cdn-icons-png.flaticon.com/512/4697/4697984.png"
                      alt=""
                    />
                    <p className="desk-icon">
                      <strong>Siswa Berhasil</strong>
                      <br />
                      <span style={{ color: "rgb(0, 149, 218)" }}>
                        <strong>95%</strong>
                      </span>
                    </p>
                  </span>
                  <span className="icon-detail">
                    <img
                      className="icon-detail"
                      src="https://cdn-icons-png.flaticon.com/128/10015/10015050.png"
                      alt=""
                    />
                    <p className="desk-icon">
                      <strong>
                        Tingkat Kepuasan <br />
                        Siswa
                      </strong>
                      <br />
                      <span style={{ color: "rgb(0, 149, 218)" }}>
                        <strong>9/10</strong>
                      </span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="parent-btn">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
                <button className="btn-daftar-viawa">
                  <FontAwesomeIcon icon={faWhatsapp} className="icon-wa" />{" "}
                  Daftar Via WhatsApp
                </button>
              </a>

              <a href="tel:+6281215523902">
                <button className="btn-daftar-viahp">
                  <FontAwesomeIcon icon={faPhone} className="icon-hp" /> Daftar
                  Via Telepon
                </button>
              </a>
            </div>
          </div>

          <img className="img-ptn" src={ptn} alt="" />
        </div>
      </div>

      <div className="run-img">
        <marquee scrollamount="8" behavior="alternate">
          <div className="parent-all-img">
            <div className="parent-img-marque">
              <img
                className="img-marque1"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/SNBT-400x400.jpg"
                alt=""
              />
              {/* <h2 className="title-run1">Bimbel UTBK SNBT</h2>
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Program%20Bimbel%20SNBT.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chat-ptn1">Chat Us Now</button>
              </a> */}
            </div>
            <div className="parent-img-marque">
              <img
                className="img-marque"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UMPTN-cover-400x400.jpg"
                alt=""
              />
              {/* <h2 className="title-run">Bimbel UTBK SNBT</h2>
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Program%20Bimbel%20UMPTN.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chat-ptn">Chat Us Now</button>
              </a> */}
            </div>
            <div className="parent-img-marque">
              <img
                className="img-marque"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/CTA-UMPTKIN-400x400.jpg"
                alt=""
              />
              {/* <h2 className="title-run">Bimbel UTBK SNBT</h2>
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Program%20Bimbel%20UMPTKIN.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chat-ptn">Chat Us Now</button>
              </a> */}
            </div>

            <div className="parent-img-marque">
              <img
                className="img-marque4"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Bimbel-Bahasa-Asing-CTA-1-400x400.jpg"
                alt=""
              />
              {/* <h2 className="title-run">Bimbel UTBK SNBT</h2>
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20Bahasa%20Asing.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chat-ptn">Chat Us Now</button>
              </a> */}
            </div>
          </div>
        </marquee>
      </div>

      <div className="home-tutoring">
        <div className="text-tutoring">
          <h2 className="title-tutoring">1 on 1 - Home Tutoring</h2>
          <h3 className="desk-tutoring">
            Paket ini merupakan paket belajar les privat (personal tutoring)
            dengan sistem One on One (satu guru satu siswa).
          </h3>
        </div>
        <Cardprice />
      </div>

      <div className="logo-univ">
        <img
          className="main-logo-univ"
          src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Group-560.png"
          alt=""
        />
      </div>

      <div className="home-tutoring">
        <div className="text-tutoring">
          <h2 className="title-tutoring">
            Small Group (1 on 2) - Home Tutoring
          </h2>
          <h3 className="desk-tutoring">
            Paket ini merupakan paket belajar les privat (personal tutoring)
            dengan sistem satu guru untuk dua siswa.
          </h3>
        </div>
        <Cardprice2 />
      </div>

      <div className="daftar-end">
        <h3 className="title-daftar-end">Ayo Daftar Edumatrix</h3>
        <div className="group-btn-daftarend">
          <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20Kedokteran.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
            <button className="btn-wa-end">
              <FontAwesomeIcon icon={faWhatsapp} /> Daftar Via WhatsApp
            </button>
          </a>
          <a href="tel:+6281215523902">
            <button className="btn-hp-end">
              <FontAwesomeIcon icon={faPhone} /> Daftar Via WhatsApp
            </button>
          </a>
        </div>
        <p className="desk-daftar-end">Dibimbing sampai lulus PTN Impian !</p>
      </div>

      <Footer />

      <div className="box-wa">
        <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
          <button className="btn-wa">
            <a
              className="wa"
              href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
          </button>
        </a>
        <a href="tel:+6281215523902">
          <button className="btn-call">
            <a href="tel:+6281215523902" className="call">
              <FontAwesomeIcon icon={faPhone} /> Telepon
            </a>
          </button>
        </a>
      </div>
    </React.Fragment>
  );
};

export default MasukPtn;
