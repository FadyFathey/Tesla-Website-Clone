import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import video1 from "../../assets/vedio1.mp4";
import video2 from "../../assets/video2.webm";
import { AiOutlineQuestionCircle, AiOutlineClose } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import Layer from "../utillites/layer";
import SectTow from "../sectTow/sectTow";
import model3 from "../../assets/model3.jpg";
import modelx from "../../assets/model-x.jpg";
import models from "../../assets/model-s.jpg";
import solarPanel from "../../assets/solar-panel.jpg";
import solarRoof from "../../assets/solar-roof.jpg";
import acc from "../../assets/acc.jpg";
import Footer from "../footer/footer";
const Home = () => {
  const menuContentRef = useRef(null);
  const menuNav = useRef(null);
  const [theTitle, setTitle] = useState("Model Y");
  const [theParagraph, setParagraph] = useState("Lease starting at $399/mo*");
  const layerRef = useRef();
  const [isLayerVisible, setLayerVisible] = useState(true);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const navIcons = useRef(null);
  const checkIsMobileScreen = () => {
    setIsMobileScreen(window.innerWidth < 768); // Adjust the width as per your definition of a small screen
  };
  const handelClose = () => {
    menuContentRef.current.style.display = "none";
    setLayerVisible(true);
  };
  const ToggleNavIcons = () => {
    console.log(navIcons);
    if (window.scrollY >= 4688) {
      navIcons.current.style.color = "black";
    }
  };

  useEffect(() => {
    ToggleNavIcons();
  }, []);
  const handelNav = () => {
    menuContentRef.current.style.display = "block";
    setLayerVisible(false);
  };
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const isMobileScreen = window.innerWidth <= 768;

    if (isMobileScreen) {
      if (scrollY >= 3241 && scrollY < 4688) {
        setTitle("Solar Panels");
        setParagraph("Lowest Cost Solar Panels in America");
      } else if (scrollY >= 2677 && scrollY < 3241) {
        setTitle("Experience Tesla");
        setParagraph("Schedule a Demo Drive Today");
      } else if (scrollY >= 2019 && scrollY < 2677) {
        setTitle("Model S");
        setParagraph("From $71,090*");
      } else if (scrollY >= 1267 && scrollY < 2019) {
        setTitle("Model X");
        setParagraph("From $68,590*");
      } else if (scrollY >= 600 && scrollY < 1267) {
        setTitle("Model 3");
        setParagraph("Lease starting at $399/mo*");
      } else if (scrollY >= 4688) {
        setTitle("Accessories");
        setParagraph("");
      } else {
        // Reset title and paragraph when outside these ranges in mobile view
        setTitle("Model Y");
        setParagraph("Lease starting at $399/mo*");
      }
    } else {
      if (scrollY >= 599 && scrollY < 1300) {
        setTitle("Model 3");
        setParagraph("Lease starting at $399/mo*");
      } else if (scrollY >= 1300 && scrollY < 2247) {
        setTitle("Model X");
        setParagraph("From $68,590*");
      } else if (scrollY >= 2247 && scrollY < 3000) {
        setTitle("Model S");
        setParagraph("From $71,090*");
      } else if (scrollY >= 3000 && scrollY < 3901) {
        setTitle("Experience Tesla");
        setParagraph("Schedule a Demo Drive Today");
      } else if (scrollY >= 3901 && scrollY < 5000) {
        setTitle("Solar Panels");
        setParagraph("Lowest Cost Solar Panels in America");
      } else if (scrollY >= 5000) {
        setTitle("Accessories");
        setParagraph("");
      } else {
        // Reset title and paragraph when outside these ranges in non-mobile view
        setTitle("Model Y");
        setParagraph("Lease starting at $399/mo*");
      }
    }
  };

  useEffect(() => {
    checkIsMobileScreen(); // Check on initial load
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", ToggleNavIcons);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("scroll", ToggleNavIcons);
    };
  }, [isMobileScreen]);
  return (
    <div className="section-1">
      {isLayerVisible ? <video src={video1} autoPlay loop muted></video> : null}
      <div className="container">
        <nav className="content">
          <img src={logo} alt="logo" />
          <ul className="middle-ul">
            <li>Vehicles</li>
            <li>Energy</li>
            <li>Charging</li>
            <li>Discover</li>
            <li>Shop</li>
          </ul>
          <ul className="sec-ul">
            <div style={{ display: "flex" }} ref={navIcons}>
              <li>
                <AiOutlineQuestionCircle style={{ marginRight: "5px" }} />
              </li>
              <li>
                <TbWorld style={{ marginRight: "5px" }} />
              </li>
              <li>
                <BsPersonCircle style={{ marginRight: "5px" }} />
              </li>
            </div>
          </ul>
        </nav>
        {/* Show only on responsive */}
        <div ref={menuNav} className="nav-menu">
          <span style={{ position: "fixed" }} onClick={handelNav}>
            menu
          </span>
        </div>
      </div>
      <div ref={menuContentRef} className="menu-content">
        <div className="menu-text">
          <div
            onClick={handelClose}
            style={{ float: "right", cursor: "pointer" }}
          >
            <AiOutlineClose />
          </div>
          <ul className="middle-ul">
            <li>Vehicles</li>
            <li>Energy</li>
            <li>Charging</li>
            <li>Discover</li>
            <li>Shop</li>
            <li>Support</li>
          </ul>
          <ul className="sec-ul">
            <div style={{ width: "130px", display: "flex" }}>
              <li>
                <TbWorld />
              </li>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                  lineHeight: "1.8",
                  marginTop: "7px",
                }}
              >
                <span style={{ fontWeight: "400" }}>Egypt</span>
                <span style={{ fontWeight: "100", color: "rgb(92, 94, 98)" }}>
                  English
                </span>
              </div>
            </div>
            <div style={{ width: "130px", display: "flex" }}>
              <li>
                <BsPersonCircle />
              </li>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                  lineHeight: "1.8",
                  marginTop: "7px",
                }}
              >
                <span style={{ fontWeight: "400" }}>Account</span>
              </div>
            </div>
          </ul>
        </div>
      </div>
      {isLayerVisible ? (
        <Layer
          title={theTitle}
          color={window.scrollY >= 599 ? "black" : "white"}
          paragraph={theParagraph}
          ref={layerRef}
        />
      ) : null}

      {isLayerVisible ? (
        <>
          <SectTow img={model3} />
          <SectTow img={modelx} />
          <SectTow img={models} />
          <video src={video2} autoPlay loop muted></video>
          <SectTow img={solarPanel} />
          <SectTow img={solarRoof} />
          <SectTow img={acc} />
          <Footer />
        </>
      ) : null}
    </div>
  );
};

export default Home;
