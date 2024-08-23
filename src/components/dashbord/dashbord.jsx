import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../sidebar/sidebar";
import styles from "./dashbord.module.css";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaUpload } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { ThemeContext } from "../../App";
import { RxCross2 } from "react-icons/rx";
export default function Dashboard(props) {
  const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext);
  const user = localStorage.getItem("user");
  if (user) {
    var userData = JSON.parse(user);
  }
  console.log(userData);
  // Function to fetch data from the JSON file
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myJson) => setData(myJson))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.navbardiv}>
        <IoIosNotifications className={styles.iconstyle} />
        <img src={userData.picture} alt="" />
      </div>
      <Sidebar />
      <div className={styles.sidebardiv}>
        <div className={styles.innerdiv}>
          <RiFileExcel2Fill />
          <span>
            Drop your excel sheet here or{" "}
            <span className={styles.browse}>browse</span>
          </span>
        </div>
        <div className={styles.btndiv}>
          <button className={styles.btn}>
            <FaUpload />
            Upload
          </button>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>SI No</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody className={styles.tablerowstyle}>
            {data.length > 0 ? (
              data.slice(0, 5).map((item, index) => (
                <tr key={item.id} className={styles.temp}>
                  <td>{index + 1}</td>
                  <td>
                    <a
                      href={`https://${item.links}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.links}
                    </a>
                  </td>
                  <td>{item.prefix}</td>
                  <td>
                    <select className={styles.selecttag}>
                      <option value="">Select Tags</option>
                      {item["select tags"].split(", ").map((tag, tagIndex) => (
                        <option key={tagIndex} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    {item["selected tags"] ? (
                      item["selected tags"].split(", ").map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className={styles.tagname}>
                        TAG1
                        <RxCross2 />
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
