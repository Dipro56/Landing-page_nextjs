import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './../styles/Package.module.css';
import arrow from './../public/assets/package/arrow.png';
import hd from './../public/assets/package/hd.png';
import download from './../public/assets/package/download.png';
import lock from './../public/assets/package/lock.png';

export default function Home() {
  return (
    <div className={style['main-container']}>
      <Navbar collapseOnSelect expand="lg" className="container">
        <div className="container d-flex justify-content-start">
          <Nav.Link href="/" className="fs-6 link-color">
            <div>
              <Image src={arrow}></Image>
            </div>
          </Nav.Link>
          <Nav.Link href="/">
            <div className="pt-2 ms-3">
              <p className={style['text-style']}>Packages</p>
            </div>
          </Nav.Link>
        </div>
      </Navbar>
      <div className={style['container']}>
        <div
          className={`container ${style[('container', 'header-text-style')]}`}
        >
          Enjoy Unlimited Music & Videos
        </div>
      </div>

      <div
        className={`d-flex justify-content-center align-items-center ${style['normal-container']}`}
      >
        <div
          className={`container d-flex ${
            style[('container', 'normal-text-style')]
          }`}
        >
          <div className="me-3">
            <Image src={lock}></Image>
          </div>
          Unlock premium Natok and dramas
        </div>
      </div>

      <div
        className={`d-flex justify-content-center align-items-center ${style['other-container']}`}
      >
        <div
          className={`container d-flex ${
            style[('container', 'normal-text-style')]
          }`}
        >
          <div className="me-3">
            <Image src={download}></Image>
          </div>
          Unlimited download
        </div>
      </div>

      <div
        className={`d-flex justify-content-center align-items-center ${style['other-container']}`}
      >
        <div
          className={`container d-flex ${
            style[('container', 'normal-text-style')]
          }`}
        >
          <div className="me-3">
            <Image src={hd}></Image>
          </div>
          Watch in HD up to 4K resolution
        </div>
      </div>

      <div
        className={`d-flex justify-content-center align-items-center ${style['rest-container']}`}
      >
        <div
          className={`container d-flex ${
            style[('container', 'normal-text-style')]
          }`}
        >
          <div className={`${style['rest-container']}`}>
            <div className={`${style['header-text-style']}`}>
              Select premium plan
            </div>
            <div className={`${style['normal-text-style']}`}>
              Ad-Free, Unlimited offline Downloads and playlist
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div class="card">
          <div class="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className={style['card-body-text']}>Mini package</p>
                <p className={`text-muted ${style['card-body-text']}`}>
                  15 days
                </p>
              </div>
              <div>
                <p className={style['money-text']}>29 BDT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 mb-5">
        <div class="card">
          <div class="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className={style['card-body-text']}>Stander packages</p>
                <p className={`text-muted ${style['card-body-text']}`}>
                  30 days
                </p>
              </div>
              <div>
                <p className={style['money-text']}>39 BDT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="m-5 d-flex justify-content-center overflow-auto">
    //   <h5>Package</h5>
    // </div>
  );
}
