import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContact() {
      const response = await fetch("/api/contact");
      const data = await response.json();
      console.log(data);
      setContacts(data.data);
    }
    fetchContact();
  }, []);

  return (
    <div className={styles.container}>
      {contacts.map((contact) => (
        <div className={styles.card} key={contact.id}>
          <div className={styles.nama}>
            <h2>{contact.name}</h2>
          </div>
          <div className={styles.phoneNumber}>
            <p>{contact.phone_number}</p>
          </div>
          <div className={styles.adress}>
            <h4>{contact.address}</h4>
          </div>
          <button className={styles.btnCustom}>🖤</button>
        </div>
      ))}
    </div>
  );
}
