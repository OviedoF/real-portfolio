import React from 'react'
import styles from './Redirects.module.scss'
import { useTranslation } from 'react-i18next'

export default function Redirects() {
  const [t] = useTranslation("global");

  return (
    <div className={styles.redirects}>
              <div >
                <p>{t("Footer.contact.title")}</p>
                <ul>
                  <li>{t("Footer.contact.facebook")}</li>
                  <li>{t("Footer.contact.freelancer")}</li>
                  <li>{t("Footer.contact.fiverr")}</li>
                  <li>{t("Footer.contact.email")}</li>
                  <li>{t("Footer.contact.linkedin")}</li>
                  <li>{t("Footer.contact.github")}</li>
                </ul>
              </div>

            </div>
  )
}
