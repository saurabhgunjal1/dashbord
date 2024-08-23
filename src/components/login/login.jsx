import React, { useContext, useEffect, useState } from "react";
import styles from "./login.module.css";
import base from "../../assets/base.png";
import girlimg from "../../assets/girlimg.png";
import logocompany from "../../assets/logocompany.png";
import Button from "../button/button";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Dashbord from "../dashbord/dashbord";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
export default function Login() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  console.log("asb", isAuthenticated);
  // localStorage.setItem(user);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  console.log("User logged in:", user);
  localStorage.setItem("user", JSON.stringify(user));
  useEffect(() => {
    if (isAuthenticated && user) {
      console.log("User logged in:", user);

      navigate("/dashboard");
    }
  }, [isAuthenticated, user, navigate]);
  return (
    <>
      {!isAuthenticated ? (
        <div className={`${styles.topdiv} ${styles[theme]}`}>
          <div className={styles.rightdiv}>
            <div className={styles.imgdiv}>
              <div className={styles.imginnerdiv}>
                <img src={base} alt="img" className={styles.baseimg} />
                <div className={styles.textdiv}>
                  <h3>Generate detailed reports with just one click</h3>
                </div>
                <div className={styles.girlimgdiv}>
                  <Button />

                  <img src={girlimg} alt="" className={styles.girlimage} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.leftdiv}>
            <div className={styles.navbardiv}>
              <img src={logocompany} alt="logo" />
            </div>
            <div className={styles.leftinnerdiv}>
              <div className={styles.headdiv}>
                <h2>Sign In</h2>
                <h6>Sign in to your account</h6>
              </div>
              <div className={styles.googlesigndiv}>
                <span
                  className={styles.googlesignspan}
                  onClick={(e) => loginWithRedirect()}
                >
                  <FcGoogle />
                  Sign in with Google
                </span>
                <span className={styles.googlesignspan}>
                  <FaApple />
                  Sign in with Apple
                </span>
              </div>
              <div className={styles.loginformdiv}>
                <div className={styles.inputdiv}>
                  <label className={styles.emaillabel}>Email Address</label>
                  <input type="email" />
                </div>
                <div className={styles.inputdiv}>
                  <label className={styles.passwordlabel}>Password</label>
                  <input type="password" />
                </div>
                <p className={styles.forgotlabel}>Forgot password?</p>
                <button className={styles.signinbtn}>Sign In</button>
              </div>
              <span>
                Don't have an account?
                <button className={styles.registerbtn}>Register here</button>
              </span>
              <div className={styles.socialmediaicons}>
                <FaGithub />
                <AiFillTwitterCircle />
                <FaLinkedin />
                <IoLogoDiscord />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Dashbord />
      )}
    </>
  );
}
