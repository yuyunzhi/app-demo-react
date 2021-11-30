import React, { useEffect } from "react";
import styles from "./Page1.css";
import { useParams, useLocation } from "react-router-dom";
function Page1() {
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    console.log(params, location);
  });
  return <div className={styles.title}>1`23123123</div>;
}

export default Page1;
