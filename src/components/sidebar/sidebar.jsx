import React, { useState, useContext } from "react";
import styles from "./sidebar.module.css";
import base from "../../assets/base.png";
import { IoIosSettings } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { PiInvoiceBold } from "react-icons/pi";
import { RiFileChartLine } from "react-icons/ri";
import { BsFillFileTextFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContext } from "../../App";

import Button from "../button/button";
export default function Sidebar() {
  // State to track the sidebar visibility
  const { theme } = useContext(ThemeContext);

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Toggle sidebar visibility
  const handleToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className={`${styles.wrapper} ${styles[theme]}`}>
        <div className={styles.section}></div>

        {/* Conditional rendering of sidebar */}
        <div
          className={`${styles.sidebar} ${
            isSidebarVisible ? styles.show : styles.hide
          }`}
        >
          <div className={styles.top_navbar}>
            <div className={styles.hamburger} onClick={handleToggle}>
              <GiHamburgerMenu />
            </div>
          </div>
          <div className={styles.profile}>
            <img src={base} alt="profile_picture" />
          </div>
          <div>
            <ul>
              <li>
                <a href="#">
                  <span className={styles.icon}>
                    <RxDashboard />
                  </span>
                  <span className={styles.item}>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles.active}>
                  <span className={styles.icon}>
                    <RiFileChartLine />
                  </span>
                  <span className={styles.item}>Upload</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.icon}>
                    <PiInvoiceBold />
                  </span>
                  <span className={styles.item}>Invoice</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.icon}>
                    <BsFillFileTextFill />
                  </span>
                  <span className={styles.item}>Schedule</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.icon}>
                    <FaCalendarAlt />
                  </span>
                  <span className={styles.item}>Calendar</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.icon}>
                    <IoIosNotifications />
                  </span>
                  <span className={styles.item}>Notification</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.icon}>
                    <IoIosSettings />
                  </span>
                  <span className={styles.item}>Settings</span>
                </a>
              </li>
            </ul>
            <div className={styles.themebtn}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
