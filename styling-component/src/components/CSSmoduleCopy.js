import React from "react";
import styles from "../cssmodule/CSSModule.module.css";

const CSSmoduleCopy = () => {
  return (
    <>
      <div className={styles.wrapper}>
        안녕하세요. <span className="something">CSSModule</span>
      </div>
    </>
  );
};

export default CSSmoduleCopy;
