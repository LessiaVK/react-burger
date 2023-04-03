import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

export function NotFound404() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className="text text_type_main-large pb-10 pt-10">
            Oops! 404 Error
          </p>
          <p className="text text_type_main-default ml-10">
            The page you requested does not exist
          </p>
          <br />
          <br />
          <p className="text text_type_main-default ml-10">
            check the address or try{" "}
            <Link
              to="/"
              className="text text_type_main-default ml-10 text_color_inactive"
            >
              homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
