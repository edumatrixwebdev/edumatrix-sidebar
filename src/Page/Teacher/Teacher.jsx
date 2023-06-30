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
import "./Teacher.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import guru from "../../Component/assets/guru.png";
import Footer from "../../Component/Footer/Footer";

const Teacher = () => {
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

            <div className="parent-isi3" onClick={() => goToMasukPtn()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faUniversity} /> Masuk PTN
              </h4>
            </div>

            <div className="parent-isi4-active" onClick={() => goToTeacher()}>
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

      {/* ISI GURU */}
      <div className="box-guru">
        <div className="content-guru">
          <div>
            <h1 className="title-guru">
              Professional teacher at Edumatrix Indonesia
            </h1>
            <p className="desk-guru">
              Guru Profesional di Edumatrix Indonesia akan membantumu meraih PTN
              Impianmu !
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

          <img className="img-guru" src={guru} alt="" />
        </div>
      </div>

      <div className="marque-teacher">
        <marquee>
          <h2 className="run-text-teacher">
            Dengan Guru yang Berpengalaman Anda bisa Meraih PTN Impian | Dengan
            Guru yang Berpengalaman Anda bisa Meraih PTN Impian | Dengan Guru
            yang Berpengalaman Anda bisa Meraih PTN Impian | Dengan Guru yang
            Berpengalaman Anda bisa Meraih PTN Impian | Dengan Guru yang
            Berpengalaman Anda bisa Meraih PTN Impian | Dengan Guru yang
            Berpengalaman Anda bisa Meraih PTN Impian | Dengan Guru yang
            Berpengalaman Anda bisa Meraih PTN Impian
          </h2>
        </marquee>
      </div>

      <div className="img-all-teacher">
        <img
          className="pro-teacher"
          src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Group-561.jpg"
          alt=""
        />
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
              href="https://web.whatsapp.com/send?phone=6281215523902&text=HaloKak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F"
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

export default Teacher;
