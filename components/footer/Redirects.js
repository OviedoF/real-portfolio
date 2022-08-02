import React from 'react'
import styles from './Redirects.module.scss'

export default function Redirects() {
  return (
    <div className={styles.redirects}>
              <div>
                            <p>View again! :)</p>
                            <ul>
                              <li>Home</li>
                              <li>About</li>
                              <li>Works</li>
                              <li>Contact</li>
                            </ul>
              </div>


              <div >
                <p>Or find me in this pages as</p>
                <ul>
                  <li>Facebook as</li>
                  <li>Freelancer as</li>
                  <li>Fiverr as</li>
                  <li>Hotmail as</li>
                  <li>Linkedin as</li>
                  <li>Github as</li>
                </ul>
              </div>

            </div>
  )
}
