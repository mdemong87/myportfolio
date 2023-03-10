"use client"

import Animation from "componnet/BackgroundAnimation/Animation";
import Container from "componnet/container/Container";
import { useState } from "react";
import styles from "./layout.module.css";


export default function RootLayout({ children }) {

  const [dark, setdark] = useState(true);



  return (
    <html lang="en">
      <head />
      <body className={styles.layoutbody}>
        <div className={styles.animation}>
          <Animation />
        </div>
        <div className={styles.mood}>
          <div>
            <input onChange={() => setdark(false)} checked={dark ? false : true} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlfor="vehicle1">Light</label>
          </div>
          <div>
            <input onChange={() => setdark(true)} checked={dark ? true : false} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlfor="vehicle1">Dark</label>
          </div>
        </div>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
