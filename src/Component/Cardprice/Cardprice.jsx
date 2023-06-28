import React from "react";
import "./Cardprice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Cardprice = () => {
  return (
    <div className="wrapper">
      <div className="package">
        <div className="name">Paket Populer</div>
        <div className="price">Edumatrix Indonesia</div>
        <div className="trial">(5 & 10 Sesi)</div>
        <hr />
        <ul>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Sistem Belajar Privat 1 Guru 1 Siswa</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Belajar 1 Sesi per Hari (durasi 2 jam)</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Free Pendaftaran</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Free Assessment</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Konsultasi Personal</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> E-book Latihan Soal & Pembahasan</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> TDR (Tutoring Daily Report) Harian</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Progress Report diakhir Sesi</li>
        </ul>
      </div>
      <div className="package brilliant">
        <div className="name">Paket Champion</div>
        <div className="price">Edumatrix Indonesia</div>
        <div className="trial">(20, 40 & 60 Sesi)</div>
        <hr />
        <ul>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Sistem Belajar Privat 1 Guru 1 Siswa</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Belajar 1 Sesi per Hari (durasi 2 jam)</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Free Pendaftaran</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Free Assessment</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Konsultasi Personal</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> E-book Latihan Soal & Pembahasan</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> TDR (Tutoring Daily Report) Harian</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Modul Bahan Belajar</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Try Out Progresif</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Progress Report Bulanan</li>
        </ul>
      </div>
      <div className="package3">
        <div className="name">Paket Priority</div>
        <div className="price">Edumatrix Indonesia</div>
        <div className="trial">(80, 100 & 200 Sesi)</div>
        <hr />
        <ul>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Sistem Belajar Privat 1 Guru 1 Siswa</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Belajar 1 Sesi per Hari (durasi 2 jam)</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Free Pendaftaran</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Free Assessment</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Konsultasi Personal</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> E-book Latihan Soal & Pembahasan</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> TDR (Tutoring Daily Report) Harian</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Modul Bahan Belajar</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Try Out Progresif</li>
          <li className="card-li"><FontAwesomeIcon className="check-icon" icon={faCheck} /> Progress Report Bulanan</li>
        </ul>
      </div>
    </div>
  );
};

export default Cardprice;
